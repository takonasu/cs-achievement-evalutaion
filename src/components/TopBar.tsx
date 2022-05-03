import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type Props = {
	children: ReactNode;
};

export const TopBar: FC<Props> = ({ children }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div">
						{children}
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
