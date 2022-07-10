import Paper from '@mui/material/Paper';
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
	competencySums: Competency;
};

export const RequiredCompetency: FC<Props> = ({ competencySums }) => {
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

	return (
		<>
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
							<TableCell align="center">{evaluationCriteria['情報理工']['知の活用力']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['マネジメント能力']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['コミュニケーション能力']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['チームワーク力']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['国際性']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['研究力']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['専門知識']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['倫理観']}</TableCell>
							<TableCell align="center">{evaluationCriteria['情報理工']['単位数']}</TableCell>
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
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center">過不足</TableCell>
							{showResultTypography(competencySums['知の活用力'], evaluationCriteria['情報理工']['知の活用力'])}
							{showResultTypography(
								competencySums['マネジメント能力'],
								evaluationCriteria['情報理工']['マネジメント能力']
							)}
							{showResultTypography(
								competencySums['コミュニケーション能力'],
								evaluationCriteria['情報理工']['コミュニケーション能力']
							)}
							{showResultTypography(competencySums['チームワーク力'], evaluationCriteria['情報理工']['チームワーク力'])}
							{showResultTypography(competencySums['国際性'], evaluationCriteria['情報理工']['国際性'])}
							{showResultTypography(competencySums['研究力'], evaluationCriteria['情報理工']['研究力'])}
							{showResultTypography(competencySums['専門知識'], evaluationCriteria['情報理工']['専門知識'])}
							{showResultTypography(competencySums['倫理観'], evaluationCriteria['情報理工']['倫理観'])}
							{showResultTypography(competencySums['単位数'], evaluationCriteria['情報理工']['単位数'])}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
