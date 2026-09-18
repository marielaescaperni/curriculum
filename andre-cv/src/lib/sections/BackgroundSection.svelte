<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { awards } from '$lib/data/awards';
	import { education } from '$lib/data/education';
	import { languages } from '$lib/data/languages';
</script>

<section
	id="background"
	class="px-6 pt-16 md:pt-24"
	use:animateOnView={{
		selector: '[data-background-reveal]',
		y: 20,
		delay: 90,
		duration: 850,
		threshold: 0.18
	}}
>
	<div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1.25fr]">
		<div class="space-y-4">
			<p data-background-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">Background</p>
			<h2 data-background-reveal class="max-w-sm font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-5xl">
				Learning, recognition and languages.
			</h2>
		</div>

		<div class="space-y-10">
			<div data-background-reveal class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-[var(--radius-card)] border border-white/70 bg-white/35 p-6 backdrop-blur-md">
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">Education</p>
					{#each education as item}
						<h3 class="mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
						<p class="mt-2 text-[var(--color-text-secondary)]">{item.institution}</p>
						<p class="mt-1 text-sm text-[var(--color-text-muted)]">{item.period}{item.location ? ` · ${item.location}` : ''}</p>
					{/each}
				</div>

				<div class="rounded-[var(--radius-card)] border border-white/70 bg-white/35 p-6 backdrop-blur-md">
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">Languages</p>
					<div class="mt-4 space-y-4">
						{#each languages as language}
							<div>
								<h3 class="font-display text-2xl font-semibold tracking-[-0.04em]">{language.name}</h3>
								<p class="mt-1 text-sm text-[var(--color-text-secondary)]">{language.level}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div data-background-reveal class="space-y-5">
				<div class="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
					<h3 class="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)]">Recognition</h3>
					<span class="material-symbols-rounded text-[var(--color-text-muted)]">trophy</span>
				</div>

				{#each awards as item}
					<article class="rounded-[var(--radius-card)] border border-white/70 bg-white/35 p-6 backdrop-blur-md">
						<h4 class="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)]">{item.title}</h4>
						<p class="mt-3 text-sm text-[var(--color-text-muted)]">{item.location}</p>
						<p class="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
						{#if item.link}
							<a class="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition hover:translate-x-1" href={item.link} target="_blank" rel="noreferrer">
								{item.linkLabel}
								<span class="material-symbols-rounded text-base">arrow_forward</span>
							</a>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
