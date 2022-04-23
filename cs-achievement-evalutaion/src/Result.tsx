import * as React from 'react';
import { ClassInfo } from './Misc';
import './Result.css';

const achievementScores = require('./achievementScores.json');

interface Props {
	items: ClassInfo[];
}

export const Result = (props: Props) => {
	// 結果を保存する用の配列と初期化
	const result: number[] = new Array(8);
	result.fill(0);

	const registerdCourses = props.items;
	registerdCourses.forEach((registerdCourse) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			result[0] += achievementScores[classID].g1;
			result[1] += achievementScores[classID].g2;
			result[2] += achievementScores[classID].g3;
			result[3] += achievementScores[classID].g4;
			result[4] += achievementScores[classID].g5;
			result[5] += achievementScores[classID].p1;
			result[6] += achievementScores[classID].p2;
			result[7] += achievementScores[classID].p3;
		} else {
			alert(`${registerdCourse.className} is not found!`);
		}
	});

	return (
		<div className="Result">
			<h4>コンピテンシ</h4>
			{/* <p>緑色が超過しているポイント，赤色が不足しているポイント．</p> */}
			<table>
				<thead>
					<tr>
						<th colSpan={5}>汎用コンピテンス</th>
						<th colSpan={3}>専門コンピテンス</th>
					</tr>
					<tr>
						<th>1.知の活用力</th>
						<th>2.マネジメント能力</th>
						<th>3.コミュニケーション能力</th>
						<th>4.チームワーク力</th>
						<th>5.国際性</th>
						<th>1.研究力</th>
						<th>2.専門知識</th>
						<th>3.倫理観</th>
					</tr>
				</thead>
				<tbody>
					{
						<tr>
							<td>{result[0]}</td>
							<td>{result[1]}</td>
							<td>{result[2]}</td>
							<td>{result[3]}</td>
							<td>{result[4]}</td>
							<td>{result[5]}</td>
							<td>{result[6]}</td>
							<td>{result[7]}</td>
						</tr>
					}
				</tbody>
			</table>
		</div>
	);
};
