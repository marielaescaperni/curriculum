<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { capabilities } from '$lib/data/capabilities';

	const skillGroups = [
		{
			title: 'Product & UX',
			kicker: 'From messy problems to clear product direction',
			items: capabilities.productUx.slice(0, 6),
			accent: 'var(--gradient-pink)',
			icon: 'strategy'
		},
		{
			title: 'Research & Validation',
			kicker: 'Grounding decisions in evidence',
			items: capabilities.researchValidation.slice(0, 6),
			accent: 'var(--gradient-purple)',
			icon: 'query_stats'
		},
		{
			title: 'Systems & Accessibility',
			kicker: 'Making experiences scalable and inclusive',
			items: capabilities.systemsAccessibility.slice(0, 6),
			accent: 'var(--gradient-green)',
			icon: 'accessibility_new'
		},
		{
			title: 'UX Engineering',
			kicker: 'Keeping design decisions connected to production',
			items: capabilities.uxEngineering.slice(0, 6),
			accent: 'var(--gradient-blue)',
			icon: 'code'
		}
	];
</script>

<section
	id="skills"
	class="px-6 pt-20 lg:pt-30 scroll-mt-[90px]"
	use:animateOnView={{
		selector: '[data-skills-reveal]',
		y: 24,
		delay: 90,
		duration: 900,
		threshold: 0.18
	}}
>
	<div class="mx-auto max-w-6xl space-y-10">
		<div class="mx-auto max-w-3xl space-y-4 text-center">
			<p data-skills-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
				Capabilities
			</p>
			<h2 data-skills-reveal class="font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl">
				What I bring to a product team.
			</h2>
			<p data-skills-reveal class="text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
				A focused view of the capabilities I use most often. The full toolset and ATS keywords live in my CV.
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each skillGroups as group}
				<article
					data-skills-reveal
					style:--skill-accent={group.accent}
					class="group relative overflow-hidden rounded-[var(--radius-panel)] border border-white/70 bg-white/45 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[var(--skill-accent)] md:p-8"
				>
					<div class="relative z-10">
						<div class="flex items-start justify-between gap-6">
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition duration-300 group-hover:text-white/70">
									{group.kicker}
								</p>
								<h3 class="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] transition duration-300 group-hover:text-white md:text-5xl">
									{group.title}
								</h3>
							</div>
							<span class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-3 text-[var(--color-text-primary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white/20 group-hover:text-white">
								{group.icon}
							</span>
						</div>

						<div class="mt-8 flex flex-wrap gap-3">
							{#each group.items as skill}
								<span class="rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:border-white/25 group-hover:bg-white/20 group-hover:text-white">
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div data-skills-reveal class="surface-card p-6 md:p-8">
			<div class="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">AI-assisted workflow</p>
					<h3 class="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">Faster exploration, same design judgment.</h3>
				</div>
				<div class="flex flex-wrap gap-3">
					{#each capabilities.aiWorkflow as tool}
						<span class="rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]">{tool}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
