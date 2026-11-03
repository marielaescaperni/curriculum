<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Button from '$lib/components/Button.svelte';
	import { animateOnView } from '$lib/actions/animateOnView';

	const highlights = ['Product Design', 'Accessible UX', 'UX Engineering'];
</script>

<section
	class="relative overflow-hidden px-6 pb-20 pt-36 md:pb-24 md:pt-40"
	use:animateOnView={{
		selector: '[data-hero-reveal]',
		y: 24,
		duration: 850,
		delay: 80,
		threshold: 0.16
	}}
>
	<div class="mx-auto max-w-6xl">
		<div class="max-w-5xl">
			<p data-hero-reveal class="mb-5 text-sm font-semibold text-secondary md:text-base">
				{profile.role}
			</p>

			<div class="mb-7 flex flex-wrap gap-3">
				{#each highlights as item}
					<span
						data-hero-reveal
						class="rounded-full border border-soft bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
					>
						{item}
					</span>
				{/each}
			</div>

			<h1
				data-hero-reveal
				class="font-display max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-tight text-[var(--color-text-primary)] md:text-7xl lg:text-[5.5rem]"
			>
				I turn <span class="brand-gradient-text">complex products</span> into clear, accessible experiences.
			</h1>

			<p data-hero-reveal class="mt-8 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
				{profile.heroSummary}
			</p>

			<div data-hero-reveal class="mt-9 flex flex-wrap gap-4">
				<Button href="#projects" label="My work :)" variant="primary" />
				<Button href="#contact" label="Let's talk" variant="secondary" />
			</div>
		</div>

	</div>
</section>
