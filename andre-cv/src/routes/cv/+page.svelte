<script lang="ts">
	import { cvData } from '$lib/data/cv';

	const capabilityGroups = [
		{ label: 'Product & UX', items: cvData.capabilities.productUx },
		{ label: 'Research & Validation', items: cvData.capabilities.researchValidation },
		{ label: 'Systems & Accessibility', items: cvData.capabilities.systemsAccessibility },
		{ label: 'UX Engineering', items: cvData.capabilities.uxEngineering }
	];
</script>

<svelte:head>
	<title>Mariela Escalante | CV</title>
	<meta
		name="description"
		content="CV of Mariela Escalante, Senior Product Designer and UX/UI Engineer with 8+ years of experience across SaaS, enterprise, mobile, accessibility and UX engineering."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f3f1ec] px-4 py-8 text-[#111] sm:px-6 md:py-12 print:bg-white print:p-0">
	<div class="mx-auto max-w-5xl">
		<div class="mb-6 flex items-center justify-between gap-4 print:hidden">
			<a href="/" class="text-sm font-semibold text-secondary hover:text-primary">← Back to portfolio</a>
			<button
				type="button"
				onclick={() => window.print()}
				class="rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
			>
				Print / Save PDF
			</button>
		</div>

		<article class="rounded-[2rem] bg-white p-7 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:p-10 md:p-14 print:rounded-none print:p-0 print:shadow-none">
			<header class="border-b border-black/10 pb-8">
				<p class="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">Curriculum Vitae</p>
				<h1 class="mt-3 font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl">{cvData.profile.name}</h1>
				<p class="mt-3 text-xl font-semibold text-secondary">{cvData.profile.role}</p>
				<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary">
					<a href={`mailto:${cvData.profile.email}`}>{cvData.profile.email}</a>
					<a href={cvData.profile.socials.linkedin}>LinkedIn</a>
					<a href="https://mariela-escalante.vercel.app/">Portfolio</a>
				</div>
			</header>

		<section class="cv-section">
			<h2>Summary</h2>
			<p>{cvData.profile.heroSummary}</p>
		</section>

		<section class="cv-section">
			<h2>Core capabilities</h2>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each capabilityGroups as group}
					<div>
						<h3>{group.label}</h3>
						<p>{group.items.join(' · ')}</p>
					</div>
				{/each}
			</div>
			<div class="mt-5 grid gap-5 sm:grid-cols-2">
				<div>
					<h3>AI-assisted workflow</h3>
					<p>{cvData.capabilities.aiWorkflow.join(' · ')}</p>
				</div>
				<div>
					<h3>Additional tools</h3>
					<p>{cvData.capabilities.additionalTools.join(' · ')}</p>
				</div>
			</div>
		</section>

		<section class="cv-section">
			<h2>Experience</h2>
			<div class="space-y-7">
				{#each cvData.experience as item}
					<div class="break-inside-avoid">
						<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
							<div>
								<h3>{item.role}</h3>
								<p class="font-semibold text-primary">{item.company}</p>
							</div>
							<p class="text-sm font-medium text-secondary">{item.period}</p>
						</div>
						<p class="mt-2">{item.description}</p>
						{#if item.projects}
							<div class="mt-3 space-y-2 border-l-2 border-pink-200 pl-4">
								{#each item.projects as project}
									<div>
										<p class="font-semibold text-primary">{project.name} · {project.role}</p>
										<p>{project.description}</p>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<div class="grid gap-8 md:grid-cols-2">
			<section class="cv-section border-b-0 pb-0">
				<h2>Education</h2>
				<div class="space-y-5">
					{#each cvData.education as item}
						<div>
							<h3>{item.title}</h3>
							<p>{item.institution}</p>
							<p class="text-sm text-secondary">{item.period}</p>
						</div>
					{/each}
				</div>
			</section>

			<section class="cv-section border-b-0 pb-0">
				<h2>Recognition & languages</h2>
				{#each cvData.awards as item}
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				{/each}
				<div class="mt-5 space-y-1">
					{#each cvData.languages as language}
						<p><strong>{language.name}</strong> — {language.level}</p>
					{/each}
				</div>
			</section>
		</div>
		</article>
	</div>
</div>

<style>
	.cv-section {
		padding: 2rem 0;
		border-bottom: 1px solid rgba(17, 17, 17, 0.1);
	}

	.cv-section h2 {
		margin-bottom: 1rem;
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 700;
		letter-spacing: -0.03em;
	}

	.cv-section h3 {
		font-weight: 750;
		color: var(--color-text-primary);
	}

	.cv-section p {
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	@media print {
		@page {
			size: A4;
			margin: 14mm;
		}

		:global(.case-study-page),
		:global(header.fixed) {
			display: none !important;
		}

		.cv-section {
			padding: 1rem 0;
		}

		.cv-section h2 {
			font-size: 1.35rem;
			margin-bottom: 0.6rem;
		}

		.cv-section p {
			font-size: 10.5pt;
			line-height: 1.45;
		}
	}
</style>
