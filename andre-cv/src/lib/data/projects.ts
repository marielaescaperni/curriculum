import type { Project, SecondaryProject } from '$lib/types/project';

export const featuredProjects: Project[] = [
	{
		slug: 'phreeli',

		title: 'Phreeli',

		subtitle: 'Front-End Development · CX Dev',

		period: '2025 — Present',

		description:
			'Building the UI and part of the front-end logic for a privacy-first wireless service platform.',

		tags: ['SvelteKit', 'Tailwind', 'Front-End', 'Responsive UI'],

		thumbnail: '/projects/phreeli/hero.png',

		details: {
			overview:
				'Front-end development for a modern privacy-first telecommunications platform.',

			challenge:
				'Translate a complex telecommunications product into a clean and trustworthy user experience.',

			process: [
				'Implemented responsive UI components.',
				'Worked closely with UX/UI decisions and development logic.',
				'Maintained consistency across flows and reusable patterns.'
			],

			results: [
				'Contributed to the evolution of the live product.',
				'Implemented scalable and reusable front-end patterns.'
			],

			metrics: [],

			tools: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Git'],

			gallery: ['/projects/phreeli/phreeli-1.png', '/projects/phreeli/phreeli-2.png']
		}
	}
	,{
		slug: 'connector-studio',

		title: 'Connector Studio API',

		subtitle: 'UX/UI Design · Symphonica',

		period: '2022 — 2023',

		description:
			'Designed a no-code connector management experience focused on simplifying complex telecom workflows for new and existing users.',

		tags: ['UX Research', 'Enterprise UX', 'Design Systems', 'User Testing', 'SaaS'],

		thumbnail: '/projects/connector-studio/hero.png',

		details: {
			overview:
				'Connector Studio was created to simplify the process of building and managing telecom API connectors for both experienced and new users.',

			challenge:
				'The original connector tools were extremely complex, requiring deep telecom and backend knowledge. Creating connectors could take up to 3 months and onboarding new users was difficult.',

			process: [
				'Conducted UX benchmarking using products like Zapier and Make.',
				'Interviewed users and collected survey data from telecom engineers, support teams and clients.',
				'Created personas and low-fidelity user flows.',
				'Worked closely with developers to simplify workflows while preserving backend limitations.',
				'Migrated the visual language to a Bootstrap 5-based design system.'
			],

			results: [
				'Reduced connector creation and management time to around 6 minutes.',
				'Connector tool usage increased from 10–14 monthly users to 27–35 users after the first demo releases.',
				'Successfully reached a younger target audience.',
				'Enabled easier management using accordion/action-based workflows.'
			],

			metrics: ['6 minute setup flow', '2x+ monthly usage growth', '80 user surveys collected'],

			tools: ['Figma', 'UX Research', 'Hotjar', 'Bootstrap 5', 'Design Systems'],

			gallery: [
				'/projects/connector-studio/create-connector.png',
				'/projects/connector-studio/connectors-list.png',
				'/projects/connector-studio/persona.png',
				'/projects/connector-studio/workflow.png',
				'/projects/connector-studio/signup-flow.png'
			]
		}
	},

	{
		slug: 'telecom-open-api',

		title: 'Telecom Open API',

		subtitle: 'UX/UI Design · Symphonica',

		period: '2023',

		description:
			'Created a free pre-built connector testing experience that allowed users to try telecom network elements without needing a hired Symphonica instance.',

		tags: ['UX/UI Design', 'Enterprise UX', 'Telecom', 'User Flows', 'Product Design'],

		thumbnail: '/projects/telecom-open-api/hero.png',

		details: {
			overview:
				'Telecom Open API was designed as a free testing experience for pre-built back-end connectors, helping potential users explore telecom network element integrations before committing to a Symphonica instance.',

			challenge:
				'The team needed a way to let users test pre-built connectors while also tracking interest for marketing purposes. The experience had to feel accessible for users without deep prior knowledge of telecom software, while keeping the audience focused through corporate email validation.',

			process: [
				'Mapped the existing connector testing journey and identified where users were losing clarity.',
				'Designed a guided flow that helped users select a connector, configure inputs and understand expected outputs.',
				'Created states for success, error handling and email verification.',
				'Worked around technical constraints while keeping the experience simple enough for new users.',
				'Designed a landing and FAQ experience to explain the value of the tool before users started testing.'
			],

			results: [
				'Reduced connector testing workflows from around 12 minutes to 4.5 minutes.',
				'Created a clearer entry point for users to test pre-built telecom connectors.',
				'Added a corporate email validation flow to narrow the target audience.',
				'Improved the product’s ability to track interested users for future marketing and sales actions.'
			],

			metrics: ['12 min → 4.5 min workflow', 'Corporate email validation', 'Free connector testing flow'],

			tools: ['Figma', 'UX/UI Design', 'User Flows', 'Design Systems', 'Telecom UX'],

			gallery: [
				'/projects/telecom-open-api/final-product.png',
				'/projects/telecom-open-api/connector-selection.png',
				'/projects/telecom-open-api/form-flow.png',
				'/projects/telecom-open-api/success-state.png',
				'/projects/telecom-open-api/error-state.png',
				'/projects/telecom-open-api/email-template.png'
			]
		}
	},

	{
		slug: 'mapper-bpm-rework',

		title: 'Mapper BPM Rework',

		subtitle: 'UX/UI Design · Symphonica',

		period: '2023',

		description:
			'Reworked a complex BPM mapper interface to make it clearer, more usable and more approachable for users with limited programming experience.',

		tags: ['UX/UI Design', 'Enterprise UX', 'Complex Workflows', 'Usability', 'Design Systems'],

		thumbnail: '/projects/mapper-bpm-rework/hero.png',

		details: {
			overview:
				'Mapper BPM is a Symphonica tool used to handle service order information by mapping data inside a service. The rework focused on improving usability, reducing confusion and making the interface easier for non-technical users.',

			challenge:
				'The previous mapper interface had unclear fields, limited visual hierarchy and interactions that were difficult for users without programming experience. Users needed a more understandable way to create, edit and validate mapping logic.',

			process: [
				'Reviewed the existing mapper flow and identified confusing field names, unclear states and layout issues.',
				'Separated complex information into clearer sections to reduce cognitive load.',
				'Designed improved form fields, validation patterns and clearer helper states.',
				'Explored both visual and text-based modes to support different types of users.',
				'Worked with technical constraints to keep the experience compatible with the existing Symphonica environment.'
			],

			results: [
				'Simplified the mapper interface for users with limited programming experience.',
				'Improved clarity around field structure, characteristics and validation states.',
				'Added clearer visual and text-based ways to understand mapping information.',
				'Reduced unnecessary complexity in the interface while preserving technical flexibility.'
			],

			metrics: ['Clearer visual mode', 'Improved validation states', 'Reduced cognitive load'],

			tools: ['Figma', 'UX/UI Design', 'Enterprise UX', 'Design Systems', 'Complex Flows'],

			gallery: [
				'/projects/mapper-bpm-rework/current-interface.png',
				'/projects/mapper-bpm-rework/additional-cases.png',
				'/projects/mapper-bpm-rework/final-product.png',
				'/projects/mapper-bpm-rework/visual-mode.png',
				'/projects/mapper-bpm-rework/text-mode.png',
				'/projects/mapper-bpm-rework/characteristics-map.png'
			]
		}
	}
];

export const secondaryProjects: SecondaryProject[] = [
	{
		slug: 'intraway-website-rework',
		title: 'Intraway Website Rework',
		role: 'UX/UI Designer',
		period: '2023',
		description:
			'Restructured the website to focus on Intraway as a company and separate it from Symphonica as a product.',
		highlight:
			'Helped improve positioning, clarity and organic traffic through better structure, clearer product storytelling and SEO-focused content.',
		tags: ['Website', 'UX/UI', 'SEO', 'Information Architecture'],
		accent: 'var(--gradient-blue)'
	},

	{
		slug: 'partners-site-symphonica',
		title: 'Partners Site Symphonica',
		role: 'UX/UI Designer',
		period: '2023',
		description:
			'Designed a centralized documentation and resource platform for partners and stakeholders.',
		highlight:
			'Created a clearer way to organize training, sales, support and partner resources in one place, making information easier to find and maintain.',
		tags: ['UX/UI', 'Documentation', 'Portal', 'B2B'],
		accent: 'var(--gradient-purple)'
	},

	{
		slug: 'account-manager-login-flow',
		title: 'Account Manager Login Flow',
		role: 'UX/UI Designer',
		period: '2022',
		description:
			'Designed a full account creation flow that reduced dependency on manual support processes.',
		highlight:
			'Created registration, validation, email verification and account-ready states to support a smoother onboarding experience.',
		tags: ['Onboarding', 'UX Flow', 'Forms', 'Validation'],
		accent: 'var(--gradient-green)'
	},

	{
		slug: 'helpso-branding',
		title: 'Helpso Branding',
		role: 'UX/UI Designer · Graphic Designer',
		period: '2021',
		description:
			'Created the branding identity and visual system for a delivery application in Ecuador.',
		highlight:
			'Developed a playful visual language across app, website, vehicle branding, merchandise and marketing materials.',
		tags: ['Branding', 'Visual Identity', 'App Design', 'Marketing'],
		accent: 'var(--gradient-green)'
	},

	{
		slug: 'symphonica-website-rework',
		title: 'Symphonica Website Rework',
		role: 'UX/UI Designer',
		period: '2022',
		description:
			'Restructured Symphonica’s website to showcase the product and improve SEO positioning.',
		highlight:
			'Reorganized content to better communicate product value, use cases, customer success stories and conversion paths.',
		tags: ['Website', 'UX/UI', 'SEO', 'SaaS'],
		accent: 'var(--gradient-orange)'
	},

	{
		slug: 'dra-carla-barber',
		title: 'Dra. Carla Barber Website and Store',
		role: 'UX/UI Designer',
		period: '2020',
		description:
			'Designed a beauty and skincare website with e-commerce structure and a clean visual experience.',
		highlight:
			'Worked across website layout, product presentation, visual hierarchy and a soft beauty-focused browsing experience.',
		tags: ['Website', 'E-commerce', 'Beauty', 'UX/UI'],
		accent: 'var(--gradient-pink)'
	},

	{
		slug: 'dr-fernandez-blanco',
		title: 'Dr. Fernandez Blanco Website',
		role: 'UX/UI Designer',
		period: '2020',
		description:
			'Created a medical aesthetic website focused on explaining treatments and guiding users toward consultation.',
		highlight:
			'Designed a content-heavy experience with treatment information, trust-building sections and clear conversion paths.',
		tags: ['Website', 'Healthcare', 'UX/UI', 'Landing'],
		accent: 'var(--gradient-pink)'
	}
];

export const projects = featuredProjects;
