<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, utils } from 'animejs';

	let blobs: HTMLDivElement[] = [];

	onMount(() => {
		blobs.forEach((blob, index) => {
			animate(blob, {
		translateX: () => utils.random(-320, 320),
translateY: () => utils.random(-260, 260),

				scale: () => utils.random(90, 135) / 100,

				rotate: () => utils.random(-8, 8),

				opacity: () => utils.random(12, 22) / 100,

				duration: 7000 + index * 900,

				alternate: true,

				loop: true,

				ease: 'inOutSine'
			});
		});
	});
</script>

<div class="lava-lamp-container">
	<div bind:this={blobs[0]} class="lava-blob blob-pink"></div>

	<div bind:this={blobs[1]} class="lava-blob blob-blue"></div>

	<div bind:this={blobs[2]} class="lava-blob blob-orange"></div>

	<div bind:this={blobs[3]} class="lava-blob blob-purple"></div>

	<div bind:this={blobs[4]} class="lava-blob blob-green"></div>

	<div bind:this={blobs[5]} class="lava-blob blob-cyan"></div>
</div>

<style>
	.lava-lamp-container {
		position: fixed;

		inset: 0;

		z-index: 0;

		overflow: hidden;

		pointer-events: none;

		background:
			radial-gradient(circle at center, rgba(233, 233, 233, 0.015), transparent 70%),
			#d4d4d4;
	}

.lava-blob {
	position: absolute;
	border-radius: 999px;
	filter: blur(20px);
	mix-blend-mode: screen;
	opacity: 0.42;
	will-change: transform, opacity;
}
	.blob-pink {
		width: 42rem;
		height: 42rem;

		background: radial-gradient(circle, #ff8cc8 0%, transparent 70%);

		top: -8%;
		left: -6%;
	}

	.blob-blue {
		width: 46rem;
		height: 46rem;

		background: radial-gradient(circle, #79d7ff 0%, transparent 70%);

		top: -4%;
		right: -10%;
	}

	.blob-orange {
		width: 40rem;
		height: 40rem;

		background: radial-gradient(circle, #ffb86c 0%, transparent 70%);

		bottom: -12%;
		left: 10%;
	}

	.blob-purple {
		width: 38rem;
		height: 38rem;

		background: radial-gradient(circle, #b7a6ff 0%, transparent 70%);

		bottom: -6%;
		right: 8%;
	}

	.blob-green {
		width: 34rem;
		height: 34rem;

		background: radial-gradient(circle, #b8ffcc 0%, transparent 70%);

		top: 30%;
		left: 32%;
	}

	.blob-cyan {
		width: 36rem;
		height: 36rem;

		background: radial-gradient(circle, rgba(121, 215, 255, 0.9) 0%, transparent 70%);

		top: 42%;
		right: 28%;
	}

	@media (max-width: 768px) {
			.lava-blob {
		filter: blur(70px);
		opacity: 0.42;
	}

		.blob-pink,
		.blob-blue,
		.blob-orange,
		.blob-purple,
		.blob-green,
		.blob-cyan {
			width: 20rem;
			height: 20rem;
		}
	}
</style>