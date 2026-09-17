<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

<section class="case-shell case-section-space pt-0">
	<div class="case-editorial-grid">
		<div>
			<h2 class="case-heading">Evidence & Artifacts</h2>
			<p class="text-secondary mt-4 max-w-sm leading-7">
				The design direction was informed by documented research, workflow analysis, collaboration with engineering and validation.
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

	{#if project.evidenceMedia?.length}
		<div class="mt-10 grid gap-5 md:grid-cols-2">
			{#each project.evidenceMedia as image, index}
				<figure class={index === 0 && project.evidenceMedia.length % 2 === 1 ? 'md:col-span-2' : ''}>
					<div class="surface-panel overflow-hidden p-3 sm:p-4">
						<img
							src={image}
							alt={`${project.title} research or workflow artifact ${index + 1}`}
							loading="lazy"
							decoding="async"
							class="w-full rounded-[1.35rem] object-cover"
						/>
					</div>
				</figure>
			{/each}
		</div>
	{/if}
</section>
