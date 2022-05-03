import * as React from 'react';
import { FC } from 'react';
import { ClassInfo } from '../../utils/Misc';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const achievementScores = require('../../data/achievementScores.json');

type Props = {
	registerdCourses: ClassInfo[];
};

export const CompetencyTable: FC<Props> = ({ registerdCourses }) => {
	// 結果を保存する用の配列と初期化
	const result: number[] = new Array(9);
	result.fill(0);

	registerdCourses.forEach((registerdCourse) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			result[0] += achievementScores[classID]['知の活用力'];
			result[1] += achievementScores[classID]['マネジメント能力'];
			result[2] += achievementScores[classID]['コミュニケーション能力'];
			result[3] += achievementScores[classID]['チームワーク力'];
			result[4] += achievementScores[classID]['国際性'];
			result[5] += achievementScores[classID]['研究力'];
			result[6] += achievementScores[classID]['専門知識'];
			result[7] += achievementScores[classID]['倫理観'];
			result[8] += achievementScores[classID]['単位数'];
		} else {
			alert(`${registerdCourse.className} is not found!`);
		}
	});

	const viewDetail = registerdCourses.map((registerdCourse, index) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			return (
				<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
					<TableCell>{registerdCourse.className} </TableCell>
					<TableCell align="center">{achievementScores[classID]['知の活用力']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['マネジメント能力']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['コミュニケーション能力']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['チームワーク力']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['国際性']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['研究力']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['専門知識']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['倫理観']}</TableCell>
					<TableCell align="center">{achievementScores[classID]['単位数']}</TableCell>
				</TableRow>
			);
		} else {
			return <></>;
		}
	});
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>授業名</TableCell>
						<TableCell align="center">知の活用力</TableCell>
						<TableCell align="center">マネジメント能力</TableCell>
						<TableCell align="center">コミュニケーション能力</TableCell>
						<TableCell align="center">チームワーク力</TableCell>
						<TableCell align="center">国際性</TableCell>
						<TableCell align="center">研究力</TableCell>
						<TableCell align="center">専門知識</TableCell>
						<TableCell align="center">倫理観</TableCell>
						<TableCell align="center">単位数</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{viewDetail}

					<TableCell>合計</TableCell>
					{result.map((elm) => (
						<TableCell align="center">
							<Typography>{elm}</Typography>
						</TableCell>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
