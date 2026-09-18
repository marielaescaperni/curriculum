<script lang="ts">
	import { onMount } from 'svelte';

	const items = [
		{ id: 'context', label: 'Context' },
		{ id: 'decisions', label: 'Decisions' },
		{ id: 'solution', label: 'Solution' },
		{ id: 'validation', label: 'Validation' },
		{ id: 'impact', label: 'Impact' }
	];

	let activeId = $state(items[0].id);

	onMount(() => {
		const sections = items
			.map((item) => document.getElementById(item.id))
			.filter((section): section is HTMLElement => Boolean(section));

		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) activeId = visible[0].target.id;
			},
			{
				rootMargin: '-20% 0px -62% 0px',
				threshold: [0, 0.15, 0.35, 0.6]
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	});

	function goToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
			block: 'start'
		});
	}
</script>

<nav
	class="sticky top-3 z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-4xl rounded-full border border-black/10 bg-white/75 px-2 py-2 shadow-[0_12px_36px_rgba(17,17,17,0.08)] backdrop-blur-xl md:top-5"
	aria-label="Case study sections"
>
	<div class="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
		<div class="flex min-w-max items-center gap-1">
			{#each items as item, index}
				<button
					type="button"
					onclick={() => goToSection(item.id)}
					aria-current={activeId === item.id ? 'step' : undefined}
					class:case-progress-active={activeId === item.id}
					class="case-progress-item rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
				>
					<span class="sr-only">Section {index + 1}: </span>{item.label}
				</button>
			{/each}
		</div>
	</div>
</nav>

<style>
	.case-progress-item {
		color: var(--color-text-secondary);
		transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
	}

	.case-progress-item:hover {
		background: rgba(255, 255, 255, 0.9);
		color: var(--color-text-primary);
	}

	.case-progress-active {
		background: #111111;
		color: #ffffff;
		box-shadow: 0 4px 14px rgba(17, 17, 17, 0.14);
	}

	.case-progress-active:hover {
		background: #111111;
		color: #ffffff;
	}
</style>
