export type ProjectDecision = {
	title: string;
	description: string;
	rationale: string;
};

export type ProjectValidation = {
	title: string;
	description: string;
	metrics: string[];
};

export type ProjectMeta = {
	role: string;
	company: string;
	product?: string;
	period: string;
	capabilities: string[];
};

export type ProjectSeo = {
	title: string;
	description: string;
};

// Compatibility fields keep the current portfolio UI working while the
// long-form case-study template is migrated to the richer data model.
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
	headline: string;

	// Current card/modal fields. These can be retired once every view uses
	// the structured case-study fields below.
	subtitle: string;
	period: string;
	description: string;
	tags: string[];
	thumbnail?: string;
	heroMedia?: string;
	details: ProjectDetails;

	meta: ProjectMeta;
	context: string;
	challenge: string;
	ownership: string[];
	constraints: string[];
	evidence: string[];
	decisions: ProjectDecision[];
	validation?: ProjectValidation;
	impact: string[];
	reflection: string[];
	seo: ProjectSeo;
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
