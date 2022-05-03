import * as React from 'react';
import { ClassInfo } from '../../utils/Misc';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CompetencyTable } from './CompetencyTable';
import { RequiredCompetency } from './RequiredCompetency';

interface Props {
	items: ClassInfo[];
}

export const Result = (props: Props) => {
	return (
		<div className="Result">
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						コンピテンシ一覧
					</Typography>
					<CompetencyTable registerdCourses={props.items} />
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						必要コンピテンシ一覧
					</Typography>
					<RequiredCompetency registerdCourses={props.items} />
				</CardContent>
			</Card>
		</div>
	);
};
