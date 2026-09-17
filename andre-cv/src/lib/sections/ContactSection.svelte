<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section class="px-6 py-24">
	<div
		id="contact"
		class="relative mx-auto max-w-6xl scroll-mt-[120px] overflow-hidden rounded-3xl bg-main-gradient p-10 text-black md:p-16"
	>
		<div class="bg-main-gradient absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"></div>

		<div class="relative z-10">
			<p class="text-sm uppercase tracking-[0.3em] text-black">Let’s talk</p>

			<h2 class="mt-4 max-w-4xl font-display text-4xl font-semibold leading-none md:text-6xl">
				Hiring for a Senior Product Designer or someone who can bridge product design and implementation?
			</h2>

			<p class="mt-6 max-w-2xl text-base leading-7 md:text-lg">
				I’m interested in product teams working on complex SaaS, enterprise, mobile or accessibility-heavy experiences. I’d love to hear what you’re building :)
			</p>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button href="mailto:marielaescalantep@gmail.com" label="Email me" variant="primary" />
				<Button href="https://www.linkedin.com/in/mariela-escalante" label="LinkedIn" variant="secondary" target="_blank" rel="noreferrer" />
			</div>
		</div>
	</div>
</section>
