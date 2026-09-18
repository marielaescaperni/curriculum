import { profile } from './profile';
import { experience } from './experience';
import { capabilities } from './capabilities';
import { education } from './education';
import { awards } from './awards';
import { languages } from './languages';

export const cvCompetencyGroups = [
	{
		label: 'Product & UX Design',
		items: [
			'End-to-End Product Design',
			...capabilities.productUx,
			'UX Research',
			'Wireframing',
			'Accessibility & Inclusive Design (WCAG)',
			'Design QA'
		]
	},
	{
		label: 'Methodologies & Analytics',
		items: [
			'Design Thinking',
			'User-Centered Design',
			'A/B Testing',
			'Heatmaps',
			'Behavioral Analytics',
			'Hotjar',
			'PostHog'
		]
	},
	{
		label: 'Design Systems & Collaboration',
		items: [
			'Design Systems',
			'Component Libraries',
			'Reusable UI Patterns',
			'Design Documentation',
			'Developer Handoff',
			'Cross-Functional Collaboration',
			'Stakeholder Communication'
		]
	},
	{
		label: 'Tools & Front-End',
		items: [
			'Figma',
			'Figma Make',
			'Cursor',
			'Gemini',
			'Claude',
			'Adobe XD',
			'Photoshop',
			'Illustrator',
			'SvelteKit',
			'Svelte 5',
			'TypeScript',
			'JavaScript',
			'HTML5',
			'CSS3',
			'Tailwind CSS',
			'Git',
			'GitHub',
			'Jira',
			'Notion',
			'Visual Studio Code'
		]
	}
] as const;

// One source of truth for the web CV and downloadable PDF.
export const cvData = {
	profile,
	experience,
	capabilities,
	education,
	awards,
	languages
};
