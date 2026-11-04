<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Button from '$lib/components/Button.svelte';
	import Toast from '$lib/components/Toast.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let website = $state('');
	let sending = $state(false);
	let status = $state<'idle' | 'success' | 'error'>('idle');
	let feedback = $state('');
	let toastId = $state(0);

	function dismissToast() {
		dismissToast();
	}

	function showToast(nextStatus: 'success' | 'error', message: string) {
		status = nextStatus;
		feedback = message;
		toastId += 1;
	}

	async function submitContact(event: SubmitEvent) {
		event.preventDefault();
		if (sending) return;

		sending = true;
		status = 'idle';
		feedback = '';

		try {
			// The Vercel endpoint supplies our public Web3Forms form identifier.
			const configResponse = await fetch('/api/contact', { cache: 'no-store' });
			const config: { access_key?: string; message?: string } = await configResponse.json();
			if (!configResponse.ok || !config.access_key) {
				throw new Error(config.message ?? 'The form is temporarily unavailable.');
			}

			// Web3Forms free tier expects submissions from the visitor's browser.
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: config.access_key,
					name: name.trim(),
					email: email.trim(),
					message: message.trim(),
					subject: 'New portfolio contact message',
					from_name: 'Mariela Portfolio',
					botcheck: Boolean(website)
				})
			});
			const result: {
				success?: boolean;
				message?: string;
				body?: { message?: string };
			} = await response.json();

			if (!response.ok || !result.success) {
				console.error('Web3Forms submission rejected:', response.status, result.message ?? result.body?.message);
				throw new Error('Could not send your message. Please try again or use the email link.');
			}

			showToast('success', 'Thanks! Your message has been sent.');
			name = '';
			email = '';
			message = '';
			website = '';
		} catch (error) {
			showToast('error', error instanceof Error ? error.message : 'Could not send your message.');

		} finally {
			sending = false;
		}
	}
</script>

<section class="px-6 py-24">
	<div id="contact" class="mx-auto max-w-6xl scroll-mt-[100px]">
		<div class="mb-10 max-w-2xl space-y-4">
			<p class="text-xs font-semibold uppercase tracking-[0.25em] text-muted-custom">Get in touch</p>
			<h2 class="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-primary md:text-6xl">Let's <span class="brand-gradient-text">create something amazing</span> together!</h2>
			<p class="text-lg leading-relaxed text-secondary">
				Hiring a Senior Product Designer or looking for help with UX/UI, accessibility or front-end implementation? I'd love to hear from you :)
			</p>
		</div>

		<div class="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
				<div class="flex min-h-32 items-start gap-4 rounded-[var(--radius-card)] border border-white/70 bg-white/60 p-6 shadow-[0_18px_60px_rgba(17,17,17,0.05)]">
					<span aria-hidden="true" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--gradient-purple)_35%,white)] text-primary">
						<span class="material-symbols-rounded">mail</span>
					</span>
					<span class="min-w-0">
						<span class="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-custom">Email</span>
						<span class="mt-2 block break-all text-sm font-semibold text-primary sm:text-base">{profile.email}</span>
						<span class="mt-2 block text-xs text-secondary">Reach out directly</span>
						<span class="mt-4 block"><Button href={`mailto:${profile.email}`} label="Email me" variant="secondary" size="compact" /></span>
					</span>
				</div>

				<div class="flex min-h-32 items-start gap-4 rounded-[var(--radius-card)] border border-white/70 bg-white/60 p-6 shadow-[0_18px_60px_rgba(17,17,17,0.05)]">
					<span aria-hidden="true" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--gradient-blue)_35%,white)] text-primary">
						<span class="material-symbols-rounded">work</span>
					</span>
					<span>
						<span class="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-custom">LinkedIn</span>
						<span class="mt-2 block text-base font-semibold text-primary">Connect with me</span>
						<span class="mt-2 block text-xs text-secondary">Professional opportunities and collaborations</span>
						<span class="mt-4 block"><Button href={profile.socials.linkedin} label="LinkedIn" variant="secondary" size="compact" target="_blank" rel="noopener noreferrer" /></span>
					</span>
				</div>
			</div>

			<form
				onsubmit={submitContact}
				class="rounded-[var(--radius-panel)] border border-white/70 bg-white/65 p-6 shadow-[0_24px_80px_rgba(17,17,17,0.07)] backdrop-blur-md sm:p-8"
			>
				<h3 class="font-display text-3xl font-semibold tracking-[-0.04em] text-primary">Send me a message</h3>
				<p class="mt-2 text-sm leading-relaxed text-secondary">Tell me a little about your project or opportunity.</p>

				<div class="mt-7 grid gap-5">
					<div class="grid gap-2">
						<label for="contact-name" class="text-sm font-semibold text-primary">Your name</label>
						<input id="contact-name" name="name" type="text" autocomplete="name" required minlength="2" maxlength="100" bind:value={name}
							class="min-h-12 w-full rounded-2xl border border-black/20 bg-white/80 px-4 py-3 text-base text-primary outline-offset-4 focus-visible:outline-3 focus-visible:outline-[#111111]"
							placeholder="How should I call you?" />
					</div>
					<div class="grid gap-2">
						<label for="contact-email" class="text-sm font-semibold text-primary">Email address</label>
						<input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="254" bind:value={email}
							class="min-h-12 w-full rounded-2xl border border-black/20 bg-white/80 px-4 py-3 text-base text-primary outline-offset-4 focus-visible:outline-3 focus-visible:outline-[#111111]"
							placeholder="you@example.com" />
					</div>
					<div class="grid gap-2">
						<label for="contact-message" class="text-sm font-semibold text-primary">Your message</label>
						<textarea id="contact-message" name="message" required minlength="10" maxlength="5000" rows="5" bind:value={message}
							class="w-full resize-y rounded-2xl border border-black/20 bg-white/80 px-4 py-3 text-base text-primary outline-offset-4 focus-visible:outline-3 focus-visible:outline-[#111111]"
							placeholder="What would you like to work on together?"></textarea>
					</div>
					<div class="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
						<label for="contact-website">Leave this field empty</label>
						<input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off" bind:value={website} />
					</div>
					<div class="flex justify-stretch sm:justify-end">
						<Button type="submit" label={sending ? 'Sending...' : 'Send message'} variant="primary" disabled={sending} />
					</div>

				</div>
			</form>
		</div>
	</div>
</section>

{#if status !== 'idle' && feedback}
	<div class="pointer-events-none fixed inset-x-4 bottom-4 z-[110] sm:inset-x-auto sm:right-6 sm:w-[min(24rem,calc(100vw-3rem))]">
		{#key toastId}
			<Toast kind={status === 'error' ? 'error' : 'success'} message={feedback} onDismiss={dismissToast} />
		{/key}
	</div>
{/if}
