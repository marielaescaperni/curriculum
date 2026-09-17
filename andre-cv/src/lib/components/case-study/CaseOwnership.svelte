<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

<section class="case-shell case-section-space pt-0">
	<div class="grid gap-12 lg:grid-cols-2">
		<div>
			<h2 class="case-heading">What I Owned</h2>
			<div class="mt-6 divide-y divide-black/10 border-y border-black/10">
				{#each project.ownership as item, index}
					<div class="flex gap-4 py-4">
						<span class="text-pink-500 font-mono text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
						<p class="font-medium">{item}</p>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<h2 class="case-heading">Constraints</h2>
			<div class="mt-6 grid gap-4">
				{#each project.constraints as item}
					<div class="surface-card p-5 sm:p-6">
						<p class="text-secondary leading-7">{item}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
