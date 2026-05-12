<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section id="contact" class="px-6 py-24">
	<div
		class="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-neutral-950 p-10 text-white md:p-16"
	>
		<div class="bg-main-gradient absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"></div>

		<div class="relative z-10">
			<p class="text-sm uppercase tracking-[0.3em] text-neutral-400">Contact</p>

			<h2 class="mt-4 max-w-3xl font-display text-4xl font-semibold leading-none md:text-6xl">
				Let’s build something thoughtful together.
			</h2>

			<p class="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
				Have a project, idea, or collaboration in mind? I’d love to hear about it.
			</p>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button href="mailto:marielaescalantep@gmail.com" label="Say hello" variant="secondary" />

				<Button
	href="https://calendly.com/marielaescalantep"
	label="Book a call"
	variant="primary"
	target="_blank"
	rel="noreferrer"
/>
			</div>
		</div>
	</div>
</section>