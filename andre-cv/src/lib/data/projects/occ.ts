import type { Project } from '$lib/types/project';

export const occ: Project = {
	slug: 'occ',
	title: 'Omnichannel Contact Center',
	headline: 'Designing a customer-service product across native Android and responsive web.',
	subtitle: 'UX/UI Designer · inConcert',
	period: '2020 — 2022',
	description:
		'Designed native Android and responsive web experiences for an omnichannel customer-service product, including research, chatbot and agent-assistance workflows.',
	tags: ['Native Mobile', 'Responsive Web', 'UX Research', 'AI-assisted UX', 'Enterprise UX'],
	meta: {
		role: 'UX/UI Designer',
		company: 'inConcert',
		product: 'Omnichannel Contact Center (OCC)',
		period: '2020 — 2022',
		capabilities: ['Native Mobile', 'Responsive Web', 'UX Research', 'AI-assisted UX', 'Enterprise UX']
	},
	context:
		'OCC was an omnichannel customer-service product available as both a native Android application and a responsive web experience.',
	challenge:
		'Adapt complex customer-service workflows to different devices and usage contexts without losing functionality or clarity.',
	designGoal: 'Keep the product consistent across platforms without forcing every workflow into the same interface.',
	ownership: [
		'User interviews',
		'Surveys',
		'Usability testing',
		'User flows',
		'Wireframes',
		'Prototypes',
		'Final interface design',
		'Product and engineering collaboration'
	],
	constraints: [
		'The Android and web products shared core functionality but were not identical experiences.',
		'The native Android application needed to follow OCC’s custom visual system and mobile usability principles.',
		'The responsive web application included landing-page creation and publishing capabilities that were not available in Android.'
	],
	evidence: [
		'User interviews, surveys and usability testing informed the product flows.',
		'Findings were translated into user flows, wireframes, prototypes and enterprise interfaces.',
		'The Android and web experiences were evaluated as related products with different platform needs rather than duplicated layouts.'
	],
	decisions: [
		{
			title: 'Design for platform context rather than mirror screens',
			description:
				'The Android and responsive web experiences shared core product functionality while adapting to their platform-specific capabilities.',
			rationale:
				'The products needed to feel related without forcing features or interaction patterns into contexts where they did not belong.'
		},
		{
			title: 'Keep web-only workflows where they belonged',
			description:
				'Landing-page creation and publishing remained part of the responsive web experience rather than being forced into the native Android application.',
			rationale:
				'Preserving platform-appropriate scope kept the mobile product focused while allowing the web experience to support broader creation workflows.'
		},
		{
			title: 'Make automated assistance understandable',
			description:
				'Chatbot and agent-assistance experiences were designed to support customer-service workflows for both agents and end users.',
			rationale:
				'Automated interactions needed to be clear enough that users understood how assistance fit into the service workflow.'
		}
	],
	solution: {
		title: 'One product, two platform contexts',
		description:
			'The resulting experience shared the same product language across native Android and responsive web while adapting workflows to what each platform needed to support.',
		highlights: [
			'Native Android experience designed around OCC’s visual system and mobile usability principles.',
			'Responsive web experience preserved the same core product while supporting web-only landing-page creation and publishing.',
			'Chatbot and agent-assistance workflows were integrated into the broader customer-service experience.'
		]
	},
	impact: [
		'Created a consistent product experience across native Android and responsive web contexts.',
		'Integrated research findings into enterprise customer-service workflows.',
		'Designed chatbot and agent-assistance experiences as part of the broader OCC product.'
	],
	reflection: [],
	seo: {
		title: 'OCC Product Design Case Study | Mariela Escalante',
		description:
			'Native Android and responsive web UX/UI design for an omnichannel customer-service product at inConcert.'
	},
	details: {
		overview:
			'UX/UI design for native Android and responsive web versions of the Omnichannel Contact Center product.',
		challenge:
			'Adapt complex customer-service workflows across mobile and web while preserving usability and appropriate platform behavior.',
		process: [
			'Conducted interviews, surveys and usability testing.',
			'Translated research into user flows, wireframes and prototypes.',
			'Designed the native Android experience using the OCC visual system and mobile usability principles.',
			'Designed the responsive web experience, including web-only landing-page creation and publishing capabilities.',
			'Designed chatbot and agent-assistance experiences.'
		],
		results: [
			'Delivered native Android and responsive web product experiences.',
			'Created platform-aware workflows instead of treating mobile and web as identical interfaces.',
			'Integrated automated support experiences into the product.'
		],
		metrics: [],
		tools: ['Figma', 'UX Research', 'Usability Testing', 'TypeScript', 'Visual Studio'],
		gallery: []
	}
};
