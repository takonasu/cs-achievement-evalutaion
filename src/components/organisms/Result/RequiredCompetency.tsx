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
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import * as React from 'react';

import evaluationCriteria from '../../../data/evaluationCriteria.json';
import { Competency } from '../../../type';

type Props = {
	competencyClassSums: Competency;
};

type CompetencySummary = {
	name: string;
	competency: Competency;
};

const calcCompetencySum = (competencyList: CompetencySummary[]): Competency => {
	const sum: Competency = {
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
	competencyList.forEach((elm) => {
		sum['知の活用力'] += elm.competency['知の活用力'];
		sum['マネジメント能力'] += elm.competency['マネジメント能力'];
		sum['コミュニケーション能力'] += elm.competency['コミュニケーション能力'];
		sum['チームワーク力'] += elm.competency['チームワーク力'];
		sum['国際性'] += elm.competency['国際性'];
		sum['研究力'] += elm.competency['研究力'];
		sum['専門知識'] += elm.competency['専門知識'];
		sum['倫理観'] += elm.competency['倫理観'];
		sum['単位数'] += elm.competency['単位数'];
	});
	return sum;
};

export const RequiredCompetency: FC<Props> = ({ competencyClassSums }) => {
	const [toeicPoint, setToeicPoint] = React.useState(0);
	// 誰に対しても通常固定で入るコンピテンシ
	const fixedCompetencyList: CompetencySummary[] = [
		{
			name: '授業取得コンピテンシ',
			competency: competencyClassSums
		},
		{
			name: '達成度自己点検レポート1（M1終了時）',
			competency: {
				知の活用力: 0,
				マネジメント能力: 20,
				コミュニケーション能力: 0,
				チームワーク力: 0,
				国際性: 0,
				研究力: 0,
				専門知識: 0,
				倫理観: 0,
				単位数: 0
			}
		},
		{
			name: '達成度自己点検レポート1（M2終了時）',
			competency: {
				知の活用力: 0,
				マネジメント能力: 20,
				コミュニケーション能力: 0,
				チームワーク力: 0,
				国際性: 0,
				研究力: 0,
				専門知識: 0,
				倫理観: 0,
				単位数: 0
			}
		},
		{
			name: 'INFOSS情報倫理',
			competency: {
				知の活用力: 0,
				マネジメント能力: 0,
				コミュニケーション能力: 0,
				チームワーク力: 0,
				国際性: 0,
				研究力: 0,
				専門知識: 0,
				倫理観: 50,
				単位数: 0
			}
		}
	];

	const competencySum = calcCompetencySum(fixedCompetencyList);

	const showResultTypography = (acquired: number, required: number) => {
		return acquired - required > 0 ? (
			<TableCell style={{ backgroundColor: 'rgba(46,160,67,0.35)' }} align="center">
				<Typography>{acquired - required}</Typography>
			</TableCell>
		) : (
			<TableCell style={{ backgroundColor: 'rgba(248,81,73,0.35)' }} align="center">
				<Typography>{acquired - required}</Typography>
			</TableCell>
		);
	};

	const finalInternationalityPoint = competencyClassSums['国際性'] + toeicPoint;
	return (
		<>
			<FormControl>
				<FormLabel id="demo-row-radio-buttons-group-label">TOEIC</FormLabel>
				<RadioGroup
					row
					aria-labelledby="demo-row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					// value={value}
					onChange={(elm) => {
						setToeicPoint(Number(elm.target.value));
					}}
					defaultValue="0"
				>
					<FormControlLabel value="0" control={<Radio />} label="470点未満" />
					<FormControlLabel value="40" control={<Radio />} label="470点以上600点未満" />
					<FormControlLabel value="60" control={<Radio />} label="600点以上730点未満" />
					<FormControlLabel value="80" control={<Radio />} label="730点以上860点未満" />
					<FormControlLabel value="100" control={<Radio />} label="860点以上" />
				</RadioGroup>
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
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								必要コンピテンシ
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['知の活用力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['マネジメント能力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['コミュニケーション能力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['チームワーク力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['国際性']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['研究力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['専門知識']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['倫理観']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{evaluationCriteria['情報理工']['単位数']}
							</TableCell>
						</TableRow>
						{fixedCompetencyList.map((elm, index) => {
							return (
								<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell align="center">{elm.name}</TableCell>
									<TableCell align="center">{elm.competency['知の活用力']}</TableCell>
									<TableCell align="center">{elm.competency['マネジメント能力']}</TableCell>
									<TableCell align="center">{elm.competency['コミュニケーション能力']}</TableCell>
									<TableCell align="center">{elm.competency['チームワーク力']}</TableCell>
									<TableCell align="center">{elm.competency['国際性']}</TableCell>
									<TableCell align="center">{elm.competency['研究力']}</TableCell>
									<TableCell align="center">{elm.competency['専門知識']}</TableCell>
									<TableCell align="center">{elm.competency['倫理観']}</TableCell>
									<TableCell align="center">{elm.competency['単位数']}</TableCell>
								</TableRow>
							);
						})}
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center">TOEIC</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">{toeicPoint}</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">0</TableCell>
							<TableCell align="center">0</TableCell>
						</TableRow>
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								合計
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['知の活用力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['マネジメント能力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['コミュニケーション能力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['チームワーク力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{finalInternationalityPoint}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['研究力']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['専門知識']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['倫理観']}
							</TableCell>
							<TableCell align="center" sx={{ fontWeight: 'bold' }}>
								{competencySum['単位数']}
							</TableCell>
						</TableRow>
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center">過不足</TableCell>
							{showResultTypography(competencyClassSums['知の活用力'], evaluationCriteria['情報理工']['知の活用力'])}
							{showResultTypography(
								competencyClassSums['マネジメント能力'],
								evaluationCriteria['情報理工']['マネジメント能力']
							)}
							{showResultTypography(
								competencyClassSums['コミュニケーション能力'],
								evaluationCriteria['情報理工']['コミュニケーション能力']
							)}
							{showResultTypography(
								competencyClassSums['チームワーク力'],
								evaluationCriteria['情報理工']['チームワーク力']
							)}
							{showResultTypography(finalInternationalityPoint, evaluationCriteria['情報理工']['国際性'])}
							{showResultTypography(competencyClassSums['研究力'], evaluationCriteria['情報理工']['研究力'])}
							{showResultTypography(competencyClassSums['専門知識'], evaluationCriteria['情報理工']['専門知識'])}
							{showResultTypography(competencyClassSums['倫理観'], evaluationCriteria['情報理工']['倫理観'])}
							{showResultTypography(competencyClassSums['単位数'], evaluationCriteria['情報理工']['単位数'])}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
