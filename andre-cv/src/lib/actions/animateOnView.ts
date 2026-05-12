import type { Action } from 'svelte/action';

type AnimateOnViewOptions = {
	selector?: string;
	y?: number;
	delay?: number;
	duration?: number;
	threshold?: number;
	once?: boolean;
};

export const animateOnView: Action<HTMLElement, AnimateOnViewOptions> = (node, options = {}) => {
	const settings = {
		selector: '[data-reveal]',
		y: 18,
		delay: 80,
		duration: 850,
		threshold: 0.24,
		once: true,
		...options
	};

	let observer: IntersectionObserver | null = null;
	let hasAnimated = false;

	const getTargets = () => {
		const targets = Array.from(node.querySelectorAll<HTMLElement>(settings.selector));
		return targets.length ? targets : [node];
	};

	const setInitialState = () => {
		getTargets().forEach((target) => {
			target.style.opacity = '0';
			target.style.transform = `translateY(${settings.y}px)`;
			target.style.willChange = 'opacity, transform';
		});
	};

	const showWithoutMotion = () => {
		getTargets().forEach((target) => {
			target.style.opacity = '1';
			target.style.transform = 'translateY(0)';
			target.style.willChange = 'auto';
		});
	};

	const reveal = async () => {
		if (hasAnimated && settings.once) return;

		hasAnimated = true;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			showWithoutMotion();
			return;
		}

		const { animate, stagger } = await import('animejs');

		animate(getTargets(), {
			opacity: [0, 1],
			y: [settings.y, 0],
			duration: settings.duration,
			delay: stagger(settings.delay),
			ease: 'outExpo',
			onComplete: () => {
				getTargets().forEach((target) => {
					target.style.willChange = 'auto';
				});
			}
		});
	};

	setInitialState();

	observer = new IntersectionObserver(
		([entry]) => {
			if (!entry?.isIntersecting) return;

			reveal();

			if (settings.once) {
				observer?.disconnect();
			}
		},
		{
			threshold: settings.threshold
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer?.disconnect();
		}
	};
};