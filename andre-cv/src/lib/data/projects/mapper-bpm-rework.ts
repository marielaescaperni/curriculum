import type { Project } from '$lib/types/project';

export const mapperBpmRework: Project = {
	slug: 'mapper-bpm-rework',
	title: 'Mapper BPM Rework',
	headline: 'Making a technical BPM mapping workflow easier to use without removing its flexibility.',
	subtitle: 'UX/UI Designer · Intraway',
	period: '2023',
	description:
		'Reworked a complex BPM mapping interface to make it clearer and more approachable for users with limited programming experience.',
	tags: ['Enterprise UX', 'Complex Workflows', 'Usability', 'Information Hierarchy', 'Symphonica'],
	thumbnail: '/projects/mapper-bpm-rework/hero.png',
	heroMedia: '/projects/mapper-bpm-rework/final-product.png',
	meta: {
		role: 'UX/UI Designer',
		company: 'Intraway',
		product: 'Symphonica · Mapper BPM',
		period: '2023',
		capabilities: ['Enterprise UX', 'Interaction Design', 'Usability', 'Information Hierarchy', 'Complex Workflows']
	},
	context:
		'Mapper BPM is used to handle information from Service Orders issued by devices within a service. The existing interface had been developed years earlier and presented usability issues that made the tool difficult for inexperienced users.',
	challenge:
		'The workflow depended on JSON input, surfaced too much information at once without clear prioritization, and contained field and label layouts that did not always match the information users needed to enter.',
	designGoal:
		'Make the mapper understandable to users with limited programming experience while keeping the underlying technical workflow available to expert users.',
	ownership: [
		'Usability analysis',
		'Information hierarchy',
		'Interaction redesign',
		'Visual mode design',
		'Field and label improvements',
		'Developer collaboration',
		'Iteration over a two-month process'
	],
	constraints: [
		'The underlying workflow still relied on JSON and existing technical logic.',
		'The redesign needed to improve comprehension without removing expert-level access.',
		'The interface contained dense information and legacy field structures that needed to be reorganized rather than replaced wholesale.'
	],
	evidence: [
		'The existing interface only allowed data to be entered in JSON format, creating a barrier for inexperienced users.',
		'Information was poorly organized and required versus optional content was not clearly prioritized.',
		'Long labels and undersized fields caused layout and usability issues in the legacy interface.'
	],
	evidenceMedia: [
		'/projects/mapper-bpm-rework/text-mode.png',
		'/projects/mapper-bpm-rework/additional-cases.png'
	],
	decisions: [
		{
			title: 'Introduce a visual mode alongside JSON',
			description:
				'A switch allowed users to move from raw JSON to a visual representation generated from the JSON content in real time.',
			rationale:
				'This preserved the technical workflow while giving less experienced users a clearer way to understand and edit the same information.'
		},
		{
			title: 'Reorganize information by importance',
			description:
				'The interface was restructured so required and important information became easier to identify instead of presenting everything with equal visual weight.',
			rationale:
				'Improving hierarchy reduced the cognitive load created by the previous dense layout.'
		},
		{
			title: 'Add contextual visual guidance',
			description:
				'Tooltips and clearer field treatments were added to labels and inputs.',
			rationale:
				'Contextual help made technical fields easier to understand without permanently adding more explanatory content to an already dense interface.'
		}
	],
	solution: {
		title: 'A mapper that supports both visual and technical modes',
		description:
			'After a two-month iteration process with the development team, the mapper combined a clearer information hierarchy with a visual mode that translated JSON elements into labeled inputs while preserving the original technical mode.',
		highlights: [
			'Visual mode generated from the JSON structure in real time.',
			'Improved hierarchy made required and optional information easier to distinguish.',
			'Tooltips and field-level visual aids improved comprehension across dense technical screens.'
		],
		media: [
			'/projects/mapper-bpm-rework/visual-mode.png',
			'/projects/mapper-bpm-rework/final-product.png'
		]
	},
	impact: [
		'Added a visual editing mode to reduce the barrier created by JSON-only input.',
		'Improved information hierarchy and field usability across the mapper workflow.',
		'Preserved the existing technical workflow while making the interface more approachable for users with limited programming experience.'
	],
	reflection: [
		'Rework the flow further to reduce reliance on modals.',
		'Simplify screens so more information can be displayed clearly in less space.'
	],
	seo: {
		title: 'Mapper BPM Rework Case Study | Mariela Escalante',
		description:
			'Enterprise UX redesign of Symphonica Mapper BPM, adding a visual mode and clearer information hierarchy to a JSON-based technical workflow.'
	},
	details: {
		overview:
			'UX/UI rework of Symphonica Mapper BPM focused on usability for people with limited programming experience.',
		challenge:
			'Reduce the usability barriers created by JSON-only input, poor information hierarchy and legacy field layouts.',
		process: [
			'Analyzed usability issues in the existing mapper.',
			'Reorganized information hierarchy around required and optional content.',
			'Iterated with the development team over two months.',
			'Added a visual mode that translated JSON elements into labeled inputs in real time.',
			'Added tooltips and field-level visual aids.'
		],
		results: [
			'Introduced a visual mode while preserving JSON access.',
			'Improved comprehension through stronger information hierarchy.',
			'Improved field and label usability across the mapper interface.'
		],
		metrics: [],
		tools: ['Figma', 'Enterprise UX', 'Interaction Design', 'Information Architecture'],
		gallery: [
			'/projects/mapper-bpm-rework/visual-mode.png',
			'/projects/mapper-bpm-rework/final-product.png'
		]
	}
};
