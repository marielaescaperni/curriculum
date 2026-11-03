<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project, index }: { project: Project; index: number } = $props();
</script>

<a
	href={`/projects/${project.slug}`}
	class="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[var(--radius-panel)] border border-white/70 bg-white/55 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.1)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4"
	aria-label={`Go to ${project.title} case study`}
>
	<div class="relative h-[210px] overflow-hidden bg-[linear-gradient(135deg,var(--gradient-purple),var(--gradient-blue),var(--gradient-pink))] sm:h-[260px]">
		{#if project.thumbnail}
			<img
				src={project.thumbnail}
				alt=""
				loading="lazy"
				decoding="async"
				class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
			/>
		{:else}
			<div class="flex h-full items-center justify-center p-6">
				<span class="font-display text-center text-4xl font-semibold leading-none text-[#111111] sm:text-5xl">{project.title}</span>
			</div>
		{/if}
		<span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#111111]">0{index + 1}</span>
	</div>

	<div class="flex flex-1 flex-col gap-4 p-6">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-text-muted)]">{project.subtitle}</p>
			<h3 class="font-display mt-3 text-3xl font-semibold leading-none tracking-tight text-[var(--color-text-primary)]">{project.title}</h3>
		</div>
		<p class="line-clamp-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{project.description}</p>
		<span class="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-[var(--color-text-primary)]">
			Go to case study <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">↗</span>
		</span>
	</div>
</a>
