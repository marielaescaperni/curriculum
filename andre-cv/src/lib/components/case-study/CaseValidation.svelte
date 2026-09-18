<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

{#if project.validation}
	<section id="validation" class="case-shell case-section-space scroll-mt-4 pt-0">
		<div class="surface-dark overflow-hidden p-6 sm:p-8 lg:p-10">
			<div class="grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
				<div>
					<p class="text-pink-300 text-xs font-bold uppercase tracking-[0.14em]">Validation & testing</p>
					<h2 class="font-display mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
						{project.validation.title}
					</h2>
					<p class="mt-4 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
						{project.validation.description}
					</p>
				</div>

				{#if project.validation.metrics.length > 0}
					<div class="grid w-full min-w-0 gap-3 lg:w-auto lg:min-w-[220px] lg:max-w-[340px]">
						{#each project.validation.metrics as metric, index}
							<div class={index === 0 ? 'min-w-0 rounded-2xl bg-white/10 p-5 text-center' : 'min-w-0 rounded-2xl border border-white/10 p-4 text-center'}>
								<p class={index === 0 ? 'font-display break-words text-3xl font-bold leading-[1.05] text-pink-300 sm:text-4xl' : 'break-words text-sm font-semibold text-white/80'}>
									{metric}
								</p>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</section>
{/if}

<section id="impact" class="case-shell case-section-space scroll-mt-4 pt-0">
	<div class="case-editorial-grid">
		<div>
			<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.14em]">Outcome</p>
			<h2 class="case-heading mt-3">Impact</h2>
		</div>

		<div class="grid gap-5">
			{#each project.impact as item, index}
				<div class="grid grid-cols-[auto_1fr] gap-5 border-b border-black/10 pb-5 last:border-b-0 last:pb-0">
					<span class="font-display text-3xl font-bold text-pink-500" aria-hidden="true">0{index + 1}</span>
					<p class="case-copy pt-1">{item}</p>
				</div>
			{/each}
		</div>
	</div>

	{#if project.reflection.length > 0}
		<div class="case-editorial-grid mt-12">
			<h2 class="case-heading">What I'd Improve Next</h2>
			<div class="surface-card p-6 sm:p-8">
				<ul class="space-y-4">
					{#each project.reflection as item}
						<li class="text-secondary leading-7">{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</section>
