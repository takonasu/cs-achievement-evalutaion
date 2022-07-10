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
	const [competencyClassSums, setCompetencyClassSums] = useState<Competency>({
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
					<CompetencyClassTable
						registerdCourses={props.items}
						setCompetencyClassSums={(sums) => setCompetencyClassSums(sums)}
					/>
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						必要コンピテンシと過不足一覧
					</Typography>
					<RequiredCompetency competencyClassSums={competencyClassSums} />
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						注意
					</Typography>
					<p>あくまでも目安としてお使いください。</p>
					<p>
						筆頭論文（査読有り論文誌，査読有り国際会議かつ発表，それ以外の論文もしくは発表） [600, 400, 200]
						<br />
						非筆頭共著論文（査読有り論文誌，査読有り国際会議かつ発表，それ以外の論文もしくは発表） [150,100,50] <br />
						特許 (Patent) 300*貢献率
						<br /> 研究室WG 最大300 <br />
						CSスペシャルワークショップ 最大500
						<br /> 学位プログラム外活動 最大300 <br />
						TA コマ数*4
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
