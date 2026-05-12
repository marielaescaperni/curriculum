<script lang="ts">
	import '../app.css';
	import LavaLampBackground from '$lib/components/background/LavaLampBackground.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mariela Escalante | UX/UI Designer</title>

	<meta
		name="description"
		content="UX/UI Designer with experience creating responsive, accessible and user-centered digital products."
	/>

	<link rel="canonical" href="https://mariela-escalante.vercel.app/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mariela-escalante.vercel.app/" />
	<meta property="og:title" content="Mariela Escalante | UX/UI Designer" />
	<meta
		property="og:description"
		content="Portfolio CV of Mariela Escalante, UX/UI Designer focused on clean interfaces, responsive design and product experiences."
	/>
	<meta property="og:image" content="https://mariela-escalante.vercel.app/og-image.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mariela Escalante | UX/UI Designer" />
	<meta
		name="twitter:description"
		content="UX/UI Designer focused on clean interfaces, responsive design and product experiences."
	/>
	<meta name="twitter:image" content="https://mariela-escalante.vercel.app/og-image.png" />
</svelte:head>

<div class="relative min-h-screen overflow-hidden">
	<LavaLampBackground />

	<div id="top" class="relative z-10 min-h-screen text-primary">
		<main>
			{@render children()}
		</main>
	</div>
</div>