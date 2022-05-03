import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Props {
	onSubmit: (file: Blob) => void;
}

export class FileSelect extends React.Component<Props> {
	private file: HTMLInputElement;

	handleShowReport = async () => {
		if (!this.file.files || !this.file.files[0]) {
			return;
		}
		this.props.onSubmit(this.file.files[0]);
	};

	render() {
		return (
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography variant="h6" component="div">
						CSVファイルを選択してください
					</Typography>
					<input type="file" className="file" ref={(file: HTMLInputElement) => (this.file = file)} accept="text/csv" />
					<button onClick={this.handleShowReport}>実行</button>
				</CardContent>
			</Card>
		);
	}
}
