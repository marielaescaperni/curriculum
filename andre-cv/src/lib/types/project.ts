export type ProjectDetails = {
	overview: string;
	challenge: string;
	process: string[];
	results: string[];
	metrics: string[];
	tools: string[];
	gallery: string[];
};

export type Project = {
	slug: string;
	title: string;
	subtitle: string;
	period: string;
	description: string;
	tags: string[];
	thumbnail: string;
	details: ProjectDetails;
};

export type SecondaryProject = {
	slug: string;
	title: string;
	role: string;
	period: string;
	description: string;
	highlight: string;
	tags: string[];
	accent?: string;
};