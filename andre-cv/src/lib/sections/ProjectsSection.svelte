<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import FeaturedProjectSlide from '$lib/components/projects/FeaturedProjectSlide.svelte';
	import SelectedWorkFlipCard from '$lib/components/projects/SelectedWorkFlipCard.svelte';
	import { featuredProjects, secondaryProjects, archiveProjects, mapperBpmRework } from '$lib/data/projects';
	import EmblaCarousel from '$lib/components/carousel/EmblaCarousel.svelte';


	const selectedWork = [
		{
			slug: mapperBpmRework.slug,
			title: mapperBpmRework.title,
			role: mapperBpmRework.meta.role,
			period: mapperBpmRework.period,
			description: mapperBpmRework.description,
			highlight: mapperBpmRework.details.overview,
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
				<h2 data-projects-reveal class="font-display max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-5xl">
					Complex products,<br> clear experiences.
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

			<div class="min-w-0 md:hidden" data-projects-reveal>
				<EmblaCarousel
					ariaLabel="Other selected work"
					className="-mx-6 px-6 pb-3"
					containerClassName="gap-4"
					options={{ align: 'start', containScroll: 'trimSnaps', dragFree: false }}
				>
					{#each selectedWork as project (project.slug)}
						<div class="min-w-0 flex-[0_0_100%]">
							<SelectedWorkFlipCard {project} />
						</div>
					{/each}
				</EmblaCarousel>
			</div>

			<div class="hidden items-stretch gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
				{#each selectedWork as project (project.slug)}
					<div data-projects-reveal class="min-w-0">
						<SelectedWorkFlipCard {project} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
