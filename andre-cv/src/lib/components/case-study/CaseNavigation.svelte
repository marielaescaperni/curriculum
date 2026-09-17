<script lang="ts">
	let {
		nextSlug,
		nextTitle
	} = $props<{
		nextSlug: string;
		nextTitle: string;
	}>();
</script>

<nav class="case-shell pb-16 pt-2 md:pb-24" aria-label="Case study navigation">
	<div class="flex flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
		<div>
			<p class="text-pink-500 text-xs font-bold uppercase tracking-[0.14em]">Up next</p>
			<p class="font-display mt-2 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{nextTitle}</p>
		</div>
		<a
			href={`/projects/${nextSlug}`}
			class="motion-base inline-flex items-center gap-2 font-semibold hover:translate-x-1"
		>
			View next case study
			<span class="material-symbols-rounded text-[20px]" aria-hidden="true">arrow_forward</span>
		</a>
	</div>
</nav>
