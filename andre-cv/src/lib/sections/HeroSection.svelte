<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Button from '$lib/components/Button.svelte';
	import { animateOnView } from '$lib/actions/animateOnView';

	const highlights = ['Product Design', 'Accessible UX', 'UX Engineering'];
</script>

<section
	class="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44"
	use:animateOnView={{
		selector: '[data-hero-reveal]',
		y: 24,
		duration: 850,
		delay: 80,
		threshold: 0.16
	}}
>

	<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 hidden lg:block">
		<img
			src="/images/hero/creature-1.png"
			alt=""
			width="160"
			height="160"
			loading="lazy"
			decoding="async"
			class="absolute right-[max(1rem,calc((100vw-85rem)/2))] top-[13rem] w-28 xl:right-[max(1.5rem,calc((100vw-88rem)/2))] xl:w-36"
		/>
		<img
			src="/images/hero/creature-2.png"
			alt=""
			width="160"
			height="160"
			loading="lazy"
			decoding="async"
			class="absolute bottom-3 left-[max(1rem,calc((100vw-85rem)/2))] w-28 xl:left-[max(1.5rem,calc((100vw-88rem)/2))] xl:w-36"
		/>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<div class="mx-auto flex max-w-4xl flex-col items-center text-center">
			<p data-hero-reveal class="mb-5 text-sm font-semibold text-secondary md:text-base">
				{profile.role}
			</p>

			<div class="mb-7 flex flex-wrap justify-center gap-3">
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
				class="font-display mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-[5.25rem]"
			>
				I turn <span class="brand-gradient-text">complex products</span> into clear, accessible experiences.
			</h1>

			<p data-hero-reveal class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
				{profile.heroSummary}
			</p>

			<div data-hero-reveal class="mt-9 flex w-full flex-wrap justify-center gap-4 sm:w-auto">
				<Button href="#projects" label="My work :)" variant="primary" />
				<Button href="#contact" label="Let's talk" variant="secondary" />
			</div>
		</div>

	</div>
</section>
