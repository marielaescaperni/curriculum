<script lang="ts">
	import '../app.css';
	import LavaLampBackground from '$lib/components/background/LavaLampBackground.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mariela Escalante | Senior Product Designer & UX/UI Engineer</title>

	<meta
		name="description"
		content="Senior Product Designer and UX/UI Engineer with 8+ years designing SaaS, enterprise, native mobile and responsive web products from discovery through delivery."
	/>

	<link rel="canonical" href="https://mariela-escalante.vercel.app/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mariela-escalante.vercel.app/" />
	<meta property="og:title" content="Mariela Escalante | Senior Product Designer & UX/UI Engineer" />
	<meta
		property="og:description"
		content="Product design, accessibility, research, design systems and UX engineering across complex digital products."
	/>
	<meta property="og:image" content="https://mariela-escalante.vercel.app/og-image.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mariela Escalante | Senior Product Designer & UX/UI Engineer" />
	<meta
		name="twitter:description"
		content="Product design, accessibility, research, design systems and UX engineering across complex digital products."
	/>
	<meta name="twitter:image" content="https://mariela-escalante.vercel.app/og-image.png" />
</svelte:head>

<div class="relative min-h-screen overflow-hidden">
	<LavaLampBackground />

	<div id="top" class="relative z-10 min-h-screen text-primary">
		{@render children()}
	</div>
</div>
