<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let isMenuOpen = $state(false);
	let isClosing = $state(false);

	const navItems = [
		{ title: 'Work', href: '#projects' },
		{ title: 'About', href: '#about' },
		{ title: 'Experience', href: '#experience' }
	];

	function openMenu() {
		isMenuOpen = true;
	}

	function closeMenu() {
		isClosing = true;

		setTimeout(() => {
			isMenuOpen = false;
			isClosing = false;
		}, 300);
	}

	function toggleMenu() {
		if (isMenuOpen) {
			closeMenu();
			return;
		}

		openMenu();
	}
</script>

<header class="fixed left-0 top-6 z-50 w-full px-4">
	<nav
		class="mx-auto flex w-full max-w-[min(100%,54rem)] items-center justify-between rounded-full border-transparent bg-white/10 px-3 py-3 shadow-[0_24px_80px_rgba(17,17,17,0.12)] backdrop-blur-2xl md:max-w-fit md:justify-center md:gap-2"
		aria-label="Main navigation"
	>
		<a href="/" class="motion-base flex items-center gap-3 rounded-full px-3 py-2 bg-white">
			<img src="/mariela-logo.svg" alt="Andre Escalante logo" class="h-9 w-7.5" />
		</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="motion-base rounded-full px-8 py-3 text-sm font-semibold text-secondary hover:bg-black/5 hover:text-primary md:px-6 md:text-base"
				>
					{item.title}
				</a>
			{/each}
		</div>

		<div class="hidden md:block">
			<Button href="#contact" label="let’s talk!" variant="secondary" />
		</div>

		<button
			type="button"
			onclick={toggleMenu}
			class="motion-base flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary backdrop-blur-xl md:hidden"
			aria-label="Toggle navigation menu"
			aria-expanded={isMenuOpen}
		>
			<span class="material-symbols-rounded text-[26px] text-indigo-500">
				{isMenuOpen ? 'close' : 'menu'}
			</span>
		</button>
	</nav>
</header>

{#if isMenuOpen}
	<div class="fixed inset-0 z-[100] md:hidden">
		<button
			type="button"
			class="absolute inset-0 w-full bg-black/55"
			class:animate-fade-in={!isClosing}
			class:animate-fade-out={isClosing}
			aria-label="Close menu overlay"
			onclick={closeMenu}
		></button>

		<div
				class="absolute inset-x-0 top-0 min-h-screen bg-[#111111] px-6 pb-10 pt-6 text-white"
			class:animate-slide-down={!isClosing}
			class:animate-slide-up={isClosing}
		>
			<div class="flex items-center justify-between">
				<a href="/" onclick={closeMenu} class="flex items-center gap-3">
					<img src="/mariela-logo.svg" alt="Andre Escalante logo" class="h-10 w-auto" />
				</a>

				<button
					type="button"
					onclick={closeMenu}
					class="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
					aria-label="Close navigation menu"
				>
					<span class="material-symbols-rounded text-[28px]">close</span>
				</button>
			</div>

			<div
				class="mt-14 flex flex-col gap-5 font-display text-6xl font-semibold leading-none tracking-[-0.06em]"
			>
				{#each navItems as item}
					<a href={item.href} onclick={closeMenu} class="brand-gradient-text">
						{item.title}
					</a>
				{/each}
			</div>

			<div class="mt-12 border-t border-white/15 pt-8">
				<Button href="#contact" label="let’s talk!" variant="secondary" onclick={closeMenu} />
			</div>

			<div class="absolute bottom-10 right-6">
		<p class="text-right text-sm font-medium leading-relaxed text-cyan-400">
			Mariela Escalante<br />
			UX/UI Designer & Front-End Developer
		</p>
	</div>
		</div>
	</div>
{/if}

<style>
	@keyframes slide-down {
		from {
			transform: translateY(-100%);
		}

		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-up {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(-100%);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	.animate-slide-down {
		animation: slide-down 300ms var(--ease-out-soft) forwards;
	}

	.animate-slide-up {
		animation: slide-up 300ms var(--ease-out-soft) forwards;
	}

	.animate-fade-in {
		animation: fade-in 300ms var(--ease-out-soft) forwards;
	}

	.animate-fade-out {
		animation: fade-out 300ms var(--ease-out-soft) forwards;
	}
</style>