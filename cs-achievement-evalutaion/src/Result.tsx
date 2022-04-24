import * as React from 'react';
import { ClassInfo } from './Misc';
import './Result.css';

const achievementScores = require('./achievementScores.json');

interface Props {
	items: ClassInfo[];
}

export const Result = (props: Props) => {
	// 結果を保存する用の配列と初期化
	const result: number[] = new Array(9);
	result.fill(0);

	const registerdCourses = props.items;
	registerdCourses.forEach((registerdCourse) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			result[0] += achievementScores[classID]['知の活用力'];
			result[1] += achievementScores[classID]['マネジメント能力'];
			result[2] += achievementScores[classID]['コミュニケーション能力'];
			result[3] += achievementScores[classID]['チームワーク力'];
			result[4] += achievementScores[classID]['国際性'];
			result[5] += achievementScores[classID]['研究力'];
			result[6] += achievementScores[classID]['専門知識'];
			result[7] += achievementScores[classID]['倫理観'];
			result[8] += achievementScores[classID]['単位数'];
		} else {
			alert(`${registerdCourse.className} is not found!`);
		}
	});

	const viewDetail = registerdCourses.map((registerdCourse) => {
		const classID = registerdCourse.classID.replace(/"/g, '');
		if (achievementScores[classID]) {
			return (
				<tr>
					<td>{registerdCourse.className} </td>
					<td>{achievementScores[classID]['知の活用力']}</td>
					<td>{achievementScores[classID]['マネジメント能力']}</td>
					<td>{achievementScores[classID]['コミュニケーション能力']}</td>
					<td>{achievementScores[classID]['チームワーク力']}</td>
					<td>{achievementScores[classID]['国際性']}</td>
					<td>{achievementScores[classID]['研究力']}</td>
					<td>{achievementScores[classID]['専門知識']}</td>
					<td>{achievementScores[classID]['倫理観']}</td>
					<td>{achievementScores[classID]['単位数']}</td>
				</tr>
			);
		} else {
			return <></>;
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
						<th>授業名</th>
						<th>1.知の活用力</th>
						<th>2.マネジメント能力</th>
						<th>3.コミュニケーション能力</th>
						<th>4.チームワーク力</th>
						<th>5.国際性</th>
						<th>1.研究力</th>
						<th>2.専門知識</th>
						<th>3.倫理観</th>
						<th>単位数</th>
					</tr>
				</thead>
				<tbody>
					{viewDetail}
					<tr>
						<td>合計</td>
						<td>{result[0]}</td>
						<td>{result[1]}</td>
						<td>{result[2]}</td>
						<td>{result[3]}</td>
						<td>{result[4]}</td>
						<td>{result[5]}</td>
						<td>{result[6]}</td>
						<td>{result[7]}</td>
						<td>{result[8]}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
