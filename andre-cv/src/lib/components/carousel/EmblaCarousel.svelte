<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { Snippet } from 'svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	type Props = {
		options?: EmblaOptionsType;
		className?: string;
		ariaLabel?: string;
		containerClassName?: string;
		children: Snippet;
	};

	let {
		options = {
			align: 'start',
			containScroll: 'trimSnaps',
			dragFree: false
		},
		className = '',
		ariaLabel = 'Featured project case studies',
		containerClassName = '',
		children
	}: Props = $props();

	let emblaApi = $state<EmblaCarouselType | null>(null);
	let canScrollPrev = $state(false);
	let canScrollNext = $state(false);

	function updateControls() {
		canScrollPrev = emblaApi?.canScrollPrev() ?? false;
		canScrollNext = emblaApi?.canScrollNext() ?? false;
	}

	function onEmblaInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		updateControls();
	}

	$effect(() => {
		const api = emblaApi;
		if (!api) return;
		api.on('select', updateControls);
		api.on('reInit', updateControls);
		return () => {
			api.off('select', updateControls);
			api.off('reInit', updateControls);
		};
	});
</script>

<div role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
	<div
		class={`overflow-hidden ${className}`}
		use:emblaCarouselSvelte={{ options, plugins: [] }}
		onemblaInit={onEmblaInit}
	>
		<div class={`flex ${containerClassName}`}>
			{@render children()}
		</div>
	</div>

	<div class="mt-4 flex justify-end gap-3">
		<button
			type="button"
			class="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white text-lg disabled:cursor-not-allowed disabled:opacity-40"
			aria-label="Previous project"
			disabled={!canScrollPrev}
			onclick={() => emblaApi?.scrollPrev()}
		>←</button>
		<button
			type="button"
			class="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white text-lg disabled:cursor-not-allowed disabled:opacity-40"
			aria-label="Next project"
			disabled={!canScrollNext}
			onclick={() => emblaApi?.scrollNext()}
		>→</button>
	</div>
</div>
