import type { Project } from '$lib/types/project';

export const phreeli: Project = {
	slug: 'phreeli',
	title: 'Phreeli',
	headline: 'Designing and shipping accessible telecom experiences from product requirements to production.',
	subtitle: 'Product Design · UX Engineering · CX Dev',
	period: '2025 — 2026',
	description:
		'Designed and implemented accessible customer-facing telecom experiences while working across product requirements, UX, front-end delivery and design QA.',
	tags: ['Product Design', 'Accessibility', 'UX Engineering', 'SaaS', 'Design QA'],
	proof: {
		value: 'WCAG + NVDA',
		label: 'Accessibility validation'
	},
	thumbnail: '/projects/phreeli/hero.png',
	heroMedia: '/projects/phreeli/phreeli-1.png',
	meta: {
		role: 'Product Design · UX Engineering',
		company: 'CX Dev',
		product: 'Phreeli',
		period: '2025 — 2026',
		capabilities: ['Product Design', 'Accessibility', 'UX Engineering', 'SaaS', 'Design QA']
	},
	context:
		'Phreeli is a telecommunications product with customer-facing purchase, account and support experiences that needed to remain clear, responsive and accessible across complex telecom workflows.',
	challenge:
		'Translate telecom requirements and complex account flows into experiences that felt simple and trustworthy while meeting accessibility requirements and remaining realistic to implement.',
	designGoal:
		'Make complex telecom journeys feel clear and trustworthy while building accessibility into the product from design through implementation.',
	ownership: [
		'Product requirements and user flows',
		'UX/UI design',
		'Accessibility patterns',
		'Front-end implementation',
		'Design QA'
	],
	constraints: [
		'Complex telecom requirements had to remain understandable to customers.',
		'Accessibility requirements needed to be considered throughout design and implementation.',
		'Design decisions needed to map cleanly to production front-end behavior.'
	],
	evidence: [
		'Behavioral analysis using A/B testing, heatmaps, Hotjar and PostHog.',
		'Accessibility validation with a client-side QA specialist using NVDA.',
		'Keyboard navigation, focus states, ARIA, semantic structure and contrast were included in delivery.'
	],
	decisions: [
		{
			title: 'Treat accessibility as a delivery requirement',
			description:
				'Accessibility patterns were designed and implemented as part of the core purchase and support experiences rather than added at the end.',
			rationale:
				'Keeping accessibility inside the product workflow made design QA and implementation more consistent across states and interactions.'
		},
		{
			title: 'Bridge product decisions and implementation',
			description:
				'Design and front-end work were handled closely so responsive behavior, interaction states and reusable patterns stayed aligned.',
			rationale:
				'This reduced the gap between intended UX behavior and the experience ultimately shipped.'
		},
		{
			title: 'Use behavioral evidence to guide iteration',
			description:
				'A/B testing, heatmaps, Hotjar and PostHog were used to identify friction in navigation, information architecture and conversion-related flows.',
			rationale:
				'Behavioral data helped ground design iterations in observed user behavior instead of relying only on assumptions.'
		}
	],
	solution: {
		title: 'Accessible experiences, carried through to production',
		description:
			'The work connected product design, accessibility and front-end implementation so interaction details, responsive behavior and accessibility requirements remained aligned through delivery.',
		highlights: [
			'Purchase, account and support experiences designed around complex telecom requirements.',
			'Accessibility patterns implemented with keyboard, focus, ARIA, semantic and contrast considerations.',
			'Production UI built with SvelteKit, TypeScript and Tailwind CSS.'
		],
		media: ['/projects/phreeli/phreeli-2.png']
	},
	validation: {
		title: 'Accessibility validation in the delivery workflow',
		description:
			'Accessibility was reviewed with a client-side QA specialist with visual impairment using NVDA, alongside keyboard, focus, ARIA, semantic and contrast checks.',
		metrics: ['NVDA screen-reader review', 'Keyboard + focus validation', 'ARIA + semantic checks']
	},
	impact: [
		'Shipped production-ready purchase and support experiences.',
		'Embedded accessibility and design QA directly into product delivery.',
		'Connected UX decisions with production implementation using SvelteKit, TypeScript and Tailwind CSS.'
	],
	reflection: [],
	seo: {
		title: 'Phreeli Case Study | Mariela Escalante',
		description:
			'Product design, accessibility and UX engineering for customer-facing telecom experiences at Phreeli.'
	},
	details: {
		overview:
			'Product design and UX engineering for accessible customer-facing telecommunications experiences.',
		challenge:
			'Translate complex telecom requirements into clear, responsive and accessible experiences that could be shipped to production.',
		process: [
			'Defined and refined product requirements and user flows with product and engineering.',
			'Designed accessible purchase and support experiences.',
			'Implemented responsive UI with SvelteKit, TypeScript and Tailwind CSS.',
			'Validated accessibility with NVDA, keyboard navigation, focus states, ARIA, semantic structure and contrast.',
			'Used Hotjar, PostHog, A/B testing and heatmaps to identify friction and inform iterations.'
		],
		results: [
			'Shipped production-ready customer experiences.',
			'Integrated accessibility and design QA into the delivery workflow.',
			'Created reusable implementation patterns across flows.'
		],
		metrics: [],
		tools: ['Figma', 'SvelteKit', 'TypeScript', 'Tailwind CSS', 'NVDA', 'Hotjar', 'PostHog'],
		gallery: ['/projects/phreeli/phreeli-2.png']
	}
};
