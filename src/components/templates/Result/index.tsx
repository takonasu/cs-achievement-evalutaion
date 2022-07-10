import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';

import { Competency } from '../../../type';
import { ClassInfo } from '../../../utils/Misc';
import { CompetencyClassTable } from '../../organisms/Result/CompetencyClassTable';
import { RequiredCompetency } from '../../organisms/Result/RequiredCompetency';

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
	console.log(competencySums);
	return (
		<div className="Result">
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						コンピテンシ一覧
					</Typography>
					<CompetencyClassTable registerdCourses={props.items} setCompetencySums={(sums) => setCompetencySums(sums)} />
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						必要コンピテンシと過不足一覧
					</Typography>
					<RequiredCompetency competencySums={competencySums} />
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
