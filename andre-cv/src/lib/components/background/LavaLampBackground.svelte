<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, utils } from 'animejs';

	let icons: HTMLDivElement[] = [];

	const floatingIcons = [
		{ type: 'sparkle', className: 'icon-purple' },
		{ type: 'plus', className: 'icon-pink' },
		{ type: 'dot', className: 'icon-green' },
		{ type: 'sparkle', className: 'icon-blue' },
		{ type: 'plus', className: 'icon-orange' }
	];

	onMount(() => {
		icons.forEach((icon, index) => {
			animate(icon, {
				translateX: () => utils.random(-36, 36),
				translateY: () => utils.random(-44, 44),
				rotate: () => utils.random(-16, 16),
				scale: () => utils.random(90, 112) / 100,
				duration: 4800 + index * 650,
				alternate: true,
				loop: true,
				ease: 'inOutSine'
			});
		});
	});
</script>

<div class="floating-background">
	{#each floatingIcons as icon, index}
		<div
			bind:this={icons[index]}
			class={`floating-icon floating-icon-${index + 1} ${icon.className}`}
			aria-hidden="true"
		>
			{#if icon.type === 'sparkle'}
				✦
			{:else if icon.type === 'plus'}
				+
			{:else}
				<span></span>
			{/if}
		</div>
	{/each}
</div>

<style>
	.floating-background {
		position: fixed;
		inset: 0;
		z-index: 0;
		overflow: hidden;
		pointer-events: none;
		background:
			radial-gradient(circle at 12% 0%, rgba(255, 173, 92, 0.18), transparent 30rem),
			radial-gradient(circle at 90% 10%, rgba(100, 199, 238, 0.16), transparent 32rem),
			radial-gradient(circle at 50% 35%, rgba(255, 122, 184, 0.1), transparent 36rem),
			var(--color-bg);
	}

	.floating-icon {
		position: absolute;
		display: grid;
		place-items: center;
		font-weight: 800;
		line-height: 1;
		opacity: 0.72;
		will-change: transform;
	}

	.floating-icon span {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: var(--radius-pill);
		background: currentColor;
	}

	.icon-purple {
		color: var(--gradient-purple);
	}

	.icon-pink {
		color: var(--gradient-pink);
	}

	.icon-green {
		color: var(--gradient-green);
	}

	.icon-blue {
		color: var(--gradient-blue);
	}

	.icon-orange {
		color: var(--gradient-orange);
	}

	.floating-icon-1 {
		top: 15%;
		left: 14%;
		font-size: 3.5rem;
	}

	.floating-icon-2 {
		top: 13%;
		right: 13%;
		font-size: 1.8rem;
	}

	.floating-icon-3 {
		bottom: 22%;
		right: 20%;
		font-size: 1rem;
	}

	.floating-icon-4 {
		bottom: 15%;
		left: 18%;
		font-size: 2.5rem;
		opacity: 0.3;
	}

	.floating-icon-5 {
		top: 50%;
		left: 58%;
		font-size: 1.4rem;
		opacity: 0.38;
	}

	@media (max-width: 768px) {
		.floating-icon-1 {
			top: 16%;
			left: 10%;
			font-size: 2.8rem;
		}

		.floating-icon-2 {
			top: 18%;
			right: 12%;
			font-size: 1.5rem;
		}

		.floating-icon-3 {
			bottom: 24%;
			right: 14%;
		}

		.floating-icon-4,
		.floating-icon-5 {
			display: none;
		}
	}
</style>