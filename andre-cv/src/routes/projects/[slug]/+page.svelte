<script lang="ts">
	import CaseStudyHeader from '$lib/components/case-study/CaseStudyHeader.svelte';
	import CaseHero from '$lib/components/case-study/CaseHero.svelte';
	import CaseOverview from '$lib/components/case-study/CaseOverview.svelte';
	import CaseOwnership from '$lib/components/case-study/CaseOwnership.svelte';
	import CaseEvidence from '$lib/components/case-study/CaseEvidence.svelte';
	import CaseDecisions from '$lib/components/case-study/CaseDecisions.svelte';
	import CaseSolution from '$lib/components/case-study/CaseSolution.svelte';
	import CaseValidation from '$lib/components/case-study/CaseValidation.svelte';
	import CaseNavigation from '$lib/components/case-study/CaseNavigation.svelte';
	import { featuredProjects } from '$lib/data/projects';
	import type { Project } from '$lib/types/project';

	let { data } = $props<{ data: { project: Project } }>();
	let project = $derived(data.project);

	let currentIndex = $derived(featuredProjects.findIndex((item) => item.slug === project.slug));
	let nextProject = $derived(featuredProjects[(currentIndex + 1) % featuredProjects.length]);
</script>

<svelte:head>
	<title>{project.seo.title}</title>
	<meta name="description" content={project.seo.description} />
	<link rel="canonical" href={`https://mariela-escalante.vercel.app/projects/${project.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={project.seo.title} />
	<meta property="og:description" content={project.seo.description} />
	{#if project.thumbnail}
		<meta property="og:image" content={`https://mariela-escalante.vercel.app${project.thumbnail}`} />
	{/if}
</svelte:head>

<div class="case-study-page bg-site min-h-screen text-primary">
	<CaseStudyHeader />
	<CaseHero {project} />
	<CaseOverview {project} />
	<CaseOwnership {project} />
	<CaseEvidence {project} />
	<CaseDecisions {project} />
	<CaseSolution {project} />
	<CaseValidation {project} />
	<CaseNavigation nextSlug={nextProject.slug} nextTitle={nextProject.title} />
</div>
