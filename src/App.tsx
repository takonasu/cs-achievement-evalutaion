import React from 'react';

import { TopBar } from './components/molecules/TopBar';
import { FileSelect } from './components/organisms/FileSelect';
import { Result } from './components/templates/Result';
import { ClassInfo } from './utils/Misc';

import './App.css';

function App() {
	const [csvImported, setCsvImported] = React.useState(false);
	const [csvItems, setCsvItems] = React.useState<ClassInfo[]>([]);

	const handleSubmit = async (csvItems: ClassInfo[]) => {
		setCsvItems(csvItems);
		setCsvImported(true);
	};

	console.log(csvItems);

	return (
		<div className="App">
			<TopBar>情報理工学位P 達成度評価チェッカー</TopBar>
			{csvImported ? <Result items={csvItems} /> : <FileSelect setCSVdata={handleSubmit} />}
		</div>
	);
}

export default App;
