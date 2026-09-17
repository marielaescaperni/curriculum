<script lang="ts">
	import { featuredProjects } from '$lib/data/projects';

	const proofProjects = featuredProjects.filter((project) => project.proof).slice(0, 3);
</script>

<section class="px-6 pb-4 md:pb-8">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-3 md:grid-cols-3">
			{#each proofProjects as project}
				<a
					href={`/projects/${project.slug}`}
					class="group rounded-[1.75rem] border border-white/70 bg-white/45 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/70"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{project.title}</p>
					<p class="mt-3 font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)]">
						{project.proof?.value}
					</p>
					<div class="mt-3 flex items-center justify-between gap-4">
						<p class="text-sm text-[var(--color-text-secondary)]">{project.proof?.label}</p>
						<span class="material-symbols-rounded text-lg transition group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
