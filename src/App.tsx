import { render } from '@testing-library/react';
import * as React from 'react';
import './App.css';
import { FileSelect } from './components/FileSelect';
import { readFileAsText, mapCSVToArray, ClassInfo } from './utils/Misc';
// import { mapArrayToWorkItem } from './WorkItem'
import { Result } from './components/Result';
import { TopBar } from './components/TopBar';

class App extends React.Component {
	state = { screen: 'init', items: [] };

	handleSubmit = async (file: Blob) => {
		try {
			const csv = await readFileAsText(file);
			const items = mapCSVToArray(csv);
			this.setState({ screen: 'result', items });
		} catch (error) {
			alert(error);
		}
	};

	public render() {
		return (
			<div className="App">
				<TopBar>システム情報工学研究群 授業達成度評価チェッカー</TopBar>
				{this.state.screen === 'init' ? (
					<FileSelect onSubmit={this.handleSubmit} />
				) : (
					<Result items={this.state.items} />
				)}
			</div>
		);
	}
}
export default App;
