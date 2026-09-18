<script lang="ts">
	import { cvData, cvCompetencyGroups } from '$lib/data/cv';
</script>

<svelte:head>
	<title>Mariela Escalante | CV</title>
	<meta
		name="description"
		content="CV of Mariela Escalante, Senior Product Designer and UX/UI Engineer with 8+ years of experience across SaaS, enterprise software, native mobile, accessibility and UX engineering."
	/>
	<link rel="canonical" href="https://mariela-escalante.vercel.app/cv" />
</svelte:head>

<div class="min-h-screen bg-[#f3f1ec] px-4 py-8 text-[#111] sm:px-6 md:py-12 print:bg-white print:p-0">
	<div class="mx-auto max-w-5xl">
		<div class="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
			<a href="/" class="text-sm font-semibold text-secondary transition hover:text-primary">← Back to portfolio</a>
			<a href="/cv/download" class="save-pdf-button" download>
				Save as PDF
			</a>
		</div>

		<article class="cv-document rounded-[2rem] bg-white p-7 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:p-10 md:p-14 print:rounded-none print:p-0 print:shadow-none">
			<header class="border-b border-black/15 pb-7 print:pb-4">
				<h1 class="font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl print:text-[26pt]">
					{cvData.profile.name}
				</h1>
				<p class="mt-2 text-xl font-semibold text-secondary print:text-[12pt]">
					{cvData.profile.cvRole}
				</p>
				<div class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-secondary print:text-[9.5pt]">
					<a href={`mailto:${cvData.profile.email}`}>{cvData.profile.email}</a>
					<span aria-hidden="true">|</span>
					<a href="https://mariela-escalante.vercel.app/">mariela-escalante.vercel.app</a>
					<span aria-hidden="true">|</span>
					<a href={cvData.profile.socials.linkedin}>linkedin.com/in/mariela-escalante</a>
				</div>
			</header>

			<section class="cv-section">
				<h2>Professional Summary</h2>
				<p>{cvData.profile.professionalSummary}</p>
			</section>

			<section class="cv-section">
				<h2>Core Competencies</h2>
				<div class="space-y-3 print:space-y-1.5">
					{#each cvCompetencyGroups as group}
						<p>
							<strong>{group.label}:</strong>
							{group.items.join(', ')}
						</p>
					{/each}
				</div>
			</section>

			<section class="cv-section">
				<h2>Professional Experience</h2>
				<div class="space-y-7 print:space-y-4">
					{#each cvData.experience as item}
						<section class="experience-entry break-inside-avoid">
							<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
								<div>
									<h3>{item.role}</h3>
									<p class="font-semibold text-primary">{item.company}</p>
								</div>
								<p class="text-sm font-semibold text-secondary print:text-[9.5pt]">{item.period}</p>
							</div>

							<ul class="mt-3 space-y-2 pl-5 print:mt-1.5 print:space-y-1">
								{#each item.cvBullets as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>
						</section>
					{/each}
				</div>
			</section>

			<section class="cv-section border-b-0 pb-0">
				<h2>Education, Recognition & Languages</h2>
				<div class="space-y-3">
					{#each cvData.education as item}
						<p>
							<strong>{item.title}:</strong> {item.institution} | {item.period}
						</p>
					{/each}

					{#each cvData.awards as item}
						<p><strong>{item.title}:</strong> {item.description}</p>
					{/each}

					<p>
						<strong>Languages:</strong>
						{cvData.languages.map((language) => `${language.name}: ${language.level}`).join(' | ')}
					</p>
				</div>
			</section>
		</article>
	</div>
</div>

<style>
	.save-pdf-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 999px;
		background: #111111;
		color: #ffffff !important;
		padding: 0.8rem 1.15rem;
		font-size: 0.875rem;
		font-weight: 800;
		line-height: 1;
		transition:
			transform 240ms var(--ease-out-soft),
			background-color 240ms var(--ease-out-soft),
			color 240ms var(--ease-out-soft),
			box-shadow 240ms var(--ease-out-soft);
	}

	.save-pdf-button:hover {
		transform: translateY(-2px);
		background: #a7e4ff;
		color: #0d4f68 !important;
		box-shadow: 0 18px 40px rgba(100, 199, 238, 0.28);
	}

	.save-pdf-button:focus-visible {
		outline: 3px solid rgba(100, 199, 238, 0.45);
		outline-offset: 4px;
	}

	.cv-section {
		padding: 1.65rem 0;
		border-bottom: 1px solid rgba(17, 17, 17, 0.12);
	}

	.cv-section h2 {
		margin-bottom: 0.85rem;
		font-family: var(--font-display);
		font-size: 1.55rem;
		font-weight: 750;
		letter-spacing: -0.025em;
	}

	.cv-section h3 {
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 750;
		line-height: 1.2;
		color: var(--color-text-primary);
	}

	.cv-section p,
	.cv-section li {
		line-height: 1.55;
		color: var(--color-text-secondary);
	}

	.cv-section ul {
		list-style: disc;
	}

	@media print {
		@page {
			size: A4;
			margin: 12mm 14mm;
		}

		.cv-document {
			font-family: Arial, Helvetica, sans-serif;
		}

		.cv-section {
			padding: 0.7rem 0;
		}

		.cv-section h2 {
			margin-bottom: 0.35rem;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 11pt;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.01em;
		}

		.cv-section h3 {
			font-family: Arial, Helvetica, sans-serif;
			font-size: 10.5pt;
		}

		.cv-section p,
		.cv-section li {
			font-size: 9.35pt;
			line-height: 1.32;
		}

		.experience-entry {
			page-break-inside: avoid;
			break-inside: avoid-page;
		}

		a {
			text-decoration: none;
			color: #111111;
		}
	}
</style>
