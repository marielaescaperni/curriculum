<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
	let productScreens = $derived(project.details.gallery.filter((image) => image !== project.heroMedia));
</script>

{#if productScreens.length > 0}
	<section class="case-shell case-section-space pt-0">
		<div class="max-w-3xl">
			<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.14em]">The solution</p>
			<h2 class="case-heading mt-3">The Final Product</h2>
			<p class="text-secondary mt-4 max-w-2xl text-base leading-7 sm:text-lg">
				The final experience turns connector testing into a guided sequence while keeping the technical information users need visible and understandable.
			</p>
		</div>

		<div class="mt-10 grid gap-5 md:grid-cols-2">
			{#each productScreens as image, index}
				<figure class={index === 0 ? 'md:col-span-2' : ''}>
					<div class="surface-panel overflow-hidden p-3 sm:p-4">
						<img
							src={image}
							alt={`${project.title} final product screen ${index + 1}`}
							class="w-full rounded-[1.35rem] object-cover"
						/>
					</div>
				</figure>
			{/each}
		</div>
	</section>
{/if}
