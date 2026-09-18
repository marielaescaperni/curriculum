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
		duration: 2200,
		delay: 250,
		threshold: 0.16
	}}
>
	<div class="mx-auto max-w-6xl">
		<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
			<div>
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
					class="font-display max-w-4xl text-balance text-5xl font-semibold leading-[0.92] tracking-tight text-[var(--color-text-primary)] md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem]"
				>
					I turn <span class="brand-gradient-text">complex products</span> into clear, accessible experiences.
				</h1>

				<p
					data-hero-reveal
					class="mt-7 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl"
				>
					{profile.heroSummary}
				</p>

				<div data-hero-reveal class="mt-9 flex flex-wrap gap-4">
					<Button href="#projects" label="My work :)" variant="primary" />
					<Button href="#contact" label="Let's talk" variant="secondary" />
				</div>
			</div>

			<div data-hero-reveal class="relative flex justify-center lg:justify-end">
				<div
					class="absolute inset-x-8 top-14 h-64 rounded-full bg-[linear-gradient(135deg,var(--gradient-pink),var(--gradient-blue),var(--gradient-green))] opacity-30 blur-3xl"
				></div>

				<div class="surface-card relative w-full max-w-[26rem] overflow-hidden p-5 md:p-6">
					<div
						class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]"
					></div>

					<div class="relative z-10">
						<p data-hero-reveal class="text-xs font-semibold uppercase tracking-[0.24em] text-muted-custom">
							Design + product + code
						</p>

						<div data-hero-reveal class="mt-6 flex justify-center">
							<img
								src="/profile-photo.jpg"
								alt=""
								width="800"
								height="1000"
								decoding="async"
								class="w-full max-w-[12.5rem] rounded-[2rem] md:max-w-[13.5rem] border border-white/70 object-cover shadow-[0_20px_60px_rgba(17,17,17,0.16)]"
							/>
						</div>

						<div class="mt-6 grid gap-3 sm:grid-cols-3">
							<div data-hero-reveal class="rounded-3xl border border-soft bg-surface p-4">
								<p class="font-display text-3xl font-semibold leading-none">8+</p>
								<p class="mt-2 text-sm text-secondary">Years designing products</p>
							</div>

							<div data-hero-reveal class="rounded-3xl border border-soft bg-surface p-4">
								<p class="font-display text-3xl font-semibold leading-none">E2E</p>
								<p class="mt-2 text-sm text-secondary">Discovery → delivery</p>
							</div>

							<div data-hero-reveal class="rounded-3xl border border-soft bg-surface p-4">
								<p class="font-display text-3xl font-semibold leading-none">UX</p>
								<p class="mt-2 text-sm text-secondary">Design + code</p>
							</div>
						</div>

						<p data-hero-reveal class="mt-5 text-sm leading-relaxed text-secondary">
							I’m most useful where complex product thinking, thoughtful interaction design and implementation need to stay connected.
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
