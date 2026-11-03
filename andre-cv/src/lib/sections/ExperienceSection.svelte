<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import EmblaCarousel from '$lib/components/carousel/EmblaCarousel.svelte';
	import { experience } from '$lib/data/experience';

	type ExperienceItem = (typeof experience)[number];

	const timelineExperience = experience.slice(0, 5);
	const earlierExperience = experience.slice(5);
	const timelineAccents = [
		'var(--gradient-purple)',
		'var(--gradient-blue)',
		'var(--gradient-green)',
		'var(--gradient-pink)',
		'var(--gradient-orange)'
	];
</script>

{#snippet experienceCard(item: ExperienceItem, compact = false)}
	<article
		class={`flex h-full min-w-0 flex-col rounded-[var(--radius-card)] border border-white/80 bg-white/70 p-5 text-left shadow-[0_14px_40px_rgba(17,17,17,0.05)] ${compact ? 'gap-2' : 'gap-3 sm:p-6'}`}
	>
		<p class="text-xs font-semibold uppercase tracking-[0.12em] text-muted-custom">{item.period}</p>
		<h3 class={`font-display font-semibold leading-[1.04] tracking-[-0.035em] text-primary ${compact ? 'text-[1.35rem]' : 'text-3xl'}`}>{item.role}</h3>
		<p class="text-sm font-semibold text-primary">{item.company}</p>
		<p class={`leading-relaxed text-secondary ${compact ? 'text-xs' : 'text-sm'}`}>{item.description}</p>
		{#if !compact && item.projects?.length}
			<div class="mt-auto flex flex-wrap gap-2 pt-3">
				{#each item.projects as project}
					{#if project.name === 'Phreeli'}
						<a href="/projects/phreeli" class="inline-flex min-h-10 items-center rounded-full border border-soft bg-white/75 px-3 py-2 text-xs font-semibold text-primary hover:bg-white">
							{project.name} <span aria-hidden="true" class="ml-1">↗</span>
						</a>
					{:else}
						<span class="inline-flex items-center rounded-full border border-soft bg-white/65 px-3 py-2 text-xs font-medium text-secondary">{project.name}</span>
					{/if}
				{/each}
			</div>
		{/if}
	</article>
{/snippet}

<section
	class="px-6 pt-16 md:pt-24"
	use:animateOnView={{
		selector: '[data-experience-reveal]',
		y: 20,
		delay: 90,
		duration: 850,
		threshold: 0.18
	}}
	aria-labelledby="experience-heading"
>
	<div id="experience" class="mx-auto max-w-6xl scroll-mt-[100px] space-y-10">
		<div class="mx-auto max-w-3xl space-y-4 text-center" data-experience-reveal>
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-muted-custom">Experience</p>
			<h2 id="experience-heading" class="font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-primary md:text-6xl">
				Where I’ve designed, built and shipped products.
			</h2>
			<p class="text-lg leading-relaxed text-secondary">
				Recent roles where product design, research, accessibility and implementation increasingly came together.
			</p>
		</div>

		<!-- Each stop is part of the real employment history; chronology is newest to oldest. -->
		<div class="hidden lg:block" data-experience-reveal>
			<ol class="grid grid-cols-5 gap-3" aria-label="Career timeline, most recent first">
				{#each timelineExperience as item, index}
					<li class="grid min-w-0 grid-rows-[minmax(290px,auto)_54px_minmax(290px,auto)]">
						{#if index % 2 === 0}
							<div class="flex min-w-0 flex-col justify-end pb-4">
								{@render experienceCard(item, true)}
							</div>
						{:else}
							<div aria-hidden="true"></div>
						{/if}

						<div class="relative flex items-center justify-center" style:--timeline-accent={timelineAccents[index]}>
							<span aria-hidden="true" class="absolute inset-x-[-0.375rem] top-1/2 h-[2px] -translate-y-1/2 bg-[var(--color-border-medium)]"></span>
							<span aria-hidden="true" class="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-[5px] border-[var(--color-bg)] bg-[var(--timeline-accent)] text-sm font-bold text-[#111111] shadow-sm">
								{String(index + 1).padStart(2, '0')}
							</span>
						</div>

						{#if index % 2 === 1}
							<div class="flex min-w-0 flex-col justify-start pt-4">
								{@render experienceCard(item, true)}
							</div>
						{:else}
							<div aria-hidden="true"></div>
						{/if}
					</li>
				{/each}
			</ol>
			<div class="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-card)] border border-white/70 bg-white/45 px-6 py-5">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.15em] text-muted-custom">Earlier experience</p>
					<p class="mt-2 text-sm font-semibold text-primary">{earlierExperience.map((item) => item.company).join(' · ')}</p>
				</div>
				<a href="/cv" class="inline-flex min-h-11 items-center gap-2 rounded-full border border-soft bg-white/75 px-4 py-2 text-sm font-semibold text-primary hover:bg-white">
					Check my CV <span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>

		<div class="lg:hidden" data-experience-reveal>
			<EmblaCarousel
				ariaLabel="Career experience"
				className="-mx-6 px-6 pb-3"
				containerClassName="gap-4"
				options={{ align: 'start', containScroll: 'trimSnaps', dragFree: false }}
			>
				{#each experience as item, index}
					<div class="flex min-w-0 flex-[0_0_100%] flex-col" style:--timeline-accent={timelineAccents[index % timelineAccents.length]}>
						<div class="mb-3 flex items-center gap-3">
							<span aria-hidden="true" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--timeline-accent)] text-xs font-bold text-[#111111]">{String(index + 1).padStart(2, '0')}</span>
							<span class="text-xs font-semibold uppercase tracking-[0.12em] text-muted-custom">{item.period}</span>
						</div>
						{@render experienceCard(item)}
					</div>
				{/each}
			</EmblaCarousel>
			<a href="/cv" class="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-soft bg-white/75 px-4 py-2 text-sm font-semibold text-primary">
				See full experience in my CV <span aria-hidden="true">↗</span>
			</a>
		</div>
	</div>
</section>
