<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import EmblaCarousel from '$lib/components/carousel/EmblaCarousel.svelte';
	import Button from '$lib/components/Button.svelte';
	import { experience } from '$lib/data/experience';

	type ExperienceItem = (typeof experience)[number];

	// Present the existing employment history from oldest to newest; Sitven is omitted only from this section.
	const timelineExperience = experience.filter((item) => item.company !== 'Sitven').slice().reverse();
	const timelineAccents = [
		'var(--gradient-purple)',
		'var(--gradient-blue)',
		'var(--gradient-green)',
		'var(--gradient-pink)',
		'var(--gradient-orange)',
		'var(--gradient-blue)'
	];
</script>

{#snippet experienceCard(item: ExperienceItem, compact = false)}
	<article
		class={`flex min-w-0 flex-col overflow-hidden rounded-[var(--radius-card)] border border-white/80 bg-white/70 text-left shadow-[0_14px_40px_rgba(17,17,17,0.05)] ${compact ? 'h-[332px] gap-2 p-4' : 'h-full min-h-[380px] gap-3 p-6'}`}
	>
		<p class="text-xs font-semibold uppercase tracking-[0.12em] text-muted-custom">{item.period}</p>
		<h3 class={`font-display font-semibold leading-[1.04] tracking-[-0.035em] text-primary ${compact ? 'text-[1.35rem]' : 'text-3xl'}`}>{item.role}</h3>
		<p class="text-sm font-semibold text-primary">{item.company}</p>
		<p class={`min-h-0 overflow-y-auto leading-relaxed text-secondary ${compact ? 'text-xs' : 'text-sm'}`}>{item.description}</p>
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

		<!-- Six employment stops in chronological order, oldest to newest. -->
		<div class="hidden lg:block" data-experience-reveal>
			<ol class="grid grid-cols-6 gap-3" aria-label="Career timeline, oldest to newest">
				{#each timelineExperience as item, index}
					<li class="grid min-w-0 grid-rows-[352px_54px_352px]">
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
		</div>

		<div class="lg:hidden" data-experience-reveal>
			<EmblaCarousel
				ariaLabel="Career experience"
				className="-mx-6 px-6 pb-3"
				containerClassName="gap-4"
				options={{ align: 'start', containScroll: 'trimSnaps', dragFree: false }}
			>
				{#each timelineExperience as item, index}
					<div class="flex min-w-0 flex-[0_0_100%] flex-col" style:--timeline-accent={timelineAccents[index % timelineAccents.length]}>
						<div class="mb-3 flex items-center gap-3">
							<span aria-hidden="true" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--timeline-accent)] text-xs font-bold text-[#111111]">{String(index + 1).padStart(2, '0')}</span>
							<span class="text-xs font-semibold uppercase tracking-[0.12em] text-muted-custom">{item.period}</span>
						</div>
						{@render experienceCard(item)}
					</div>
				{/each}
			</EmblaCarousel>
		</div>

		<div data-experience-reveal class="mx-auto flex max-w-xl flex-col items-center gap-5 pt-2 text-center">
			<p class="font-display text-xl font-semibold leading-snug text-primary sm:text-2xl">
				Interested in learning more about my experience?
			</p>
			<Button href="/cv" label="Check my CV" variant="primary" />
		</div>
	</div>
</section>
