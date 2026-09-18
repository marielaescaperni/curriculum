<script lang="ts">
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
	<title>Mariela Escalante | Senior Product Designer & UX/UI Engineer</title>
	<meta name="description" content="Senior Product Designer and UX/UI Engineer with 8+ years designing SaaS, enterprise, native mobile and responsive web products from discovery through delivery." />
	<link rel="canonical" href="https://mariela-escalante.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mariela-escalante.vercel.app/" />
	<meta property="og:title" content="Mariela Escalante | Senior Product Designer & UX/UI Engineer" />
	<meta property="og:description" content="Product design, accessibility, research, design systems and UX engineering across complex digital products." />
	<meta property="og:image" content="https://mariela-escalante.vercel.app/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mariela Escalante | Senior Product Designer & UX/UI Engineer" />
	<meta name="twitter:description" content="Product design, accessibility, research, design systems and UX engineering across complex digital products." />
	<meta name="twitter:image" content="https://mariela-escalante.vercel.app/og-image.png" />
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
