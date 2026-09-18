<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { experience } from '$lib/data/experience';

	const primaryExperience = experience.slice(0, 4);
	const publicisExperience = experience[4];
	const earlierExperience = experience.slice(5);
</script>

{#snippet experienceCard(item)}
	<article
		data-experience-reveal
		class="group h-full rounded-[var(--radius-panel)] border border-white/70 bg-white/40 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/60 md:p-8"
	>
		<div class="flex items-start justify-between gap-4">
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">{item.period}</p>
				<h3 class="mt-4 font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] md:text-4xl">{item.role}</h3>
				<p class="mt-3 text-base font-medium text-[var(--color-text-secondary)]">{item.company}</p>
			</div>

			<span aria-hidden="true" class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-3 text-[var(--color-text-primary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white/70">work</span>
		</div>

		<p class="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>

		{#if item.projects}
			<div class="mt-7 space-y-3">
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">Selected projects</p>
				<div class="flex flex-wrap gap-2">
					{#each item.projects as project}
						{#if project.name === 'Phreeli'}
							<a href="/projects/phreeli" class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-sm text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/70">
								<span class="font-medium text-[var(--color-text-primary)]">{project.name}</span>
								<span aria-hidden="true" class="material-symbols-rounded text-base">arrow_outward</span>
							</a>
						{:else if project.url}
							<a href={project.url} target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-sm text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/70">
								<span class="font-medium text-[var(--color-text-primary)]">{project.name}</span>
								<span aria-hidden="true" class="material-symbols-rounded text-base">arrow_outward</span>
							</a>
						{:else}
							<div class="rounded-full border border-white/70 bg-white/45 px-4 py-2 text-sm text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md">
								<span class="font-medium text-[var(--color-text-primary)]">{project.name}</span>
							</div>
						{/if}
					{/each}
				</div>
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
>
	<div id="experience" class="mx-auto max-w-6xl scroll-mt-4 space-y-10">
		<div class="mx-auto max-w-3xl space-y-4 text-center">
			<p data-experience-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">Experience</p>
			<h2 data-experience-reveal class="font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl">Where I’ve designed, built and shipped products.</h2>
			<p data-experience-reveal class="text-lg leading-relaxed text-[var(--color-text-secondary)]">Recent roles where product design, research, accessibility and implementation increasingly came together.</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each primaryExperience as item}
				{@render experienceCard(item)}
			{/each}
		</div>

		{#if publicisExperience}
			<div class="grid">
				{@render experienceCard(publicisExperience)}
			</div>
		{/if}

		<div
			data-experience-reveal
			class="group rounded-[var(--radius-panel)] border border-white/70 bg-white/40 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/60 md:p-8"
		>
			<div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">Earlier experience</p>
					<p class="mt-3 text-lg font-semibold text-[var(--color-text-primary)]">
						{earlierExperience.map((item) => item.company).join(' · ')}
					</p>
					<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
						Earlier work across digital products, campaigns and front-end development. Full chronology and details are available in my CV.
					</p>
				</div>
				<a
					href="/cv"
					class="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/45 px-4 py-2 font-semibold text-[var(--color-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:bg-white/70 group-hover:translate-x-1"
				>
					Check my CV
					<span aria-hidden="true" class="material-symbols-rounded text-lg transition duration-300 group-hover:translate-x-1">arrow_forward</span>
				</a>
			</div>
		</div>
	</div>
</section>
