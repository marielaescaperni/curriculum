<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { experience } from '$lib/data/experience';
</script>

<section
	id="experience"
	class="px-6 pt-16 md:pt-24"
	use:animateOnView={{
		selector: '[data-experience-reveal]',
		y: 20,
		delay: 90,
		duration: 850,
		threshold: 0.18
	}}
>
	<div class="mx-auto max-w-6xl space-y-10">
		<div class="mx-auto max-w-3xl space-y-4 text-center">
			<p
				data-experience-reveal
				class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]"
			>
				Experience
			</p>

			<h2
				data-experience-reveal
				class="font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-6xl"
			>
				Things I’ve worked on along the way.
			</h2>
		</div>

		<div
			class="-mx-6 no-scrollbar flex snap-x gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0"
		>
			{#each experience as item}
				<article
					data-experience-reveal
					class="group min-w-[88%] snap-start rounded-[var(--radius-panel)] border border-white/70 bg-white/40 p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/60 md:min-w-0 md:p-8"
				>
					<div class="flex items-start justify-between gap-4">
						<div>
							<p
								class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
							>
								{item.period}
							</p>

							<h3
								class="mt-4 font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] md:text-4xl"
							>
								{item.role}
							</h3>

							<p class="mt-3 text-base font-medium text-[var(--color-text-secondary)]">
								{item.company}
							</p>
						</div>

						<span
							class="material-symbols-rounded rounded-full border border-white/70 bg-white/45 p-3 text-[var(--color-text-primary)] shadow-sm backdrop-blur-md transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white/70"
						>
							work
						</span>
					</div>

					<p class="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
						{item.description}
					</p>

					{#if item.projects}
						<div class="mt-7 space-y-3">
							<p
								class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
							>
								Selected projects
							</p>

							<div class="flex flex-wrap gap-2">
								{#each item.projects as project}
									{#if project.url}
	<a
		href={project.url}
		target="_blank"
		rel="noreferrer"
		class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-sm text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/70"
	>
		<span class="font-medium text-[var(--color-text-primary)]">
			{project.name}
		</span>

		<span class="material-symbols-rounded text-base">arrow_outward</span>
	</a>
{:else}
	<div
		class="rounded-full border border-white/70 bg-white/45 px-4 py-2 text-sm text-[var(--color-text-secondary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/70"
	>
		<span class="font-medium text-[var(--color-text-primary)]">
			{project.name}
		</span>
	</div>
{/if}
								{/each}
							</div>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>