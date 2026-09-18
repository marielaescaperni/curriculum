<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
	let fallbackScreens = $derived(project.details.gallery.filter((image: string) => image !== project.heroMedia));
	let productScreens = $derived(project.solution?.media ?? fallbackScreens);
</script>

{#if project.solution || productScreens.length > 0}
	<section id="solution" class="case-shell case-section-space scroll-mt-4 pt-0">
		<div class="max-w-3xl">
			<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.14em]">The solution</p>
			<h2 class="case-heading mt-3">{project.solution?.title ?? 'The Final Product'}</h2>
			{#if project.solution?.description}
				<p class="text-secondary mt-4 max-w-2xl text-base leading-7 sm:text-lg">
					{project.solution.description}
				</p>
			{/if}
		</div>

		{#if project.solution?.highlights?.length}
			<div class="mt-8 grid gap-4 md:grid-cols-3">
				{#each project.solution.highlights as item, index}
					<div class="surface-card p-5 sm:p-6">
						<p class="text-pink-500 font-mono text-xs font-bold uppercase tracking-[0.12em]">
							0{index + 1}
						</p>
						<p class="text-secondary mt-3 leading-7">{item}</p>
					</div>
				{/each}
			</div>
		{/if}

		{#if productScreens.length > 0}
			<div class="mt-10 grid gap-5 md:grid-cols-2">
				{#each productScreens as image, index}
					<figure class={index === 0 ? 'md:col-span-2' : ''}>
						<div class="surface-panel overflow-hidden p-3 sm:p-4">
							<img
								src={image}
								alt={`${project.title} final product screen ${index + 1}`}
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
{/if}
