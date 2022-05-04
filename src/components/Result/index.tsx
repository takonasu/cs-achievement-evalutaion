import * as React from 'react';
import { ClassInfo } from '../../utils/Misc';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { CompetencyTable } from './CompetencyTable';
import { RequiredCompetency } from './RequiredCompetency';
import { Competency } from '../../type';

interface Props {
	items: ClassInfo[];
}

export const Result = (props: Props) => {
	const [competencySums, setCompetencySums] = useState<Competency>({
		知の活用力: 0,
		マネジメント能力: 0,
		コミュニケーション能力: 0,
		チームワーク力: 0,
		国際性: 0,
		研究力: 0,
		専門知識: 0,
		倫理観: 0,
		単位数: 0
	});
	return (
		<div className="Result">
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						コンピテンシ一覧
					</Typography>
					<CompetencyTable registerdCourses={props.items} setCompetencySums={(sums) => setCompetencySums(sums)} />
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						必要コンピテンシと過不足一覧
					</Typography>
					<RequiredCompetency registerdCourses={props.items} competencySums={competencySums!} />
				</CardContent>
			</Card>
		</div>
	);
};
