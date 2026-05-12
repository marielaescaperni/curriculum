<script lang="ts">
	import '../app.css';
	import LavaLampBackground from '$lib/components/background/LavaLampBackground.svelte';

	let { children } = $props();
</script>

<div class="relative min-h-screen overflow-hidden">
	<LavaLampBackground />

	<div id="top" class="relative z-10 min-h-screen text-primary">
		<main>
			{@render children()}
		</main>
	</div>
</div>