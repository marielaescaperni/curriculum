<script lang="ts">
	import { education } from '$lib/data/education';
</script>

<section id="education" class="px-6 py-24">
	<div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
		<div>
			<p class="text-sm uppercase tracking-[0.3em] text-neutral-500">Background</p>
			<h2 class="mt-3 text-3xl font-semibold">Education</h2>
		</div>

		<div class="space-y-4">
			{#each education as item}
				<article class="rounded-3xl border border-neutral-200 p-6">
					<p class="text-sm text-neutral-500">{item.period}</p>
					<h3 class="mt-2 text-xl font-semibold">{item.title}</h3>
					<p class="mt-2 text-neutral-600">{item.institution}</p>

					{#if item.location}
						<p class="mt-1 text-sm text-neutral-500">{item.location}</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>