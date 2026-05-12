<script lang="ts">
	import { languages } from '$lib/data/languages';
</script>

<section id="languages" class="px-6 py-24">
	<div class="mx-auto max-w-6xl rounded-3xl border border-neutral-200 p-8">
		<div>
			<p class="text-sm uppercase tracking-[0.3em] text-neutral-500">Communication</p>
			<h2 class="mt-3 text-3xl font-semibold">Languages</h2>
		</div>

		<div class="mt-8 grid gap-4 md:grid-cols-2">
			{#each languages as language}
				<article class="rounded-2xl bg-neutral-50 p-6">
					<h3 class="text-xl font-semibold">{language.name}</h3>
					<p class="mt-2 text-neutral-600">{language.level}</p>
				</article>
			{/each}
		</div>
	</div>
</section>