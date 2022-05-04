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
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Competency } from '../../type';

const evaluationCriteria = require('../../data/evaluationCriteria.json');

type Props = {
	registerdCourses: ClassInfo[];
	competencySums: Competency;
};

export const RequiredCompetency: FC<Props> = ({ registerdCourses, competencySums }) => {
	const [degree, setDegree] = React.useState(Object.keys(evaluationCriteria)[0]);

	return (
		<>
			<FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
				<InputLabel id="demo-simple-select-standard-label">学位プログラム</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={degree}
					onChange={(event) => setDegree(event.target.value)}
					label="学位プログラム"
				>
					{Object.keys(evaluationCriteria).map((degree) => {
						return (
							<MenuItem value={degree}>
								<em>{degree}</em>
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell align="center"></TableCell>
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
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center">必要コンピテンシ</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['知の活用力']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['マネジメント能力']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['コミュニケーション能力']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['チームワーク力']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['国際性']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['研究力']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['専門知識']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['倫理観']}</TableCell>
							<TableCell align="center">{evaluationCriteria[degree]['単位数']}</TableCell>
						</TableRow>
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center">授業取得コンピテンシ</TableCell>
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
