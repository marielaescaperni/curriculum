<script lang="ts">
	import type { Project } from '$lib/types/project';

	type Props = {
		project: Project;
		onClose: () => void;
	};

	let { project, onClose }: Props = $props();

	const galleryImages = $derived(
		project.details.gallery.filter((image) => image !== project.thumbnail)
	);

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onClose();
		}
	};
</script>

<svelte:head>
	<style>
		body {
			overflow: hidden;
		}
	</style>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div
	class="fixed inset-0 z-[100] bg-neutral-950/70 p-4 backdrop-blur-sm md:p-8"
	role="dialog"
	aria-modal="true"
	aria-labelledby="project-modal-title"
	onclick={onClose}
>
	<div
		class="mx-auto flex max-h-full max-w-6xl flex-col overflow-hidden rounded-[var(--radius-panel)] border border-white/20 bg-[var(--color-bg)] shadow-[0_32px_120px_rgba(0,0,0,0.35)]"
		onclick={(event) => event.stopPropagation()}
	>
		<header
			class="flex items-center justify-between gap-6 border-b border-[var(--color-border-soft)] bg-white/70 px-6 py-4 backdrop-blur-md"
		>
			<div>
				<p
					class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
				>
					{project.period}
				</p>

				<h2
					id="project-modal-title"
					class="mt-1 font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)]"
				>
					{project.title}
				</h2>
			</div>

			<button
				type="button"
				onclick={onClose}
				class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white"
			>
				Close
				<span class="material-symbols-rounded text-base">close</span>
			</button>
		</header>

		<div class="overflow-y-auto p-6 md:p-10">
			{#if project.thumbnail}
				<div
					class="overflow-hidden rounded-[var(--radius-card)] border border-white/70 bg-white/45 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
				>
					<img
						src={project.thumbnail}
						alt={`${project.title} hero preview`}
						class="h-full w-full object-cover"
					/>
				</div>
			{/if}

			<div class="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
				<aside class="space-y-8">
					<div class="rounded-[var(--radius-card)] border border-white/70 bg-white/45 p-6 backdrop-blur-md">
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Role
						</p>

						<p class="mt-3 text-lg font-semibold text-[var(--color-text-primary)]">
							{project.subtitle}
						</p>
					</div>

					<div class="rounded-[var(--radius-card)] border border-white/70 bg-white/45 p-6 backdrop-blur-md">
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Tools
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.details.tools as tool}
								<span
									class="rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md"
								>
									{tool}
								</span>
							{/each}
						</div>
					</div>

					{#if project.details.metrics.length}
						<div class="rounded-[var(--radius-card)] bg-[var(--color-bg-deep)] p-6 text-white shadow-[var(--shadow-soft)]">
							<p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
								Impact
							</p>

							<div class="mt-4 space-y-3">
								{#each project.details.metrics as metric}
									<div class="rounded-2xl border border-white/10 bg-white/10 p-4">
										<p class="text-lg font-semibold leading-tight">{metric}</p>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</aside>

				<div class="space-y-10">
					<section>
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Overview
						</p>

						<p class="mt-3 text-lg leading-relaxed text-[var(--color-text-secondary)]">
							{project.details.overview}
						</p>
					</section>

					<section>
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Challenge
						</p>

						<p class="mt-3 text-lg leading-relaxed text-[var(--color-text-secondary)]">
							{project.details.challenge}
						</p>
					</section>

					<section>
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Process
						</p>

						<ul class="mt-4 space-y-3">
							{#each project.details.process as item}
								<li
									class="rounded-2xl border border-white/70 bg-white/45 p-4 text-[var(--color-text-secondary)] backdrop-blur-md"
								>
									{item}
								</li>
							{/each}
						</ul>
					</section>

					<section>
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Results
						</p>

						<ul class="mt-4 space-y-3">
							{#each project.details.results as item}
								<li
									class="rounded-2xl border border-white/70 bg-white/60 p-4 text-[var(--color-text-secondary)] backdrop-blur-md"
								>
									{item}
								</li>
							{/each}
						</ul>
					</section>
				</div>
			</div>

			{#if galleryImages.length}
				<section class="mt-16 space-y-6">
					<div>
						<p
							class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]"
						>
							Gallery
						</p>

						<h3
							class="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-text-primary)]"
						>
							Selected screens
						</h3>
					</div>

					<div class="grid gap-6">
						{#each galleryImages as image}
							<div
								class="overflow-hidden rounded-[var(--radius-card)] border border-white/70 bg-white/45 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
							>
								<img src={image} alt={`${project.title} project screen`} class="w-full" />
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>