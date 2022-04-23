import { render } from '@testing-library/react';
import * as React from 'react';
import './App.css';
import { FileSelect } from './FileSelect';
import { readFileAsText, mapCSVToArray, ClassInfo } from './Misc';
// import { mapArrayToWorkItem } from './WorkItem'
import { Result } from './Result';

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
				<header className="App-header">
					<h1 className="App-title">CS達成度評価チェッカー</h1>
				</header>
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
