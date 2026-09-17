<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import { featuredProjects, secondaryProjects } from '$lib/data/projects';
	import EmblaCarousel from '$lib/components/carousel/EmblaCarousel.svelte';

	let openSecondaryProject = $state<string | null>(null);

	const projectAccents = [
		'var(--gradient-pink)',
		'var(--gradient-blue)',
		'var(--gradient-green)',
		'var(--gradient-purple)',
		'var(--gradient-orange)'
	];
</script>

<section
	id="projects"
	class="px-6 pt-16 md:pt-24 scroll-mt-[90px]"
	use:animateOnView={{
		selector: '[data-projects-reveal]',
		y: 24,
		delay: 90,
		duration: 850,
		threshold: 0.14
	}}
>
	<div class="mx-auto max-w-6xl space-y-20">
		<div class="space-y-10">
			<div class="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
				<div class="space-y-4">
					<p data-projects-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">Featured case studies</p>
					<h2 data-projects-reveal class="max-w-xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl">
						Complex products, clearer experiences.
					</h2>
				</div>

				<p data-projects-reveal class="max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
					A selection of product-design work across accessibility, enterprise telecom, native mobile and UX engineering — with the decisions, constraints and outcomes behind each project.
				</p>
			</div>

			<div class="md:hidden">
				<EmblaCarousel
					className="-mx-6 px-6 pb-4"
					containerClassName="gap-5"
					options={{ align: 'start', containScroll: 'trimSnaps', dragFree: false }}
				>
					{#each featuredProjects as project, index}
						<ProjectCard
							className="min-w-0 flex-[0_0_84%]"
							{project}
							index={index + 1}
							accent={projectAccents[index % projectAccents.length]}
						/>
					{/each}
				</EmblaCarousel>
			</div>

			<div class="hidden gap-6 md:grid md:grid-cols-2">
				{#each featuredProjects as project, index}
					<ProjectCard
						className="w-full min-w-0"
						{project}
						index={index + 1}
						accent={projectAccents[index % projectAccents.length]}
					/>
				{/each}
			</div>
		</div>

		<div class="space-y-10">
			<div class="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
				<div class="space-y-4">
					<p data-projects-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">More product work</p>
					<h2 data-projects-reveal class="font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-text-primary)] md:text-5xl">Other selected work</h2>
				</div>
				<p data-projects-reveal class="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
					Additional product, website and visual-design work that adds context to the broader path behind the case studies above.
				</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				<a
					href="/projects/mapper-bpm-rework"
					data-projects-reveal
					style:--project-accent={'var(--gradient-orange)'}
					class="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/70 bg-white/45 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[var(--project-accent)]"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition group-hover:text-white/70">2023 · UX/UI Designer · Full case study</p>
					<div class="mt-4 flex items-start justify-between gap-4">
						<h3 class="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] transition group-hover:text-white">Mapper BPM Rework</h3>
						<span class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-2 transition group-hover:bg-white/20 group-hover:text-white">arrow_outward</span>
					</div>
					<p class="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] transition group-hover:text-white/85">Reworked a JSON-heavy BPM mapper into a clearer visual workflow for users with limited programming experience.</p>
				</a>

				{#each secondaryProjects as project, index}
					<button
						type="button"
						data-projects-reveal
						style:--project-accent={project.accent ?? projectAccents[index % projectAccents.length]}
						onclick={() => {
							openSecondaryProject = openSecondaryProject === project.slug ? null : project.slug;
						}}
						class="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/70 bg-white/45 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[var(--project-accent)]"
					>
						<div class="relative z-10">
							<div class="flex items-start justify-between gap-4">
								<div>
									<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition duration-300 group-hover:text-white/70">{project.period} · {project.role}</p>
									<h3 class="mt-4 font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] transition duration-300 group-hover:text-white">{project.title}</h3>
								</div>
								<span class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-2 text-[var(--color-text-primary)] transition duration-300 group-hover:bg-white/20 group-hover:text-white">{openSecondaryProject === project.slug ? 'remove' : 'add'}</span>
							</div>

							<p class="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] transition duration-300 group-hover:text-white/85">{project.description}</p>

							{#if openSecondaryProject === project.slug}
								<div class="mt-6 space-y-5">
									<p class="rounded-2xl border border-white/60 bg-white/45 p-4 text-sm leading-relaxed text-[var(--color-text-secondary)] backdrop-blur-md transition duration-300 group-hover:border-white/20 group-hover:bg-white/15 group-hover:text-white">{project.highlight}</p>
									<div class="flex flex-wrap gap-2">
										{#each project.tags as tag}
											<span class="rounded-full border border-white/70 bg-white/55 px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:border-white/25 group-hover:bg-white/20 group-hover:text-white">{tag}</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
