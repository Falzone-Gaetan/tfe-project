import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { NavBar, Header, Dashboard } from '../components';
import { Route, Routes, useLocation } from 'react-router-dom';

export const AppLayout = () => {
	const location = useLocation();
	const [pageTitle, setPageTitle] = useState('');

	useEffect(() => {
		// Mettre à jour le titre de la page en fonction de la route actuelle
		let pageTitle = '';
		switch (location.pathname) {
			case '/dashboard':
				pageTitle = 'Dashboard';
				break;
			case '/myrecipes':
				pageTitle = 'My Recipes';
				break;
			case '/myaccount':
				pageTitle = 'My Account';
				break;
			case '/logout':
				pageTitle = 'Log Out';
				break;
			default:
				pageTitle = 'Recipes';
		}

		setPageTitle(pageTitle);
		document.title = `My App - ${pageTitle}`;
	}, [location.pathname]);
	return (
		<Grid container>
			{/* Navigation latérale à gauche */}

			<Grid
				item
				xs={2}>
				<NavBar />
			</Grid>

			<Grid
				item
				xs={10}>
				<Grid
					container
					direction='column'>
					{/* Navigation supérieure */}
					<Grid item>
						{/* Contenu de la navigation supérieure */}
						<Header
							pageTitle={pageTitle}
							usersName='Gaetan'
						/>
					</Grid>
					{/* Composant principal au milieu */}
					<Grid item>
						<Routes>
							<Route
								path='/dashboard'
								element={<Dashboard />}
							/>
						</Routes>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AppLayout;
