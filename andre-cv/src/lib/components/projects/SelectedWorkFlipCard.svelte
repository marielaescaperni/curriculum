<script lang="ts">
	type SelectedWorkCard = {
		slug: string;
		title: string;
		role: string;
		period: string;
		description: string;
		highlight: string;
		tags: string[];
		accent?: string;
		kind: 'case-study' | 'secondary' | 'archive';
	};

	let { project }: { project: SelectedWorkCard } = $props();

	let hovered = $state(false);
	let manualFlip = $state(false);
	let suppressHover = $state(false);
	let flipped = $derived(manualFlip || (hovered && !suppressHover));
	let touchStart: { x: number; y: number } | null = null;

	function handlePointerEnter(event: PointerEvent) {
		if (event.pointerType === 'mouse') hovered = true;
	}

	function handlePointerLeave() {
		hovered = false;
		suppressHover = false;
	}

	function handlePointerDown(event: PointerEvent) {
		if (event.pointerType === 'touch') {
			touchStart = { x: event.clientX, y: event.clientY };
		}
	}

	function handlePointerUp(event: PointerEvent) {
		if (event.pointerType !== 'touch' || !touchStart) return;
		const moved = Math.hypot(event.clientX - touchStart.x, event.clientY - touchStart.y);
		touchStart = null;
		if (moved > 12 || (event.target as HTMLElement).closest('button, a')) return;
		manualFlip = !manualFlip;
	}

	function showDetails() {
		manualFlip = true;
	}

	function showOverview() {
		manualFlip = false;
		suppressHover = true;
	}
</script>

<article
	class="selected-work-card min-w-0"
	class:flipped
	style:--card-accent={project.accent ?? 'var(--gradient-purple)'}
	onpointerenter={handlePointerEnter}
	onpointerleave={handlePointerLeave}
	onpointerdown={handlePointerDown}
	onpointerup={handlePointerUp}
	onpointercancel={() => touchStart = null}
	aria-label={project.title}
>
	<div class="flip-stage">
		<div class="flip-face flip-front" aria-hidden={flipped} inert={flipped}>
			<div class="card-panel">
				<p class="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
					{project.period} · {project.role}
				</p>
				<h3 class="font-display mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary">
					{project.title}
				</h3>
				<p class="mt-4 text-sm leading-relaxed text-secondary">{project.description}</p>
				<div class="mt-auto flex flex-wrap gap-2 pt-6">
					{#each project.tags as tag}
						<span class="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-primary">{tag}</span>
					{/each}
				</div>
			</div>
			<button
				type="button"
				class="card-action group"
				aria-label={`Check more details about ${project.title}`}
				onclick={showDetails}
			>
				<span>Check more details</span>
				<span class="action-icon" aria-hidden="true"><span class="material-symbols-rounded">autorenew</span></span>
			</button>
		</div>

		<div class="flip-face flip-back" aria-hidden={!flipped} inert={!flipped}>
			<div class="card-panel">
				<p class="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">Project highlights</p>
				<h3 class="font-display mt-4 text-2xl font-semibold leading-tight text-primary">{project.title}</h3>
				<p class="mt-5 text-base leading-relaxed text-secondary">{project.highlight}</p>
			</div>
			<div class="card-action gap-3">
				<button type="button" class="min-h-11 rounded-full px-2 text-left text-sm font-semibold text-primary underline-offset-4 hover:underline" onclick={showOverview}>
					<span aria-hidden="true">←</span> Back to overview
				</button>
				{#if project.kind === 'case-study'}
					<a href={`/projects/${project.slug}`} class="inline-flex min-h-11 items-center text-right text-sm font-semibold text-primary underline underline-offset-4">
						View case study <span class="ml-1" aria-hidden="true">↗</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</article>

<style>
	.selected-work-card {
		perspective: 1200px;
	}

	.flip-stage {
		position: relative;
		display: grid;
		min-height: 410px;
		transform-style: preserve-3d;
		transition: transform 520ms cubic-bezier(0.2, 0.75, 0.25, 1);
	}

	.selected-work-card.flipped .flip-stage {
		transform: rotateY(180deg);
	}

	.flip-face {
		grid-area: 1 / 1;
		display: flex;
		min-width: 0;
		flex-direction: column;
		padding: 0.375rem;
		border: 1px solid rgba(255, 255, 255, 0.8);
		border-radius: var(--radius-card);
		background: rgba(255, 255, 255, 0.75);
		box-shadow: 0 18px 60px rgba(17, 17, 17, 0.05);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.flip-back {
		transform: rotateY(180deg);
	}

	.card-panel {
		display: flex;
		min-height: 0;
		flex: 1;
		flex-direction: column;
		overflow-y: auto;
		border-radius: calc(var(--radius-card) - 0.375rem);
		background: color-mix(in srgb, var(--card-accent) 28%, white);
		padding: 1.5rem;
	}

	.card-action {
		display: flex;
		min-height: 64px;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		border-radius: 0 0 var(--radius-card) var(--radius-card);
		padding: 0.75rem 1.25rem;
		text-align: left;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.action-icon {
		display: flex;
		height: 36px;
		width: 36px;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		border-radius: 0.75rem;
		background: var(--color-bg);
	}

	@media (prefers-reduced-motion: reduce) {
		.flip-stage {
			transition: none;
		}
	}
</style>
