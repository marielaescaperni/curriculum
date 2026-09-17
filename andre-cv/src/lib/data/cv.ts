import { profile } from './profile';
import { experience } from './experience';
import { capabilities } from './capabilities';
import { education } from './education';
import { awards } from './awards';
import { languages } from './languages';

// Shared source for the future /cv route and generated PDF.
// It references the same portfolio data instead of duplicating content.
export const cvData = {
	profile,
	experience,
	capabilities,
	education,
	awards,
	languages
};
