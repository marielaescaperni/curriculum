<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

<section class="case-shell case-section-space pt-0">
	<div class="case-editorial-grid">
		<div>
			<h2 class="case-heading">Evidence & Artifacts</h2>
			<p class="text-secondary mt-4 max-w-sm leading-7">
				The design direction was informed by the documented workflow, collaboration with engineering and final validation.
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each project.evidence as item}
				<div class="surface-card p-5 sm:p-6">
					<p class="leading-7">{item}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
