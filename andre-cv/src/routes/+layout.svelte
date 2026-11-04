<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import LavaLampBackground from '$lib/components/background/LavaLampBackground.svelte';

	let { children } = $props();

	onMount(() => {
		const token = env.PUBLIC_CF_WEB_ANALYTICS_TOKEN;
		if (!token || !/^[a-f0-9]{32}$/i.test(token)) return;

		const beacon = document.createElement('script');
		beacon.defer = true;
		beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
		beacon.setAttribute('data-cf-beacon', JSON.stringify({ token, spa: true }));
		document.head.appendChild(beacon);
		return () => beacon.remove();
	});
</script>

<div class="relative min-h-screen overflow-x-clip">
	<LavaLampBackground />

	<div id="top" class="relative z-10 min-h-screen text-primary">
		{@render children()}
	</div>
</div>
