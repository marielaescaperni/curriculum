import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request, fetch, url }) => {
	const origin = request.headers.get('origin');
	if (origin && origin !== url.origin) {
		return json({ message: 'Invalid request origin.' }, { status: 403 });
	}

	const contentType = request.headers.get('content-type') ?? '';
	if (!contentType.includes('application/json')) {
		return json({ message: 'Unsupported request format.' }, { status: 415 });
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return json({ message: 'Invalid request body.' }, { status: 400 });
	}

	if (!body || typeof body !== 'object' || Array.isArray(body)) {
		return json({ message: 'Invalid form submission.' }, { status: 400 });
	}

	const fields = body as Record<string, unknown>;
	const name = typeof fields.name === 'string' ? fields.name.trim() : '';
	const email = typeof fields.email === 'string' ? fields.email.trim() : '';
	const message = typeof fields.message === 'string' ? fields.message.trim() : '';

	// Hidden field that real visitors do not interact with.
	if (fields.website) {
		return json({ message: 'Message received.' });
	}

	if (
		name.length < 2 || name.length > 100 ||
		email.length > 254 || !EMAIL_PATTERN.test(email) ||
		message.length < 10 || message.length > 5000
	) {
		return json({ message: 'Please check your name, email and message.' }, { status: 400 });
	}

	const apiKey = env.RESEND_API_KEY;
	const sender = env.CONTACT_FROM_EMAIL;
	const recipient = env.CONTACT_TO_EMAIL;

	if (!apiKey || !sender || !recipient) {
		console.error('Contact form: Resend environment variables are not configured.');
		return json({ message: 'The form is temporarily unavailable. Please contact me directly by email.' }, { status: 503 });
	}

	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: sender,
				to: [recipient],
				reply_to: email,
				subject: 'New portfolio message',
				text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
			})
		});

		if (!response.ok) {
			console.error('Contact form: Resend rejected the request.', response.status);
			return json({ message: 'Could not send your message. Please try again or use the email link.' }, { status: 502 });
		}

		return json({ message: 'Thanks! Your message has been sent.' });
	} catch {
		console.error('Contact form: Email service could not be reached.');
		return json({ message: 'Could not send your message. Please try again or use the email link.' }, { status: 502 });
	}
};
