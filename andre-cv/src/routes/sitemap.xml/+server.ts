import { caseStudyProjects } from '$lib/data/projects';
import type { RequestHandler } from './$types';

const site = 'https://mariela-escalante.vercel.app';

export const GET: RequestHandler = () => {
	const urls = [
		{ loc: `${site}/`, priority: '1.0' },
		{ loc: `${site}/cv`, priority: '0.8' },
		...caseStudyProjects.map((project) => ({
			loc: `${site}/projects/${project.slug}`,
			priority: '0.9'
		}))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
