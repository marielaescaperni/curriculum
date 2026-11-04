<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import HeroSection from '$lib/sections/HeroSection.svelte';
	import ProofStrip from '$lib/sections/ProofStrip.svelte';
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import SkillsSection from '$lib/sections/SkillsSection.svelte';
	import ProjectsSection from '$lib/sections/ProjectsSection.svelte';
	import ExperienceSection from '$lib/sections/ExperienceSection.svelte';
	import BackgroundSection from '$lib/sections/BackgroundSection.svelte';
	import ContactSection from '$lib/sections/ContactSection.svelte';
</script>

<svelte:head>
	{#if env.PUBLIC_GOOGLE_SITE_VERIFICATION}
		<meta name="google-site-verification" content={env.PUBLIC_GOOGLE_SITE_VERIFICATION} />
	{/if}
	<title>Mariela Escalante | Senior Product Designer Portfolio & Case Studies</title>
	<meta name="description" content="Explore Mariela Escalante’s product design portfolio: SaaS and enterprise UX case studies, accessibility, design systems and front-end engineering." />
	<link rel="canonical" href="https://mariela-escalante.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mariela-escalante.vercel.app/" />
	<meta property="og:title" content="Mariela Escalante | Senior Product Designer Portfolio" />
	<meta property="og:description" content="Senior Product Designer portfolio featuring real SaaS and enterprise UX case studies, accessibility work, and production-ready interfaces." />
	<meta property="og:image" content="https://mariela-escalante.vercel.app/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mariela Escalante | Senior Product Designer & UX/UI Engineer" />
	<meta name="twitter:description" content="Product design, accessibility, research, design systems and UX engineering across complex digital products." />
	<meta name="twitter:image" content="https://mariela-escalante.vercel.app/og-image.png" />
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'ProfilePage',
			'@id': 'https://mariela-escalante.vercel.app/#profile',
			url: 'https://mariela-escalante.vercel.app/',
			mainEntity: {
				'@type': 'Person',
				'@id': 'https://mariela-escalante.vercel.app/#person',
				name: 'Mariela Escalante',
				jobTitle: 'Senior Product Designer & UX/UI Engineer',
				description: 'Product designer specializing in SaaS, enterprise UX, accessibility, research and front-end implementation.',
				url: 'https://mariela-escalante.vercel.app/',
				image: 'https://mariela-escalante.vercel.app/profile-photo.jpg',
				sameAs: ['https://www.linkedin.com/in/mariela-escalante']
			}
		})}
	</script>
</svelte:head>

<Navbar />

<main>
	<HeroSection />
	<ProofStrip />
	<ProjectsSection />
	<SkillsSection />
	<ExperienceSection />
	<BackgroundSection />
	<AboutSection />
	<ContactSection />
</main>

<Footer />
