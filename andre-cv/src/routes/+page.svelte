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

<Navbar />

<main>
	<HeroSection />
	<ProofStrip />
	<ProjectsSection />
	<AboutSection />
	<SkillsSection />
	<ExperienceSection />
	<BackgroundSection />
	<ContactSection />
</main>

<Footer />
