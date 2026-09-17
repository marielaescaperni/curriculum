import { cvCompetencyGroups, cvData } from '$lib/data/cv';
import type { RequestHandler } from './$types';

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 44;
const TOP = 798;
const BOTTOM = 44;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

function ascii(value = '') {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[’‘]/g, "'")
		.replace(/[“”]/g, '"')
		.replace(/[—–]/g, '-')
		.replace(/→/g, '->')
		.replace(/·/g, '|')
		.replace(/[^\x20-\x7E]/g, ' ');
}

function escapePdfText(value: string) {
	return ascii(value)
		.replace(/\\/g, '\\\\')
		.replace(/\(/g, '\\(')
		.replace(/\)/g, '\\)');
}

function charFactor(char: string) {
	if (char === ' ') return 0.28;
	if ('ilI.,:;!|'.includes(char)) return 0.24;
	if ('mwMW@%&'.includes(char)) return 0.78;
	if (/[A-Z]/.test(char)) return 0.62;
	if (/[0-9]/.test(char)) return 0.56;
	return 0.5;
}

function measureText(text: string, size: number, bold = false) {
	let factor = 0;

	for (const char of ascii(text)) {
		factor += charFactor(char);
	}

	return factor * size * (bold ? 1.05 : 1);
}

function wrapText(text: string, maxWidth: number, size: number, bold = false) {
	const words = ascii(text).split(/\s+/).filter(Boolean);
	const lines: string[] = [];
	let line = '';

	for (const word of words) {
		const candidate = line ? `${line} ${word}` : word;

		if (measureText(candidate, size, bold) <= maxWidth || !line) {
			line = candidate;
		} else {
			lines.push(line);
			line = word;
		}
	}

	if (line) lines.push(line);

	return lines;
}

function textCommand(
	text: string,
	x: number,
	y: number,
	size: number,
	font = 'F1',
	gray = 0.08
) {
	return `BT ${gray.toFixed(3)} g /${font} ${size} Tf 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${escapePdfText(text)}) Tj ET\n`;
}

function lineCommand(y: number, gray = 0.82) {
	return `${gray.toFixed(3)} G 0.6 w ${MARGIN_X} ${y.toFixed(2)} m ${(PAGE_WIDTH - MARGIN_X).toFixed(2)} ${y.toFixed(2)} l S\n`;
}

function buildPdf() {
	const pages: string[] = [];
	let commands = '';
	let y = TOP;

	const newPage = () => {
		if (commands) pages.push(commands);
		commands = '';
		y = TOP;
	};

	const ensureSpace = (height: number) => {
		if (y - height < BOTTOM) newPage();
	};

	const addWrappedText = (
		text: string,
		options: {
			size?: number;
			lineHeight?: number;
			after?: number;
			indent?: number;
			width?: number;
			bold?: boolean;
			gray?: number;
		} = {}
	) => {
		const size = options.size ?? 9.4;
		const lineHeight = options.lineHeight ?? size * 1.35;
		const indent = options.indent ?? 0;
		const bold = options.bold ?? false;
		const width = options.width ?? CONTENT_WIDTH - indent;
		const lines = wrapText(text, width, size, bold);

		ensureSpace(lines.length * lineHeight + (options.after ?? 0));

		for (const line of lines) {
			commands += textCommand(
				line,
				MARGIN_X + indent,
				y,
				size,
				bold ? 'F2' : 'F1',
				options.gray ?? 0.22
			);
			y -= lineHeight;
		}

		y -= options.after ?? 0;

		return lines.length;
	};

	const addHeading = (title: string) => {
		ensureSpace(34);
		commands += textCommand(title.toUpperCase(), MARGIN_X, y, 11, 'F2', 0.06);
		y -= 16;
		commands += lineCommand(y + 4, 0.87);
		y -= 10;
	};

	const estimateBulletHeight = (bullet: string) =>
		wrapText(bullet, CONTENT_WIDTH - 14, 9.15).length * 12 + 3;

	commands += textCommand(cvData.profile.name, MARGIN_X, y, 26, 'F2', 0.04);
	y -= 31;
	commands += textCommand(cvData.profile.cvRole, MARGIN_X, y, 13, 'F2', 0.18);
	y -= 20;

	addWrappedText(
		`${cvData.profile.email} | mariela-escalante.vercel.app | linkedin.com/in/mariela-escalante`,
		{ size: 9.5, lineHeight: 12, after: 9, gray: 0.3 }
	);

	commands += lineCommand(y, 0.78);
	y -= 21;

	addHeading('Professional Summary');
	addWrappedText(cvData.profile.professionalSummary, {
		size: 9.5,
		lineHeight: 13,
		after: 13
	});

	addHeading('Core Competencies');

	for (const group of cvCompetencyGroups) {
		addWrappedText(`${group.label}: ${group.items.join(', ')}`, {
			size: 9.05,
			lineHeight: 12,
			after: 5
		});
	}

	y -= 6;

	addHeading('Professional Experience');

	for (const item of cvData.experience) {
		const estimatedHeight =
			38 +
			item.cvBullets.reduce((total, bullet) => total + estimateBulletHeight(bullet), 0);

		ensureSpace(estimatedHeight);

		commands += textCommand(item.role, MARGIN_X, y, 11, 'F2', 0.04);

		const periodWidth = measureText(item.period, 9, true);
		commands += textCommand(
			item.period,
			PAGE_WIDTH - MARGIN_X - periodWidth,
			y,
			9,
			'F2',
			0.3
		);

		y -= 14;
		commands += textCommand(item.company, MARGIN_X, y, 9.5, 'F2', 0.16);
		y -= 16;

		for (const bullet of item.cvBullets) {
			const lines = wrapText(bullet, CONTENT_WIDTH - 14, 9.15);

			commands += textCommand('-', MARGIN_X + 2, y, 9.15, 'F1', 0.22);

			for (const line of lines) {
				commands += textCommand(line, MARGIN_X + 14, y, 9.15, 'F1', 0.22);
				y -= 12;
			}

			y -= 3;
		}

		y -= 7;
	}

	addHeading('Education, Recognition & Languages');

	for (const item of cvData.education) {
		addWrappedText(
			`${item.title}: ${item.institution} | ${item.period}`,
			{ size: 9.35, lineHeight: 12.5, after: 5 }
		);
	}

	for (const item of cvData.awards) {
		addWrappedText(`${item.title}: ${item.description}`, {
			size: 9.35,
			lineHeight: 12.5,
			after: 5
		});
	}

	addWrappedText(
		`Languages: ${cvData.languages
			.map((language) => `${language.name}: ${language.level}`)
			.join(' | ')}`,
		{ size: 9.35, lineHeight: 12.5 }
	);

	if (commands) pages.push(commands);

	const objects: Array<string | null> = [
		null,
		'<< /Type /Catalog /Pages 2 0 R >>',
		null,
		'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
		'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'
	];

	const kids: string[] = [];

	for (const content of pages) {
		const pageId = objects.length;
		const contentId = pageId + 1;

		kids.push(`${pageId} 0 R`);

		objects.push(
			`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`
		);

		objects.push(`<< /Length ${content.length} >>\nstream\n${content}endstream`);
	}

	objects[2] = `<< /Type /Pages /Count ${pages.length} /Kids [${kids.join(' ')}] >>`;

	let pdf = '%PDF-1.4\n%CVPDF\n';
	const offsets = [0];

	for (let index = 1; index < objects.length; index += 1) {
		offsets[index] = pdf.length;
		pdf += `${index} 0 obj\n${objects[index]}\nendobj\n`;
	}

	const xref = pdf.length;

	pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;

	for (let index = 1; index < objects.length; index += 1) {
		pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
	}

	pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

	return new TextEncoder().encode(pdf);
}

export const GET: RequestHandler = () => {
	const pdf = buildPdf();

	return new Response(pdf, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename="Mariela_Escalante_CV.pdf"',
			'Cache-Control': 'public, max-age=0, must-revalidate'
		}
	});
};
