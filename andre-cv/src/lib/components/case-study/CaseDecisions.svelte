<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

<section id="decisions" class="case-shell case-section-space scroll-mt-4 pt-0">
	<div class="mb-8 max-w-4xl">
		<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.14em]">Product design decisions</p>
		<h2 class="font-display mt-3 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
			Designing with clear purpose
		</h2>
	</div>

	<div class="grid gap-5">
		{#each project.decisions as decision, index}
			<article class="surface-card p-6 sm:p-8">
				<p class="text-pink-500 font-mono text-xs font-bold uppercase tracking-[0.12em]">
					Decision {String(index + 1).padStart(2, '0')}
				</p>
				<h3 class="font-display mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
					{decision.title}
				</h3>
				<p class="text-secondary mt-3 leading-7">{decision.description}</p>
				<div class="mt-5 rounded-2xl border border-pink-300/60 bg-pink-50/70 p-4 sm:p-5">
					<p class="text-sm font-bold text-pink-700">Why this decision</p>
					<p class="mt-2 leading-6 text-pink-950/80">{decision.rationale}</p>
				</div>
			</article>
		{/each}
	</div>
</section>
