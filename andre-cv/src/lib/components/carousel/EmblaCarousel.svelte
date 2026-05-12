<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { Snippet } from 'svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	type Props = {
		options?: EmblaOptionsType;
		className?: string;
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
		containerClassName = '',
		children
	}: Props = $props();

	let emblaApi = $state<EmblaCarouselType | null>(null);

	function onEmblaInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}
</script>

<div
	class={`overflow-hidden ${className}`}
	use:emblaCarouselSvelte={{ options, plugins: [] }}
	onemblaInit={onEmblaInit}
>
	<div class={`flex ${containerClassName}`}>
		{@render children()}
	</div>
</div>