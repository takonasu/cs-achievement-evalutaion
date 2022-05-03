import { render } from '@testing-library/react';

export interface ClassInfo {
	classID: string;
	className: string;
}

function readFileAsText(file: Blob): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(reader.error);
		reader.onload = () => resolve((reader.result as string) || '');
		reader.readAsText(file);
	});
}

function mapCSVToArray(csv: string): ClassInfo[] {
	const arr = csv.split('\n').map((row) => row.split(','));
	const data = arr
		.map((row) => {
			const ID = row[2];
			const NAME = row[3];
			return {
				classID: ID,
				className: NAME
			};
		})
		.filter((i) => i.classID !== '"科目番号"' && i.classID);
	return data;
}

export { readFileAsText, mapCSVToArray };
