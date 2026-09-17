<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
	let heroImage = $derived(project.heroMedia ?? project.thumbnail);
</script>

<section class="case-shell pt-12 md:pt-16">
	<div class="max-w-5xl">
		<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.16em] md:text-sm">
			Project · {project.title}
		</p>
		<h1 class="font-display mt-4 text-5xl font-bold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
			{project.headline}
		</h1>
	</div>

	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">
		<div>
			<p class="text-muted-custom text-xs font-bold uppercase tracking-[0.12em]">Role</p>
			<p class="mt-2 font-semibold">{project.meta.role}</p>
		</div>
		<div>
			<p class="text-muted-custom text-xs font-bold uppercase tracking-[0.12em]">Company & period</p>
			<p class="mt-2 font-semibold">
				{project.meta.company}{project.meta.product ? ` · ${project.meta.product}` : ''} · {project.meta.period}
			</p>
		</div>
		<div>
			<p class="text-muted-custom text-xs font-bold uppercase tracking-[0.12em]">Capabilities</p>
			<p class="text-secondary mt-2 leading-relaxed">{project.meta.capabilities.join(' · ')}</p>
		</div>
	</div>

	{#if heroImage}
		<div class="surface-panel mt-10 overflow-hidden p-3 sm:p-4">
			<img
				src={heroImage}
				alt={`${project.title} product interface`}
				class="w-full rounded-[1.5rem] object-cover"
			/>
		</div>
	{/if}
</section>
