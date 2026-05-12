<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { skills } from '$lib/data/skills';

	const skillGroups = [
		{
			title: 'Design',
			kicker: 'How I shape ideas',
			description:
				'From research and flows to polished UI systems, I like designing things that feel clear, useful and easy to trust.',
			items: skills.design,
			accent: 'var(--gradient-pink)',
			icon: 'draw'
		},
		{
			title: 'Development',
			kicker: 'How I bring them to life',
			description:
				'I enjoy turning visual decisions into responsive, accessible and maintainable front-end details.',
			items: skills.development,
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
		<div class="grid gap-6 md:grid-cols-1 items-center text-center mx-auto">
			<div class="space-y-4">
				<p
					data-skills-reveal
					class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]"
				>
					Toolbox
				</p>

				<h2
					data-skills-reveal
					class="font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl"
				>
					The little systems behind the magic ;)
				</h2>
			</div>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each skillGroups as group}
				<article
					data-skills-reveal
					style:--skill-accent={group.accent}
					class="group relative overflow-hidden rounded-[var(--radius-panel)] border border-white/70 bg-white/45 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[var(--skill-accent)] md:p-8"
				>
					<div
						class="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/30 blur-3xl transition duration-300 group-hover:bg-white/45"
					></div>

					<div class="relative z-10">
						<div class="flex items-start justify-between gap-6">
							<div>
								<p
									class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition duration-300 group-hover:text-white/70"
								>
									{group.kicker}
								</p>

								<h3
									class="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] transition duration-300 group-hover:text-white md:text-5xl"
								>
									{group.title}
								</h3>
							</div>

							<span
								class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-3 text-[var(--color-text-primary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white/20 group-hover:text-white"
							>
								{group.icon}
							</span>
						</div>

						<p
							class="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] transition duration-300 group-hover:text-white/85"
						>
							{group.description}
						</p>

						<div class="mt-8 flex flex-wrap gap-3">
							{#each group.items as skill}
								<span
									class="rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/20 group-hover:text-white"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>