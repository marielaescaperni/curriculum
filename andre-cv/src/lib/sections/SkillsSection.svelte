<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { capabilities } from '$lib/data/capabilities';

	const skillGroups = [
		{
			title: 'Product & UX',
			kicker: 'From messy problems to clear product direction',
			items: capabilities.productUx.slice(0, 6),
			accent: 'var(--gradient-pink)',
			icon: 'strategy'
		},
		{
			title: 'Research & Validation',
			kicker: 'Grounding decisions in evidence',
			items: capabilities.researchValidation.slice(0, 6),
			accent: 'var(--gradient-purple)',
			icon: 'query_stats'
		},
		{
			title: 'Systems & Accessibility',
			kicker: 'Making experiences scalable and inclusive',
			items: capabilities.systemsAccessibility.slice(0, 6),
			accent: 'var(--gradient-green)',
			icon: 'accessibility_new'
		},
		{
			title: 'UX Engineering',
			kicker: 'Keeping design decisions connected to production',
			items: capabilities.uxEngineering.slice(0, 6),
			accent: 'var(--gradient-blue)',
			icon: 'code'
		},
		{
			title: 'AI-assisted workflow',
			kicker: 'Faster exploration, same design judgment',
			items: capabilities.aiWorkflow,
			accent: 'var(--gradient-peach)',
			icon: 'auto_awesome'
		}
	];

	let slider: HTMLDivElement | undefined = $state();
	let activeIndex = $state(0);
	let dragStartX = 0;
	let dragStartScroll = 0;
	let dragging = false;
	let previousSnapType = '';

	function startDrag(event: PointerEvent) {
		if (event.pointerType !== 'mouse' || event.button !== 0 || !slider) return;
		dragging = true;
		dragStartX = event.clientX;
		dragStartScroll = slider.scrollLeft;
		previousSnapType = slider.style.scrollSnapType;
		slider.style.scrollSnapType = 'none';
		slider.setPointerCapture(event.pointerId);
	}

	function moveDrag(event: PointerEvent) {
		if (!dragging || !slider) return;
		slider.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
	}

	function endDrag(event: PointerEvent) {
		if (!dragging || !slider) return;
		dragging = false;
		if (slider.hasPointerCapture(event.pointerId)) slider.releasePointerCapture(event.pointerId);
		slider.style.scrollSnapType = previousSnapType;
		const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-skill-slide]'));
		if (!slides.length) return;
		const start = slides[0].offsetLeft;
		const nearest = slides.reduce(
			(best, slide, index) =>
				Math.abs(slide.offsetLeft - start - slider!.scrollLeft) <
				Math.abs(slides[best].offsetLeft - start - slider!.scrollLeft) ? index : best,
			0
		);
		scrollToSlide(nearest);
	}

	function scrollToSlide(index: number) {
		const nextIndex = Math.max(0, Math.min(index, skillGroups.length - 1));
		const slides = slider?.querySelectorAll<HTMLElement>('[data-skill-slide]');
		const target = slides?.[nextIndex];
		if (!target || !slider) return;
		slider.scrollTo({
			left: target.offsetLeft - slides[0].offsetLeft,
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
		});
		activeIndex = nextIndex;
	}

	function updateActiveSlide() {
		if (!slider) return;
		const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-skill-slide]'));
		if (!slides.length) return;
		const start = slides[0].offsetLeft;
		const current = slider.scrollLeft;
		let closest = 0;
		let shortestDistance = Number.POSITIVE_INFINITY;
		slides.forEach((slide, index) => {
			const distance = Math.abs(slide.offsetLeft - start - current);
			if (distance < shortestDistance) {
				shortestDistance = distance;
				closest = index;
			}
		});
		activeIndex = closest;
	}
</script>

<section
	id="skills"
	class="scroll-mt-[90px] px-6 pt-20 lg:pt-30"
	use:animateOnView={{
		selector: '[data-skills-reveal]',
		y: 24,
		delay: 90,
		duration: 900,
		threshold: 0.18
	}}
	aria-labelledby="skills-heading"
>
	<div class="mx-auto max-w-6xl">
		<div class="grid min-w-0 items-stretch gap-6 rounded-[var(--radius-panel)] bg-[color-mix(in_srgb,var(--gradient-blue)_20%,white)] p-4 sm:p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:p-10">
			<div data-skills-reveal class="order-2 min-w-0 lg:order-1 lg:py-2">
				<div
					bind:this={slider}
					onscroll={updateActiveSlide}
					onpointerdown={startDrag}
					onpointermove={moveDrag}
					onpointerup={endDrag}
					onpointercancel={endDrag}
					role="region"
					aria-roledescription="carousel"
					aria-label="Skills and capabilities"
					tabindex="0"
					class="skill-slider flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-[var(--radius-card)] pb-3 active:cursor-grabbing"
				>
					{#each skillGroups as group, index}
						<article
							data-skill-slide
							aria-roledescription="slide"
							aria-label={`${index + 1} of ${skillGroups.length}: ${group.title}`}
							style:--skill-accent={group.accent}
							class="flex min-h-[360px] min-w-0 flex-[0_0_100%] select-none snap-start flex-col rounded-[var(--radius-card)] border border-white/80 bg-white/85 p-6 shadow-[0_14px_45px_rgba(17,17,17,0.06)] sm:p-8"
						>
							<div class="flex items-start justify-between gap-4">
								<p class="max-w-[75%] text-xs font-semibold uppercase tracking-[0.16em] text-muted-custom">{group.kicker}</p>
								<span aria-hidden="true" class="material-symbols-rounded flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--skill-accent)_35%,white)] text-primary">{group.icon}</span>
							</div>
							<h3 class="font-display mt-7 text-4xl font-semibold leading-none tracking-[-0.04em] text-primary sm:text-5xl">{group.title}</h3>
							<div class="mt-auto flex flex-wrap gap-2 pt-10">
								{#each group.items as skill}
									<span class="rounded-full border border-white/70 bg-[color-mix(in_srgb,var(--skill-accent)_17%,white)] px-3 py-2 text-sm font-medium text-secondary">{skill}</span>
								{/each}
							</div>
						</article>
					{/each}
				</div>
				<div class="mt-4 flex items-center justify-between gap-4">
					<p class="text-xs font-semibold tracking-[0.12em] text-muted-custom" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(skillGroups.length).padStart(2, '0')}</p>
					<div class="flex gap-2">
						<button type="button" aria-label="Previous capability" disabled={activeIndex === 0} onclick={() => scrollToSlide(activeIndex - 1)} class="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white/80 text-primary transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40">
							<span aria-hidden="true" class="material-symbols-rounded">arrow_back</span>
						</button>
						<button type="button" aria-label="Next capability" disabled={activeIndex === skillGroups.length - 1} onclick={() => scrollToSlide(activeIndex + 1)} class="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white/80 text-primary transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40">
							<span aria-hidden="true" class="material-symbols-rounded">arrow_forward</span>
						</button>
					</div>
				</div>
			</div>

			<div data-skills-reveal class="order-1 flex flex-col justify-center px-2 py-7 text-center sm:px-6 lg:order-2 lg:px-0 lg:text-left">
				<p class="text-xs font-semibold uppercase tracking-[0.28em] text-muted-custom">Capabilities</p>
				<h2 id="skills-heading" class="font-display mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-primary sm:text-5xl lg:text-[3.5rem]">
					What I bring to a product team.
				</h2>
				<p class="mt-6 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
					A focused view of the capabilities I use most often. The full toolkit and technical stack are available in my CV.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.skill-slider {
		scrollbar-width: none;
	}

	.skill-slider::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1023px) {
		.skill-slider {
			scroll-padding-left: 0;
		}
	}
</style>
