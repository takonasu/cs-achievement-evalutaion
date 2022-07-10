import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react';
import * as React from 'react';

import achievementScores from '../../../data/achievementScores.json';
import { Competency } from '../../../type';
import { ClassInfo } from '../../../utils/Misc';

type Props = {
	registerdCourses: ClassInfo[];
	setCompetencySums: (elm: Competency) => void;
};

type achievementScoresKey = keyof typeof achievementScores;

export const CompetencyClassTable: FC<Props> = ({ registerdCourses, setCompetencySums }) => {
	// true: 取得済み単位のみ, false: 未取得単位を含む
	const [isOnlyGotTani, setIsOnlyGotTani] = React.useState(false);
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

	const isJsonProperty = (value: string): value is achievementScoresKey => {
		return Object.keys(achievementScores).includes(value);
	};

	registerdCourses.forEach((registerdCourse) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (
			!isOnlyGotTani ||
			(isOnlyGotTani && registerdCourse.classGrade !== '履修中' && registerdCourse.classGrade !== 'D')
		) {
			if (isJsonProperty(classID)) {
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
		}
	});

	React.useEffect(() => setCompetencySums(competencySums), [isOnlyGotTani]);

	const viewDetail = registerdCourses.map((registerdCourse, index) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (
			!isOnlyGotTani ||
			(isOnlyGotTani && registerdCourse.classGrade !== '履修中' && registerdCourse.classGrade !== 'D')
		) {
			if (isJsonProperty(classID)) {
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
		}
	});

	return (
		<>
			<FormControl>
				<FormLabel id="demo-row-radio-buttons-group-label">計算方法</FormLabel>
				<RadioGroup
					row
					aria-labelledby="demo-row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					// value={value}
					onChange={(elm) => {
						setIsOnlyGotTani(elm.target.value === 'true');
					}}
					defaultValue="false"
				>
					<FormControlLabel value="false" control={<Radio />} label="未取得単位を含む" />
					<FormControlLabel value="true" control={<Radio />} label="取得済み単位のみ" />
				</RadioGroup>
			</FormControl>

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
						<TableRow>
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
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
