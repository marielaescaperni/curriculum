import { error } from '@sveltejs/kit';
import { featuredProjects } from '$lib/data/projects';

export function load({ params }) {
	const project = featuredProjects.find((item) => item.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
