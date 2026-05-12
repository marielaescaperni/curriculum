<script lang="ts">
	import type { Project } from '$lib/types/project';

	type Props = {
		project: Project;
		onclick: () => void;
		accent?: string;
		index?: number;
		className?: string;
	};

	let {
		project,
		onclick,
		accent = 'var(--gradient-pink)',
		className = '',
		index = 1
	}: Props = $props();
</script>

<button
	type="button"
	{onclick}
	aria-label={`View ${project.title} case study`}
	style:--project-accent={accent}
	data-projects-reveal
	class={`group relative isolate w-full overflow-hidden rounded-[var(--radius-panel)] border border-white/70 bg-white/50 text-left shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:rotate-[-0.4deg] hover:border-transparent hover:bg-white/75 hover:shadow-[0_24px_80px_rgba(0,0,0,0.10)] ${className}`}
>
	<div
		class="pointer-events-none absolute -right-20 -top-20 z-0 h-56 w-56 rounded-full bg-[var(--project-accent)] opacity-0 blur-3xl transition duration-500 group-hover:opacity-35"
	></div>

	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-700 group-hover:opacity-100"
		style="background: radial-gradient(circle at top right, color-mix(in srgb, var(--project-accent) 22%, transparent), transparent 45%);"
	></div>

	<div class="relative z-[2] aspect-[16/10] overflow-hidden bg-neutral-100">
		{#if project.thumbnail}
			<img
				src={project.thumbnail}
				alt={`${project.title} preview`}
				class="h-full w-full object-cover object-top transition duration-1000 ease-out scale-[1.03]"
			/>
		{:else}
			<div
				class="flex h-full w-full items-end bg-[linear-gradient(135deg,var(--project-accent),var(--gradient-purple),var(--gradient-blue))] p-6"
			>
				<p class="max-w-sm font-display text-5xl font-semibold leading-none tracking-[-0.06em] text-white">
					{project.title}
				</p>
			</div>
		{/if}

		<div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-75"></div>

		<div class="absolute left-5 top-5 flex flex-wrap items-center gap-2">
			<span
				class="rounded-full border  px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-main-gradient"
			>
				0{index}
			</span>

			<span
				class="rounded-full border px-3 py-1 text-xs font-medium text-white bg-main-gradient"
			>
				{project.period}
			</span>
		</div>
	</div>

	<div class="relative z-[2] p-6 md:p-7">
		<p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
			{project.subtitle}
		</p>

		<div class="mt-4 flex items-start justify-between gap-6">
			<h3
				class="font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-text-primary)] md:text-5xl"
			>
				{project.title}
			</h3>

			<span
				class="material-symbols-rounded shrink-0 rounded-full bg-[var(--project-accent)] p-3 text-white transition duration-300 group-hover:rotate-[-12deg] group-hover:scale-110"
			>
				arrow_outward
			</span>
		</div>

		<p class="mt-5 line-clamp-3 text-base leading-relaxed text-[var(--color-text-secondary)]">
			{project.description}
		</p>

		<div class="mt-7 flex flex-wrap gap-2">
			{#each project.tags.slice(0, 4) as tag}
				<span
					class="rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:bg-white/80"
				>
					{tag}
				</span>
			{/each}
		</div>

		<p class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]">
			View case study
			<span class="transition duration-300 group-hover:translate-x-1">→</span>
		</p>
	</div>
</button>