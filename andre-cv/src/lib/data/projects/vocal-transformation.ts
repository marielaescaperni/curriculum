import type { Project } from '$lib/types/project';

export const vocalTransformation: Project = {
	slug: 'vocal-transformation',
	title: 'Vocal Transformation',
	headline: 'Improving a content-driven learning website through UX engineering and production-ready improvements.',
	subtitle: 'Web Development · UX Engineering',
	period: '2026',
	description:
		'Improved a live education and mentorship website across workshop discovery, content management, sign-up flows and contact experiences.',
	tags: ['SvelteKit', 'UX Engineering', 'CMS', 'Klaviyo', 'Web Accessibility'],
	thumbnail: '/projects/vocal-transformation/vt-home.png.png',
	heroMedia: '/projects/vocal-transformation/vt-home.png.png',
	meta: {
		role: 'Web Developer · UX Engineering',
		company: 'Vocal Transformation',
		period: '2026',
		capabilities: ['SvelteKit', 'Content Management', 'UX Engineering', 'Marketing Integrations']
	},
	context:
		'Vocal Transformation offers workshops, courses and mentorship through a content-driven website. Its team needed to maintain pages, edit workshop information and manage sign-up experiences without relying on developer intervention for every content change.',
	challenge:
		'Improve the reliability and usability of key journeys while making workshop information manageable and keeping the existing visual language consistent.',
	designGoal:
		'Make the website easier to maintain for the team and clearer to navigate for prospective students.',
	ownership: [
		'Front-end implementation',
		'Responsive interface refinements',
		'CMS integration',
		'Form and email integration',
		'Quality assurance'
	],
	constraints: [
		'Changes needed to work within an existing SvelteKit and Strapi architecture.',
		'Workshop information had to be independently editable for each workshop.',
		'Existing content and the visual identity needed to remain intact.'
	],
	evidence: [
		'Reviewed workshop links and adjusted navigation so informational links led to the workshop details while booking actions went to checkout.',
		'Connected mentorship registration to the dedicated Klaviyo list.',
		'Resolved contact-form email delivery and improved content-editing controls.'
	],
	decisions: [
		{
			title: 'Separate exploring a workshop from booking it',
			description:
				'Updated workshop navigation so More Info opened the workshop page while the booking action continued to checkout.',
			rationale:
				'Visitors should be able to understand an offer before deciding to purchase.'
		},
		{
			title: 'Give editors control over workshop details',
			description:
				'Made the contact section editable on a per-workshop basis, including its content and call to action.',
			rationale:
				'Individual workshops have different communication needs, and routine changes should not require code changes.'
		},
		{
			title: 'Keep sign-up and support flows reliable',
			description:
				'Connected mentorship submissions to Klaviyo and corrected contact-form email delivery.',
			rationale:
				'Reliable handoffs are essential for prospective students and the team responding to inquiries.'
		}
	],
	solution: {
		title: 'Clearer workshop journeys and more flexible content',
		description:
			'Iterative improvements to the live website connected visitor-facing interactions with CMS editing and marketing workflows.',
		highlights: [
			'Workshop information and booking links now have distinct destinations.',
			'Per-workshop contact information and CTAs can be edited through the CMS.',
			'Mentorship registration connects with the intended email list.'
		],
		media: ['/projects/vocal-transformation/vt-membership.png.png']
	},
	evidenceMedia: ['/projects/vocal-transformation/vt-strapi-workshop.png.png'],
	impact: [
		'Delivered approved improvements across navigation, content management and form integrations.',
		'Reduced the need for developer involvement in routine workshop contact updates.',
		'Improved reliability of mentorship signup and contact workflows.'
	],
	reflection: [
		'Explore how clearer course discovery and checkout journeys could support future online-store improvements.'
	],
	seo: {
		title: 'Vocal Transformation Website Case Study | Mariela Escalante',
		description:
			'UX engineering and SvelteKit development for Vocal Transformation, including workshops, content management and marketing integrations.'
	},
	details: {
		overview:
			'Web experience improvements for Vocal Transformation workshops and mentorship.',
		challenge:
			'Improve core visitor journeys and give editors greater control over content without changing the existing website architecture.',
		process: [
			'Reviewed and clarified workshop link behavior.',
			'Implemented CMS-editable contact information and CTAs for individual workshops.',
			'Connected mentorship registrations to Klaviyo.',
			'Fixed the website contact form email delivery and refined media presentation.'
		],
		results: [
			'Completed approved website enhancements for the live experience.',
			'Made workshop contact content independently editable.',
			'Improved reliability of signup and inquiry flows.'
		],
		metrics: [],
		tools: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Strapi', 'Klaviyo', 'Vimeo'],
		gallery: ['/projects/vocal-transformation/vt-membership.png.png', '/projects/vocal-transformation/vt-strapi-workshop.png.png']
	}
};
