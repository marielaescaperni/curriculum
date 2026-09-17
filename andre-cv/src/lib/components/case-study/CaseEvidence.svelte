<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

<section class="case-shell case-section-space pt-0">
	<div class="case-editorial-grid">
		<div>
			<h2 class="case-heading">Evidence & Artifacts</h2>
			<p class="text-secondary mt-4 max-w-sm leading-7">
				The project story is grounded in the product evidence and validation documented for this work.
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

	{#if project.details.gallery.length > 0}
		<div class="mt-12 grid gap-5 md:grid-cols-2">
			{#each project.details.gallery.slice(0, 4) as image, index}
				<figure class={index === 0 ? 'md:col-span-2' : ''}>
					<div class="surface-panel overflow-hidden p-3 sm:p-4">
						<img
							src={image}
							alt={`${project.title} product artifact ${index + 1}`}
							class="w-full rounded-[1.35rem] object-cover"
						/>
					</div>
				</figure>
			{/each}
		</div>
	{/if}
</section>
