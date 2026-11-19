<script lang="ts">
	const floatingIcons = [
		{ type: 'sparkle', className: 'icon-purple' },
		{ type: 'plus', className: 'icon-pink' },
		{ type: 'dot', className: 'icon-green' },
		{ type: 'sparkle', className: 'icon-blue' },
		{ type: 'plus', className: 'icon-orange' }
	];
</script>

<div class="floating-background" aria-hidden="true">
	{#each floatingIcons as icon, index}
		<div
			class={`floating-icon floating-icon-${index + 1} ${icon.className}`}
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
		animation: drift var(--drift-duration, 5s) ease-in-out infinite alternate;
	}

	.floating-icon span {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: var(--radius-pill);
		background: currentColor;
	}

	.icon-purple { color: var(--gradient-purple); }
	.icon-pink { color: var(--gradient-pink); }
	.icon-green { color: var(--gradient-green); }
	.icon-blue { color: var(--gradient-blue); }
	.icon-orange { color: var(--gradient-orange); }

	.floating-icon-1 { --drift-x: 28px; --drift-y: 18px; top: 15%; left: 14%; font-size: 3.5rem; }
	.floating-icon-2 { --drift-x: -24px; --drift-y: 32px; --drift-duration: 5.6s; top: 13%; right: 13%; font-size: 1.8rem; }
	.floating-icon-3 { --drift-x: 21px; --drift-y: -34px; --drift-duration: 6.2s; bottom: 22%; right: 20%; font-size: 1rem; }
	.floating-icon-4 { --drift-x: -30px; --drift-y: -22px; --drift-duration: 6.8s; bottom: 15%; left: 18%; font-size: 2.5rem; opacity: 0.3; }
	.floating-icon-5 { --drift-x: 26px; --drift-y: 36px; --drift-duration: 7.4s; top: 50%; left: 58%; font-size: 1.4rem; opacity: 0.38; }

	@keyframes drift {
		to { transform: translate(var(--drift-x), var(--drift-y)) rotate(12deg); }
	}

	@media (max-width: 768px) {
		.floating-icon-1 { top: 16%; left: 10%; font-size: 2.8rem; }
		.floating-icon-2 { top: 18%; right: 12%; font-size: 1.5rem; }
		.floating-icon-3 { bottom: 24%; right: 14%; }
		.floating-icon-4,
		.floating-icon-5 { display: none; }
	}

	@media (prefers-reduced-motion: reduce) {
		.floating-icon { animation: none; }
	}
</style>
