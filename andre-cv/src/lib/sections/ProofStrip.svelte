<script lang="ts">
	import { telecomOpenApi, phreeli, connectorStudio, vocalTransformation } from '$lib/data/projects';

	const highlights = [
		{
			id: 'telecom',
			slug: telecomOpenApi.slug,
			color: '#FFF0A9',
			logo: '/logos/symphonica.png',
			logoAlt: 'Symphonica',
			brand: 'Symphonica',
			metric: telecomOpenApi.proof?.value ?? '',
			detail: telecomOpenApi.proof?.label ?? '',
			className: ''
		},
		{
			id: 'phreeli',
			slug: phreeli.slug,
			color: '#E8DFFF',
			logo: '/logos/phreeli.png',
			logoAlt: 'Phreeli',
			brand: 'Phreeli',
			metric: phreeli.proof?.value ?? '',
			detail: phreeli.proof?.label ?? '',
			className: ''
		},
		{
			id: 'connector',
			slug: connectorStudio.slug,
			color: '#D3F0D9',
			logo: '/logos/symphonica.png',
			logoAlt: 'Symphonica',
			brand: 'Symphonica',
			metric: connectorStudio.proof?.value ?? '',
			detail: connectorStudio.proof?.label ?? '',
			className: ''
		},
		{
			id: 'vocal-transformation',
			slug: vocalTransformation.slug,
			color: '#FBDDE8',
			logo: '/logos/vocal-transformation.png',
			logoAlt: 'Vocal Transformation',
			brand: 'Vocal Transformation',
			metric: 'CMS + signups',
			detail: 'Workshop editing and mentorship integrations',
			className: ''
		}
	];

	let failedLogos = $state<string[]>([]);
</script>

<section aria-labelledby="proof-title" class="px-6 pb-8 md:pb-14">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
			<div class="flex flex-col justify-center gap-3 rounded-[var(--radius-card)] bg-white/55 p-6 md:col-span-2 lg:col-span-2">
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-custom">Selected impact</p>
				<h2 id="proof-title" class="font-display max-w-lg text-4xl font-semibold leading-[0.97] tracking-[-0.05em] text-primary sm:text-5xl">
					Good design, measurable impact.
				</h2>
				<p class="max-w-md text-sm leading-relaxed text-secondary sm:text-base">
					Outcomes and delivery highlights from products I've helped design and build.
				</p>
			</div>

			{#each highlights as highlight (highlight.id)}
				<a
					href={`/projects/${highlight.slug}`}
					class="group flex min-h-[230px] flex-col rounded-[var(--radius-card)] p-5 transition-transform duration-300 hover:-translate-y-1"
					style:background={highlight.color}
				>
					<p class="font-display text-3xl font-semibold leading-tight tracking-tight text-primary">{highlight.metric}</p>
					<p class="mt-2 text-sm leading-relaxed text-secondary">{highlight.detail}</p>
					<div class="mt-auto flex min-h-10 items-end justify-between gap-3 pt-8">
						{#if !failedLogos.includes(highlight.id)}
							<img
								src={highlight.logo}
								alt={highlight.logoAlt}
								loading="lazy"
								class="max-h-9 max-w-[65%] object-contain object-left"
								onerror={() => failedLogos = [...failedLogos, highlight.id]}
							/>
						{:else}
							<span class="text-xs font-bold text-primary">{highlight.brand}</span>
						{/if}
						<span class="material-symbols-rounded text-xl text-primary transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_outward</span>
					</div>
				</a>
			{/each}

			<div class="flex min-h-[230px] flex-col rounded-[var(--radius-card)] bg-[#DCEBF8] p-5">
				<p class="font-display text-4xl font-semibold tracking-tight text-primary">8+</p>
				<p class="mt-2 text-sm text-secondary">Years designing digital products</p>
				<p class="mt-auto pt-8 text-xs font-semibold text-primary">Product design · UX engineering</p>
			</div>

			<div class="flex min-h-[230px] flex-col rounded-[var(--radius-card)] bg-[#FCE6D2] p-5">
				<p class="font-display text-4xl font-semibold tracking-tight text-primary">E2E</p>
				<p class="mt-2 text-sm text-secondary">From discovery through delivery</p>
				<p class="mt-auto pt-8 text-xs font-semibold text-primary">Design + code</p>
			</div>
		</div>
	</div>
</section>
