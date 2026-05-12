<script lang="ts">
	import { awards } from '$lib/data/awards';
</script>

<section id="awards" class="px-6 py-24">
	<div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
		<div>
			<p class="text-sm uppercase tracking-[0.3em] text-neutral-500">Recognition</p>
			<h2 class="mt-3 text-3xl font-semibold">Awards</h2>
		</div>

		<div class="space-y-4">
			{#each awards as item}
				<article class="rounded-3xl border border-neutral-200 p-6">
					<h3 class="text-xl font-semibold">{item.title}</h3>
					<p class="mt-2 text-sm text-neutral-500">{item.location}</p>
					<p class="mt-4 text-neutral-600">{item.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>