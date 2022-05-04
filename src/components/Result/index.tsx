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
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						注意
					</Typography>
					<p>
						授業のコンピテンシの過不足のみ表示しています。このほかにTOEICやINFOSSによる達成度ポイントが追加されます。
						<br />
						他学位プログラムの方は、<a href="https://twitter.com/ITF_tako">@ITF_tako</a>
						までに修了に必須なコンピテンシを教えてください。対応します。
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
