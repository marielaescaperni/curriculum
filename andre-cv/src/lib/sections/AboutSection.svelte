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
	<div id="about" class="mx-auto max-w-6xl scroll-mt-[100px]">
		<div class="grid items-center gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 lg:gap-16">
			<div data-about-reveal class="relative mx-auto w-full max-w-[25rem] md:max-w-none">
				<div
					aria-hidden="true"
					class="absolute -inset-4 rounded-[3rem] bg-[linear-gradient(135deg,var(--gradient-purple),var(--gradient-blue),var(--gradient-pink))] opacity-25 blur-3xl"
				></div>
				<div class="surface-card relative overflow-hidden rounded-[2.5rem] p-3 sm:p-4">
					<img
						src="/profile-photo.jpg"
						alt="Portrait of Mariela Escalante"
						width="800"
						height="1000"
						loading="lazy"
						decoding="async"
						class="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
					/>
				</div>
			</div>

			<div class="space-y-6">
				<div class="space-y-4">
					<p data-about-reveal class="text-xs font-semibold uppercase tracking-[0.28em] text-muted-custom">
						About me
					</p>
					<h2
						data-about-reveal
						class="font-display max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl"
					>
						Get to know me!
					</h2>
					<p data-about-reveal class="max-w-2xl text-lg font-medium leading-relaxed text-primary">
						I believe good design should feel like someone cared before you even noticed :)
					</p>
				</div>

				<div class="space-y-4 text-base leading-relaxed text-secondary md:text-lg">
					{#each introParagraphs as paragraph}
						<p data-about-reveal>{paragraph.trim()}</p>
					{/each}

					{#each aboutParagraphs as paragraph}
						<p data-about-reveal>{paragraph.trim()}</p>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-10 grid gap-3 md:mt-14 md:grid-cols-3">
			{#each notes as note}
				<article
					data-about-reveal
					style:--card-accent={note.accent}
					class="group rounded-2xl bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:bg-[var(--card-accent)] text-black"
				>
					<p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300">
						{note.label}
					</p>
					<p class="text-sm leading-relaxed text-secondary transition duration-300 ">
						{note.text}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
