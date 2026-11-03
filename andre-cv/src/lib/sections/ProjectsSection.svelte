<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import FeaturedProjectSlide from '$lib/components/projects/FeaturedProjectSlide.svelte';
	import { featuredProjects, secondaryProjects, archiveProjects, mapperBpmRework } from '$lib/data/projects';
	import EmblaCarousel from '$lib/components/carousel/EmblaCarousel.svelte';

	let openSecondaryProject = $state<string | null>(null);

	const selectedWork = [
		{
			slug: mapperBpmRework.slug,
			title: mapperBpmRework.title,
			role: mapperBpmRework.meta.role,
			period: mapperBpmRework.period,
			description: mapperBpmRework.description,
			tags: mapperBpmRework.tags,
			accent: 'var(--gradient-orange)',
			kind: 'case-study' as const
		},
		...secondaryProjects.map((project) => ({ ...project, kind: 'secondary' as const })),
		...archiveProjects.map((project) => ({ ...project, kind: 'archive' as const }))
	];
</script>

<section
	class="px-6 pt-16 md:pt-24"
	use:animateOnView={{
		selector: '[data-projects-reveal]',
		y: 24,
		delay: 90,
		duration: 850,
		threshold: 0.14
	}}
>
	<div id="projects" class="mx-auto max-w-6xl scroll-mt-4 space-y-20">
		<div class="grid items-start gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-12">
			<div class="space-y-6 lg:sticky lg:top-32">
				<p data-projects-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
					Featured case studies
				</p>
				<h2 data-projects-reveal class="font-display max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl">
					Complex products, clearer experiences.
				</h2>
				<p data-projects-reveal class="max-w-md text-lg leading-relaxed text-[var(--color-text-secondary)]">
					A selection of product design and UX engineering work across enterprise platforms, accessible telecom experiences and content-driven websites. Explore the projects to see the decisions, constraints and solutions behind each one.
				</p>
				<div class="flex flex-wrap gap-2" aria-label="Selected areas of expertise">
					{#each ['Product Design', 'Accessible UX', 'UX Engineering'] as tag}
						<span class="rounded-full border border-soft bg-surface px-3 py-2 text-xs font-semibold text-secondary">{tag}</span>
					{/each}
				</div>
			</div>

			<div class="min-w-0" data-projects-reveal>
				<EmblaCarousel
					className="-mx-6 px-6 pb-3 lg:mx-0 lg:px-0"
					containerClassName="gap-5"
					options={{ align: 'start', containScroll: 'trimSnaps', dragFree: false }}
				>
					{#each featuredProjects as project, index}
						<div class="min-w-0 flex-[0_0_84%] sm:flex-[0_0_62%] lg:flex-[0_0_72%]">
							<FeaturedProjectSlide {project} {index} />
						</div>
					{/each}
				</EmblaCarousel>
				<p class="mt-2 text-xs text-muted-custom">Explore projects with the arrows or swipe. Select a card to read the full case study.</p>
			</div>
		</div>

		<div class="space-y-10">
			<div class="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
				<div class="space-y-4">
					<p data-projects-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">More product work</p>
					<h2 data-projects-reveal class="font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-text-primary)] md:text-5xl">Other selected work</h2>
				</div>
				<p data-projects-reveal class="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
					Additional product work that reinforces the same strengths shown in the featured case studies.
				</p>
			</div>

			<div class="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
				{#each selectedWork as project (project.slug)}
					<article
						data-projects-reveal
						class="flex min-w-0 flex-col rounded-[var(--radius-card)] border border-white/80 bg-white/75 p-1.5 shadow-[0_18px_60px_rgba(17,17,17,0.05)]"
					>
						<div
							style:--card-accent={project.accent ?? 'var(--gradient-purple)'}
							class="flex min-h-[300px] flex-1 flex-col rounded-[calc(var(--radius-card)-0.375rem)] bg-[color-mix(in_srgb,var(--card-accent)_28%,white)] p-6"
						>
							<p class="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
								{project.period} · {project.role}
							</p>
							<h3 class="font-display mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary">
								{project.title}
							</h3>
							<p class="mt-4 text-sm leading-relaxed text-secondary">{project.description}</p>
							<div class="mt-auto flex flex-wrap gap-2 pt-6">
								{#each project.tags as tag}
									<span class="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-primary">{tag}</span>
								{/each}
							</div>
						</div>

						{#if project.kind === 'case-study'}
							<a
								href={`/projects/${project.slug}`}
								class="group flex min-h-14 items-center justify-between rounded-b-[var(--radius-card)] px-5 py-3"
							>
								<span class="text-sm font-semibold text-primary">View case study</span>
								<span aria-hidden="true" class="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-bg)] text-primary transition-transform duration-300 group-hover:translate-x-1">
									<span class="material-symbols-rounded">arrow_outward</span>
								</span>
							</a>
						{:else}
							<button
								type="button"
								aria-expanded={openSecondaryProject === project.slug}
								aria-controls={`selected-work-${project.slug}`}
								onclick={() => {
									openSecondaryProject = openSecondaryProject === project.slug ? null : project.slug;
								}}
								class="group flex min-h-14 w-full items-center justify-between rounded-b-[var(--radius-card)] px-5 py-3 text-left"
							>
								<span class="text-sm font-semibold text-primary">
									{openSecondaryProject === project.slug ? 'Show less' : 'Explore project'}
								</span>
								<span aria-hidden="true" class="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-bg)] text-primary transition-transform duration-300 group-hover:translate-x-1">
									<span class="material-symbols-rounded">{openSecondaryProject === project.slug ? 'remove' : 'arrow_forward'}</span>
								</span>
							</button>
							<div
								id={`selected-work-${project.slug}`}
								hidden={openSecondaryProject !== project.slug}
								class="px-5 pb-5"
							>
								<p class="rounded-2xl bg-[var(--color-bg)] p-4 text-sm leading-relaxed text-secondary">
									{project.highlight}
								</p>
							</div>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
