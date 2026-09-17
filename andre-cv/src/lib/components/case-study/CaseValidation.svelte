<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

{#if project.validation}
	<section class="case-shell case-section-space pt-0">
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
					<div class="grid min-w-[220px] gap-3">
						{#each project.validation.metrics as metric, index}
							<div class={index === 0 ? 'rounded-2xl bg-white/10 p-5 text-center' : 'rounded-2xl border border-white/10 p-4 text-center'}>
								<p class={index === 0 ? 'font-display text-4xl font-bold text-pink-300' : 'text-sm font-semibold text-white/80'}>
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

<section class="case-shell case-section-space pt-0">
	<div class="case-editorial-grid">
		<h2 class="case-heading">Impact</h2>
		<div class="grid gap-4">
			{#each project.impact as item}
				<div class="flex gap-4">
					<span class="text-pink-500 mt-0.5 font-bold" aria-hidden="true">✦</span>
					<p class="case-copy">{item}</p>
				</div>
			{/each}
		</div>
	</div>

	{#if project.reflection.length > 0}
		<div class="case-editorial-grid mt-16">
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
