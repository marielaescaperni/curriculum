<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { tick } from 'svelte';

	let isMenuOpen = $state(false);
	let isClosing = $state(false);
	let menuButton = $state<HTMLButtonElement>();
	let closeButton = $state<HTMLButtonElement>();
	let mobileMenu = $state<HTMLDivElement>();

	const navItems = [
		{ title: 'Work', href: '/#projects' },
		{ title: 'Capabilities', href: '/#skills' },
		{ title: 'Experience', href: '/#experience' },
		{ title: 'About', href: '/#about' },
		{ title: 'Contact', href: '/#contact' }
	];

	async function openMenu() {
		isMenuOpen = true;
		await tick();
		closeButton?.focus();
	}

	function closeMenu(restoreFocus = true) {
		isClosing = true;
		setTimeout(() => {
			isMenuOpen = false;
			isClosing = false;
			if (restoreFocus) menuButton?.focus();
		}, 300);
	}

	function toggleMenu() {
		if (isMenuOpen) {
			closeMenu();
			return;
		}
		openMenu();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isMenuOpen) return;

		if (event.key === 'Escape') {
			closeMenu();
			return;
		}

		if (event.key === 'Tab' && mobileMenu) {
			const focusable = Array.from(
				mobileMenu.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
				)
			).filter((element) => !element.hasAttribute('disabled'));

			if (focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	}

	$effect(() => {
		if (typeof document === 'undefined') return;

		document.body.style.overflow = isMenuOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="fixed left-0 top-4 z-50 w-full px-4">
	<nav
		class="mx-auto flex w-full max-w-[min(100%,74rem)] items-center justify-between rounded-full border border-black/10 bg-white px-3 py-3 shadow-[0_10px_30px_rgba(17,17,17,0.08)] md:max-w-fit md:justify-center md:gap-5 lg:gap-7"
		aria-label="Main navigation"
	>
		<a href="/" aria-label="Mariela Escalante home" class="motion-base flex items-center gap-3 rounded-full bg-white px-3 py-2">
			<img src="/mariela-logo.svg" alt="" class="h-9 w-7.5" />
		</a>

		<div class="hidden items-center gap-6 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="motion-base rounded-full py-2.5 text-center text-sm font-semibold text-secondary hover:text-primary"
				>
					{item.title}
				</a>
			{/each}
		</div>

		<div class="hidden items-center gap-3 md:flex">
			<Button href="/cv" label="Check my CV" variant="secondary" size="compact" />
			<Button href="/#contact" label="Let's talk" variant="primary" size="compact" />
		</div>

		<button
			bind:this={menuButton}
			type="button"
			onclick={toggleMenu}
			class="motion-base flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary md:hidden"
			aria-label="Toggle navigation menu"
			aria-expanded={isMenuOpen}
			aria-controls="mobile-navigation"
		>
			<span aria-hidden="true" class="material-symbols-rounded text-[26px] text-indigo-500">{isMenuOpen ? 'close' : 'menu'}</span>
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
			onclick={() => closeMenu()}
		></button>

		<div
			bind:this={mobileMenu}
			id="mobile-navigation"
			role="dialog"
			aria-modal="true"
			aria-label="Mobile navigation"
			class="absolute inset-x-0 top-0 h-dvh overflow-y-auto bg-white px-6 pb-10 pt-6 text-[#111111]"
			class:animate-slide-down={!isClosing}
			class:animate-slide-up={isClosing}
		>
			<div class="flex items-center justify-between">
				<a href="/" aria-label="Mariela Escalante home" onclick={() => closeMenu(false)} class="flex items-center gap-3">
					<img src="/mariela-logo.svg" alt="" class="h-10 w-auto" />
				</a>

				<button
					bind:this={closeButton}
					type="button"
					onclick={() => closeMenu(false)}
					class="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-[#F3F1EC] text-[#111111]"
					aria-label="Close navigation menu"
				>
					<span aria-hidden="true" class="material-symbols-rounded text-[28px]">close</span>
				</button>
			</div>

			<div class="mt-10 flex flex-col gap-5 font-display text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
				{#each navItems as item}
					<a href={item.href} onclick={() => closeMenu(false)} class="text-[#111111] hover:text-[#6043CC]">{item.title}</a>
				{/each}
			</div>

			<div class="mt-12 flex flex-col gap-3 border-t border-black/15 pt-8">
				<Button href="/cv" label="Check my CV" variant="secondary" onclick={() => closeMenu(false)} />
				<Button href="/#contact" label="Let's talk" variant="primary" onclick={() => closeMenu(false)} />
			</div>

			<div class="mt-10 flex justify-end">
				<p class="text-right text-sm font-medium leading-relaxed text-[#6043CC]">
					Mariela Escalante<br />
					Senior Product Designer · UX/UI Engineer
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes slide-down {
		from { transform: translateY(-100%); }
		to { transform: translateY(0); }
	}

	@keyframes slide-up {
		from { transform: translateY(0); }
		to { transform: translateY(-100%); }
	}

	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes fade-out {
		from { opacity: 1; }
		to { opacity: 0; }
	}

	.animate-slide-down { animation: slide-down 300ms var(--ease-out-soft) forwards; }
	.animate-slide-up { animation: slide-up 300ms var(--ease-out-soft) forwards; }
	.animate-fade-in { animation: fade-in 300ms var(--ease-out-soft) forwards; }
	.animate-fade-out { animation: fade-out 300ms var(--ease-out-soft) forwards; }
</style>
