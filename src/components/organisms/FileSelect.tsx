import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

import { readFileAsText, mapCSVToArray, ClassInfo } from '../../utils/Misc';

type Props = {
	setCSVdata: (items: ClassInfo[]) => void;
};

export const FileSelect: FC<Props> = ({ setCSVdata }) => {
	let file: HTMLInputElement;

	const analyzeCSVData = async () => {
		if (!file.files || !file.files[0]) {
			alert('CSVファイルを選択してください。');
			return;
		}
		try {
			const csv = await readFileAsText(file.files[0]);
			const items = mapCSVToArray(csv);
			setCSVdata(items);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						CSVファイルを選択してください
					</Typography>
					<input
						type="file"
						className="file"
						ref={(inputFile: HTMLInputElement) => (file = inputFile)}
						accept="text/csv"
					/>
					<button onClick={analyzeCSVData}>実行</button>
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography>
						TWINSの成績ページからDLできるCSVを選択してください。
						<br />
						情報はサーバに送信されませんが、気になる方は授業番号と以外のデータを消去してください。
						<br />
						また、成績情報は単位を修得済みかどうかの確認にのみ使用されます。
						<br />
						お問合せ：
						<a href="https://twitter.com/ITF_tako">@ITF_tako</a>
						<a href="https://twitter.com/uk_osy">@uk_osy</a>
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};
