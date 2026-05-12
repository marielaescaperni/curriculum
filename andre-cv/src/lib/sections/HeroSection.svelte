<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Button from '$lib/components/Button.svelte';
	import { animateOnView } from '$lib/actions/animateOnView';
	import { scrambleOnView } from '$lib/actions/scrambleOnView';

	const highlights = ['UX/UI Design', 'Front-End Development', 'Design Systems'];
</script>

<section
	class="section-space relative overflow-hidden px-4 pt-44"
	use:animateOnView={{
		selector: '[data-hero-reveal]',
		y: 24,
		duration: 2200,
		delay: 250,
		threshold: 0.16
	}}
>
	<div class="container-page mt-10 md:mt-10 lg:mt-0">
		<div class="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
			<div>
				<div class="mb-8 flex flex-wrap gap-3">
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
					class="font-display text-6xl font-semibold leading-[0.86] tracking-tight text-[var(--color-text-primary)] md:text-8xl lg:text-9xl"
				>
					Creating <span class="brand-gradient-text">digital experiences</span>
				</h1>

				<p
					data-hero-reveal
					class="mt-8 max-w-2xl text-xl leading-relaxed text-secondary md:text-2xl"
				>
					{profile.tagline}
				</p>

				<div data-hero-reveal class="mt-10 flex flex-wrap gap-4">
					<Button href="#projects" label="my work ;D" variant="primary" />
					<Button href="#contact" label="let’s talk!" variant="secondary" />
				</div>
			</div>

			<div data-hero-reveal class="relative flex justify-center lg:justify-end">
				<div
					class="absolute inset-x-8 top-14 h-72 rounded-full bg-[linear-gradient(135deg,var(--gradient-pink),var(--gradient-blue),var(--gradient-green))] opacity-30 blur-3xl"
				></div>

				<div class="surface-card relative w-full max-w-[34rem] overflow-hidden p-6 md:p-8">
					<div
						class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]"
					></div>

					<div class="relative z-10">
						<div data-hero-reveal class="flex items-center justify-between">
							<p class="text-xs font-semibold uppercase tracking-[0.24em] text-muted-custom">
								Currently
							</p>

							<span class="h-3 w-3 rounded-full bg-[#92e6ad]"></span>
						</div>

						<div data-hero-reveal class="mt-8 flex justify-center">
							<img
	src="/avatar.png"
	alt="Digital avatar of Andre"
	class="float-soft w-full max-w-[22rem] drop-shadow-2xl"
/>
						</div>

						<div class="mt-8 grid gap-3 sm:grid-cols-3">
							<div data-hero-reveal class="rounded-3xl border border-soft bg-surface p-4">
								<p class="font-display text-4xl font-semibold leading-none">8+</p>
								<p class="mt-2 text-sm text-secondary">Years</p>
							</div>

							<div data-hero-reveal class="rounded-3xl border border-soft bg-surface p-4">
								<p class="font-display text-4xl font-semibold leading-none">UY</p>
								<p class="mt-2 text-sm text-secondary">Remote</p>
							</div>

							<div data-hero-reveal class="rounded-3xl border border-soft bg-surface p-4">
								<p class="font-display text-4xl font-semibold leading-none">UX</p>
								<p class="mt-2 text-sm text-secondary">+ Front-end</p>
							</div>
						</div>

						<p data-hero-reveal class="mt-6 text-sm leading-relaxed text-secondary">
							Working across UX/UI design and front-end development for products that need
							to feel clear, usable and polished.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<style>
	@keyframes float-soft {
	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-10px);
	}
}

.float-soft {
	animation: float-soft 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
	.float-soft {
		animation: none;
	}
}
</style>