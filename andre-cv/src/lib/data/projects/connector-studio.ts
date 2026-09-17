import type { Project } from '$lib/types/project';

export const connectorStudio: Project = {
	slug: 'connector-studio',
	title: 'Connector Studio API',
	headline: 'Making telecom connector management accessible beyond expert users.',
	subtitle: 'Product / UX/UI Designer · Intraway',
	period: '2022 — 2023',
	description:
		'Designed a connector-management experience that simplified complex telecom workflows while working within existing backend constraints.',
	tags: ['UX Research', 'Enterprise UX', 'Design Systems', 'User Testing', 'SaaS'],
	thumbnail: '/projects/connector-studio/hero.png',
	meta: {
		role: 'Product / UX/UI Designer',
		company: 'Intraway',
		product: 'Symphonica',
		period: '2022 — 2023',
		capabilities: ['UX Research', 'Enterprise UX', 'Design Systems', 'User Testing', 'SaaS']
	},
	context:
		'Connector Studio was created to simplify the process of building and managing telecom API connectors for experienced users while making the workflow more approachable to people with less telecom and backend expertise.',
	challenge:
		'The existing Connector Tools experience required deep telecom and backend knowledge, and creating a new connector could take up to three months.',
	ownership: [
		'Benchmarking and product research',
		'User survey planning and analysis',
		'Persona and user-flow definition',
		'Low- and high-fidelity design',
		'Design-system adaptation',
		'Developer collaboration',
		'Usability and behavioral validation'
	],
	constraints: [
		'The existing backend could not be substantially changed.',
		'The experience needed to stay recognizably aligned with Symphonica.',
		'Technical flexibility had to remain available while reducing the knowledge required to use the product.'
	],
	evidence: [
		'Benchmarked products including Zapier and Make.',
		'86 people were contacted for the research survey and 64 participated.',
		'Respondents included backend developers, implementation engineers, sales and support roles, and clients.',
		'Hotjar was used to understand which options users selected most often and inform prioritization.'
	],
	decisions: [
		{
			title: 'Simplify without rewriting the backend',
			description:
				'The interaction model was reorganized around clearer steps and actions while preserving existing technical constraints.',
			rationale:
				'The product needed a substantially clearer experience without relying on a backend rewrite.'
		},
		{
			title: 'Use familiar patterns for connector management',
			description:
				'Connector actions such as test, edit and delete were organized into clear, predictable management patterns.',
			rationale:
				'Familiar interaction patterns reduced the learning burden for users entering a highly technical domain.'
		},
		{
			title: 'Adapt the visual system instead of starting over',
			description:
				'The Symphonica visual language was adapted into a Bootstrap 5-based design system.',
			rationale:
				'This preserved brand familiarity while making the interface more systematic and reusable.'
		}
	],
	validation: {
		title: 'Research and product validation',
		description:
			'86 people were invited to participate in the survey and 64 responded. Product behavior was also evaluated with Hotjar as the experience evolved.',
		metrics: ['86 contacted', '64 participants', '~6 minute connector setup/management flow']
	},
	impact: [
		'Users could create and manage connectors in around six minutes in the redesigned flow.',
		'Monthly Connector Tools usage increased from roughly 10–14 users to 27–35 users after the first two releases and internal demo.',
		'Created a clearer connector-management experience while preserving backend constraints.'
	],
	reflection: [
		'Use a more robust survey platform rather than an internal survey tool.',
		'Document developer calls and technical decisions more consistently.',
		'Broaden user testing beyond the initial participant mix.'
	],
	seo: {
		title: 'Connector Studio Case Study | Mariela Escalante',
		description:
			'Enterprise UX and product design for a telecom connector-management experience built around research, design systems and backend constraints.'
	},
	details: {
		overview:
			'Connector Studio simplified the process of building and managing telecom API connectors for both experienced and newer users.',
		challenge:
			'The existing tools required deep telecom and backend knowledge, and connector creation could take up to three months.',
		process: [
			'Benchmarked products such as Zapier and Make.',
			'Contacted 86 people for research and collected 64 responses across technical, support, sales and client roles.',
			'Created personas, user flows and low-fidelity concepts.',
			'Worked with developers to simplify workflows while preserving backend limitations.',
			'Adapted the Symphonica visual language into a Bootstrap 5-based design system.',
			'Used Hotjar to observe behavior and inform prioritization.'
		],
		results: [
			'Reduced connector creation and management to around six minutes.',
			'Increased monthly Connector Tools usage from roughly 10–14 to 27–35 users after the first releases and internal demo.',
			'Created clearer management patterns for testing, editing and deleting connectors.'
		],
		metrics: ['86 contacted · 64 participants', '~6 minute setup flow', '10–14 → 27–35 monthly users'],
		tools: ['Figma', 'UX Research', 'Hotjar', 'Bootstrap 5', 'Design Systems'],
		gallery: [
			'/projects/connector-studio/create-connector.png',
			'/projects/connector-studio/connectors-list.png',
			'/projects/connector-studio/persona.png',
			'/projects/connector-studio/workflow.png',
			'/projects/connector-studio/signup-flow.png'
		]
	}
};
