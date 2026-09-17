<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { project } = $props<{ project: Project }>();
</script>

<section class="case-shell case-section-space">
	<div class="surface-card p-6 sm:p-8 lg:p-10">
		<div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
			<div>
				<p class="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">At a Glance :)</p>
				<p class="text-secondary mt-4 max-w-lg text-base leading-7 sm:text-lg">
					{project.description}
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2">
				<div>
					<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.12em]">Core challenge</p>
					<p class="mt-3 leading-7">{project.details.challenge}</p>
				</div>
				<div>
					<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.12em]">My role</p>
					<p class="text-secondary mt-3 leading-7">{project.ownership.join(' · ')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="case-shell case-section-space pt-0">
	<div class="case-editorial-grid">
		<h2 class="case-heading">Context</h2>
		<p class="case-copy">{project.context}</p>
	</div>

	<div class="case-editorial-grid mt-12">
		<h2 class="case-heading">The Challenge</h2>
		<div>
			<p class="case-copy">{project.challenge}</p>
			{#if project.designGoal}
				<div class="brand-gradient-soft mt-7 rounded-[1.75rem] border border-black/8 p-6 sm:p-8">
					<p class="text-sm font-bold uppercase tracking-[0.12em] text-pink-600">Design goal</p>
					<p class="mt-3 font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
						{project.designGoal}
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
