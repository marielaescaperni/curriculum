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
	let destroyed = false;
	const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

	const getTargets = () => {
		const targets = Array.from(node.querySelectorAll<HTMLElement>(settings.selector));
		return targets.length ? targets : [node];
	};

	const showWithoutMotion = () => {
		getTargets().forEach((target) => {
			target.style.opacity = '1';
			target.style.transform = 'translateY(0)';
			target.style.willChange = 'auto';
		});
	};

	const setInitialState = () => {
		if (motionPreference.matches) return;
		getTargets().forEach((target) => {
			target.style.opacity = '0';
			target.style.transform = `translateY(${settings.y}px)`;
			target.style.willChange = 'opacity, transform';
		});
	};

	const reveal = async () => {
		if (hasAnimated && settings.once) return;
		hasAnimated = true;

		if (motionPreference.matches) {
			showWithoutMotion();
			return;
		}

		try {
			const { animate, stagger } = await import('animejs');
			if (destroyed || motionPreference.matches) {
				showWithoutMotion();
				return;
			}

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
		} catch {
			// Content must remain visible if the animation dependency fails to load.
			showWithoutMotion();
		}
	};

	const onMotionChange = () => {
		if (motionPreference.matches) {
			observer?.disconnect();
			showWithoutMotion();
		}
	};

	// Keep server-rendered content visible until the client can observe it.
	if (typeof IntersectionObserver === 'undefined' || motionPreference.matches) {
		showWithoutMotion();
	} else {
		setInitialState();
		observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return;
				void reveal();
				if (settings.once) observer?.disconnect();
			},
			{ threshold: settings.threshold }
		);
		observer.observe(node);
	}

	motionPreference.addEventListener('change', onMotionChange);

	return {
		destroy() {
			destroyed = true;
			observer?.disconnect();
			motionPreference.removeEventListener('change', onMotionChange);
			showWithoutMotion();
		}
	};
};
