import { phreeli } from './phreeli';
import { telecomOpenApi } from './telecom-open-api';
import { occ } from './occ';
import { connectorStudio } from './connector-studio';
import { secondaryProjects } from './secondary';

export const featuredProjects = [phreeli, telecomOpenApi, occ, connectorStudio];

// Legacy export name used by the current dynamic route.
export const projects = featuredProjects;

export { phreeli, telecomOpenApi, occ, connectorStudio, secondaryProjects };
