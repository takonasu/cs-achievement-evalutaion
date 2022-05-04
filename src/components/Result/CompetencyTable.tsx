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
import { Competency } from '../../type';

const achievementScores = require('../../data/achievementScores.json');

type Props = {
	registerdCourses: ClassInfo[];
	setCompetencySums: (elm: Competency) => void;
};

export const CompetencyTable: FC<Props> = ({ registerdCourses, setCompetencySums }) => {
	// 結果を保存する用の配列と初期化
	const competencySums: Competency = {
		知の活用力: 0,
		マネジメント能力: 0,
		コミュニケーション能力: 0,
		チームワーク力: 0,
		国際性: 0,
		研究力: 0,
		専門知識: 0,
		倫理観: 0,
		単位数: 0
	};

	registerdCourses.forEach((registerdCourse) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			competencySums['知の活用力'] += achievementScores[classID]['知の活用力'];
			competencySums['マネジメント能力'] += achievementScores[classID]['マネジメント能力'];
			competencySums['コミュニケーション能力'] += achievementScores[classID]['コミュニケーション能力'];
			competencySums['チームワーク力'] += achievementScores[classID]['チームワーク力'];
			competencySums['国際性'] += achievementScores[classID]['国際性'];
			competencySums['研究力'] += achievementScores[classID]['研究力'];
			competencySums['専門知識'] += achievementScores[classID]['専門知識'];
			competencySums['倫理観'] += achievementScores[classID]['倫理観'];
			competencySums['単位数'] += achievementScores[classID]['単位数'];
		} else {
			alert(`${registerdCourse.className} is not found!`);
		}
	});
	React.useMemo(() => setCompetencySums(competencySums), []);

	const viewDetail = registerdCourses.map((registerdCourse, index) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			return (
				<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
					<TableCell>{registerdCourse.className.replace(/"/g, '')} </TableCell>
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
					<TableCell align="center">{competencySums['知の活用力']}</TableCell>
					<TableCell align="center">{competencySums['マネジメント能力']}</TableCell>
					<TableCell align="center">{competencySums['コミュニケーション能力']}</TableCell>
					<TableCell align="center">{competencySums['チームワーク力']}</TableCell>
					<TableCell align="center">{competencySums['国際性']}</TableCell>
					<TableCell align="center">{competencySums['研究力']}</TableCell>
					<TableCell align="center">{competencySums['専門知識']}</TableCell>
					<TableCell align="center">{competencySums['倫理観']}</TableCell>
					<TableCell align="center">{competencySums['単位数']}</TableCell>
				</TableBody>
			</Table>
		</TableContainer>
	);
};
