<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import ProjectModal from '$lib/components/projects/ProjectModal.svelte';
	import { featuredProjects, secondaryProjects } from '$lib/data/projects';
	import type { Project } from '$lib/types/project';

	let selectedProject = $state<Project | null>(null);
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
	class="px-6 pt-16 md:pt-24"
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
					<p
						data-projects-reveal
						class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]"
					>
						Selected work
					</p>

					<h2
						data-projects-reveal
						class="max-w-xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl"
					>
						A little gallery of things I helped shape.
					</h2>
				</div>

				<p
					data-projects-reveal
					class="max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
				>
					A curated mix of UX/UI, product thinking and front-end craft — from messy ideas to
					clear, usable and polished digital experiences.
				</p>
			</div>

			<div
				class="-mx-6 no-scrollbar flex snap-x gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
			>
				{#each featuredProjects as project, index}
					<ProjectCard
						className="w-[88%] shrink-0 snap-start md:w-full md:min-w-0"
						{project}
						index={index + 1}
						accent={projectAccents[index % projectAccents.length]}
						onclick={() => {
							selectedProject = project;
						}}
					/>
				{/each}
			</div>
		</div>

		<div class="space-y-10">
			<div class="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
				<div class="space-y-4">
					<p
						data-projects-reveal
						class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]"
					>
						Additional experience
					</p>

					<h2
						data-projects-reveal
						class="font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-text-primary)] md:text-5xl"
					>
						Other selected work
					</h2>
				</div>

				<p
					data-projects-reveal
					class="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]"
				>
					More collaborations and product moments that shaped the way I design and build.
				</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				{#each secondaryProjects as project, index}
					<button
						type="button"
						data-projects-reveal
						style:--project-accent={project.accent ?? projectAccents[index % projectAccents.length]}
						onclick={() => {
							openSecondaryProject =
								openSecondaryProject === project.slug ? null : project.slug;
						}}
						class="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/70 bg-white/45 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[var(--project-accent)]"
					>
						<div class="relative z-10">
							<div class="flex items-start justify-between gap-4">
								<div>
									<p
										class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition duration-300 group-hover:text-white/70"
									>
										{project.period} · {project.role}
									</p>

									<h3
										class="mt-4 font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] transition duration-300 group-hover:text-white"
									>
										{project.title}
									</h3>
								</div>

								<span
									class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-2 text-[var(--color-text-primary)] transition duration-300 group-hover:bg-white/20 group-hover:text-white"
								>
									{openSecondaryProject === project.slug ? 'remove' : 'add'}
								</span>
							</div>

							<p
								class="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] transition duration-300 group-hover:text-white/85"
							>
								{project.description}
							</p>

							{#if openSecondaryProject === project.slug}
								<div class="mt-6 space-y-5">
									<p
										class="rounded-2xl border border-white/60 bg-white/45 p-4 text-sm leading-relaxed text-[var(--color-text-secondary)] backdrop-blur-md transition duration-300 group-hover:border-white/20 group-hover:bg-white/15 group-hover:text-white"
									>
										{project.highlight}
									</p>

									<div class="flex flex-wrap gap-2">
										{#each project.tags as tag}
											<span
												class="rounded-full border border-white/70 bg-white/55 px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:border-white/25 group-hover:bg-white/20 group-hover:text-white"
											>
												{tag}
											</span>
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

{#if selectedProject}
	<ProjectModal
		project={selectedProject}
		onClose={() => {
			selectedProject = null;
		}}
	/>
{/if}