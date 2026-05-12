import type { Action } from 'svelte/action';

type ScrambleOnViewOptions = {
	text?: string;
	chars?: string;
	duration?: number;
	delay?: number;
	threshold?: number;
	once?: boolean;
	from?: 'left' | 'right' | 'center' | 'random';
	cursor?: string | false;
};

export const scrambleOnView: Action<HTMLElement, ScrambleOnViewOptions> = (node, options = {}) => {
	const settings = {
		text: options.text ?? node.textContent?.trim() ?? '',
		chars: options.chars ?? 'lowercase',
		duration: options.duration ?? 1200,
		delay: options.delay ?? 200,
		threshold: options.threshold ?? 0.4,
		once: options.once ?? true,
		from: options.from ?? 'left',
		cursor: options.cursor ?? false
	};

	let observer: IntersectionObserver | null = null;
	let hasAnimated = false;

	const showFinalText = () => {
		node.textContent = settings.text;
		node.style.visibility = 'visible';
	};

	const runAnimation = async () => {
		if (hasAnimated && settings.once) return;

		hasAnimated = true;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			showFinalText();
			return;
		}

		const { animate } = await import('animejs');
		const { scrambleText } = await import('animejs/text');

		node.style.visibility = 'visible';

		animate(node, {
			innerHTML: scrambleText({
				text: settings.text,
				chars: settings.chars,
				from: settings.from,
				cursor: settings.cursor
			}),
			duration: settings.duration,
			delay: settings.delay,
			ease: 'outExpo'
		});
	};

	node.style.visibility = 'hidden';

	observer = new IntersectionObserver(
		([entry]) => {
			if (!entry?.isIntersecting) return;

			runAnimation();

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