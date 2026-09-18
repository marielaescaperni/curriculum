<script lang="ts">
	import { animateOnView } from '$lib/actions/animateOnView';
	import { profile } from '$lib/data/profile';

	const notes = [
		{
			label: 'How I design',
			text: 'I simplify complex workflows without losing the details users actually need.',
			accent: 'var(--gradient-purple)'
		},
		{
			label: 'How I collaborate',
			text: 'I work closely with product, engineering and stakeholders from discovery through delivery.',
			accent: 'var(--gradient-pink)'
		},
		{
			label: 'How I build',
			text: 'I use my front-end background to bridge design decisions and production implementation.',
			accent: 'var(--gradient-blue)'
		}
	];

	const introParagraphs = profile.intro.trim().split('\n\n');
	const aboutParagraphs = profile.about.trim().split('\n\n');
</script>

<section
	class="px-6 pt-20 md:pt-24"
	use:animateOnView={{
		selector: '[data-about-reveal]',
		y: 24,
		delay: 90,
		duration: 900,
		threshold: 0.18
	}}
>
	<div id="about" class="mx-auto grid max-w-6xl scroll-mt-4 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
		<div class="space-y-5">
			<p data-about-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
				About me
			</p>

			<h2
				data-about-reveal
				class="max-w-sm text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-5xl"
			>
				I believe good design should feel like someone cared before you even noticed :)
			</h2>
		</div>

		<div class="space-y-8">
			<div class="space-y-5 text-lg leading-relaxed text-neutral-700 md:text-xl">
				{#each introParagraphs as paragraph}
					<p data-about-reveal>{paragraph.trim()}</p>
				{/each}

				{#each aboutParagraphs as paragraph}
					<p data-about-reveal>{paragraph.trim()}</p>
				{/each}
			</div>

			<div class="grid gap-3 md:grid-cols-3">
				{#each notes as note}
					<article
						data-about-reveal
						style:--card-accent={note.accent}
						class="group rounded-3xl border border-white/70 bg-white/45 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:border-transparent hover:bg-[var(--card-accent)]"
					>
						<p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 transition duration-300 group-hover:text-black/65">
							{note.label}
						</p>
						<p class="text-sm leading-relaxed text-neutral-700 transition duration-300 group-hover:text-black">
							{note.text}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
