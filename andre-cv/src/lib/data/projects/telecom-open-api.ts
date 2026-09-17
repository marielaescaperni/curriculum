import type { Project } from '$lib/types/project';

export const telecomOpenApi: Project = {
	slug: 'telecom-open-api',
	title: 'Telecom Open API',
	headline: 'Turning complex telecom API workflows into a visual, no-code experience.',
	subtitle: 'Product / UX/UI Designer · Intraway',
	period: '2023',
	description:
		'Designed a visual connector-testing experience that translated complex API, JSON and telecom workflows into a guided product for nontechnical users.',
	tags: ['Enterprise UX', 'Product Design', 'No-code UX', 'User Flows', 'User Validation'],
	thumbnail: '/projects/telecom-open-api/hero.png',
	heroMedia: '/projects/telecom-open-api/final-product.png',
	meta: {
		role: 'Product / UX/UI Designer',
		company: 'Intraway',
		product: 'Symphonica',
		period: '2023',
		capabilities: ['Enterprise UX', 'Product Design', 'No-code UX', 'User Flows', 'User Validation']
	},
	context:
		'Telecom Open API was designed to make complex telecom connector testing accessible to people who did not necessarily have deep experience with APIs, JSON structures or telecom network systems.',
	challenge:
		'Telecom connector testing traditionally required technical knowledge of APIs, JSON and network systems. The goal was to create a visual experience that preserved the technical logic required for a connector to work while making the workflow understandable to less technical users.',
	designGoal: 'Expose the right amount of complexity at the right moment.',
	ownership: [
		'User flow design',
		'Interaction design',
		'Wireframing',
		'High-fidelity UI design',
		'Product UX decisions',
		'Stakeholder and engineering collaboration',
		'Workflow validation'
	],
	constraints: [
		'Existing technical and backend limitations needed to be preserved.',
		'Technical telecom information still needed to remain available.',
		'The product needed to be approachable without oversimplifying the underlying connector task.'
	],
	evidence: [
		'Mapped the connector-testing journey and identified where users were losing clarity.',
		'Worked directly with developers and stakeholders while iterating on the flow.',
		'Validated the final workflow through a cross-office challenge involving approximately 200 people.'
	],
	decisions: [
		{
			title: 'Replace raw technical interaction with a guided visual flow',
			description:
				'The experience progressively guided users through connector selection, required inputs, testing and returned results.',
			rationale:
				'The goal was not to remove technical complexity, but to expose the right amount of complexity at the right moment.'
		},
		{
			title: 'Make required inputs explicit',
			description:
				'The interface clearly identified what information users needed before they could run a connector test.',
			rationale:
				'Reducing ambiguity around inputs lowered the knowledge required to move through the workflow.'
		},
		{
			title: 'Design understandable system feedback',
			description:
				'Success, error and returned-response states were designed to make system behavior easier to interpret.',
			rationale:
				'Users needed to understand what the connector test had done without already being API experts.'
		}
	],
	solution: {
		title: 'The Final Product',
		description:
			'The final experience turns connector testing into a guided sequence while keeping the technical information users need visible and understandable.'
	},
	validation: {
		title: 'Cross-office validation challenge',
		description:
			'A nontechnical participant from the legal team successfully completed the connector-testing workflow in 2.5 minutes during a cross-office challenge involving approximately 200 people. The previous workflow typically required 20–30 minutes.',
		metrics: ['20–30 min → 2.5 min', 'Successful nontechnical completion', '~200 people in the challenge']
	},
	impact: [
		'Lowered the barrier to completing connector testing.',
		'Reduced successful completion time during validation from 20–30 minutes to 2.5 minutes for a nontechnical participant.',
		'Made a technical telecom workflow more understandable without removing necessary system information.'
	],
	reflection: [],
	seo: {
		title: 'Telecom Open API Case Study | Mariela Escalante',
		description:
			'How a complex telecom API and JSON workflow was redesigned as a visual no-code experience and validated with nontechnical users.'
	},
	details: {
		overview:
			'Telecom Open API translated complex telecom connector testing into a guided visual experience for users without deep API or network-system knowledge.',
		challenge:
			'Make connector testing understandable to less technical users while preserving the technical logic and constraints required by the product.',
		process: [
			'Mapped the existing connector-testing journey and identified points of confusion.',
			'Designed a guided connector selection and input flow.',
			'Created understandable success, error and returned-response states.',
			'Worked with engineering and stakeholders around existing technical constraints.',
			'Validated the final workflow in a cross-office challenge.'
		],
		results: [
			'A nontechnical legal-team participant completed the workflow successfully in 2.5 minutes.',
			'The previous workflow typically required 20–30 minutes.',
			'The redesigned interaction reduced the knowledge required to complete the task.'
		],
		metrics: ['20–30 min → 2.5 min', '~200-person cross-office challenge'],
		tools: ['Figma', 'Product Design', 'User Flows', 'Enterprise UX', 'User Validation'],
		gallery: [
			'/projects/telecom-open-api/final-product.png',
			'/projects/telecom-open-api/connector-selection.png',
			'/projects/telecom-open-api/form-flow.png',
			'/projects/telecom-open-api/success-state.png'
		]
	}
};
