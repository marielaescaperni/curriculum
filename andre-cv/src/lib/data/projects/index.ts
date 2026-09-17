import { phreeli } from './phreeli';
import { telecomOpenApi } from './telecom-open-api';
import { occ } from './occ';
import { connectorStudio } from './connector-studio';
import { mapperBpmRework } from './mapper-bpm-rework';
import { secondaryProjects } from './secondary';

export const featuredProjects = [telecomOpenApi, phreeli, connectorStudio, occ];

// Full case studies include the four featured projects plus additional deep dives.
export const caseStudyProjects = [...featuredProjects, mapperBpmRework];

// Legacy export name used by the current dynamic route.
export const projects = caseStudyProjects;

export {
	phreeli,
	telecomOpenApi,
	occ,
	connectorStudio,
	mapperBpmRework,
	secondaryProjects
};
