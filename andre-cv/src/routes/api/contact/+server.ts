import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

// Web3Forms access keys are public form identifiers, not secret API tokens.
// Web3Forms' free tier submits from the browser, rather than a server-side proxy.
export const GET: RequestHandler = () => {
	const accessKey = env.WEB3FORMS_ACCESS_KEY?.trim();

	if (!accessKey) {
		return json(
			{ message: 'The contact form is temporarily unavailable. Please use the email link.' },
			{ status: 503, headers: { 'Cache-Control': 'no-store' } }
		);
	}

	return json({ access_key: accessKey }, { headers: { 'Cache-Control': 'no-store' } });
};
