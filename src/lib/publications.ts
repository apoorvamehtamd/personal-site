export interface Entry {
	html: string;
	doi: string | null;
	featured: boolean;
	firstAuthor: boolean;
}

export function extractSection(md: string, heading: string): Entry[] {
	const startIdx = md.indexOf(`## ${heading}`);
	if (startIdx === -1) return [];
	const rest = md.slice(startIdx + heading.length + 3);
	const nextIdx = rest.indexOf("\n## ");
	const body = nextIdx === -1 ? rest : rest.slice(0, nextIdx);

	return body
		.split("\n")
		.map((l) => l.trim())
		.filter((l) => /^\d+\.\s/.test(l))
		.map((line) => {
			const text = line.replace(/^\d+\.\s*/, "");
			const featured = text.includes("🏠");
			const firstAuthor = text.includes("★");
			let clean = text.replace(/🏠\s*/, "").replace(/★\s*/, "").trim();

			const doiMatch = clean.match(/DOI:\s*(\S+?)\.?$/);
			const doi = doiMatch ? doiMatch[1] : null;
			if (doiMatch) clean = clean.slice(0, doiMatch.index).trim();

			const html = clean
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
				.replace(/\*(.+?)\*/g, "<em>$1</em>");

			return { html, doi, featured, firstAuthor };
		});
}
