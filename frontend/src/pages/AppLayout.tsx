import React, { useEffect, useState } from 'react';

import { NavBar, Header, Dashboard, Bookmark } from '../components';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ComponentContent, Container, MainContent, Sidebar } from './style';

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
				pageTitle = 'Dashboard';
		}

		setPageTitle(pageTitle);
		document.title = `KitchenMate - ${pageTitle}`;
	}, [location.pathname]);
	return (
		<Container>
			<Sidebar>
				{/* Contenu de la barre latérale */}
				<NavBar />
			</Sidebar>
			<MainContent>
				{/* Contenu principal */}
				<Header
					pageTitle={pageTitle}
					usersName='Gaetan'
				/>
				<ComponentContent>
					<Routes>
						<Route
							path='/'
							element={
								<Navigate
									to='/dashboard'
									replace
								/>
							}
						/>
						<Route
							path='/dashboard'
							element={<Dashboard />}
						/>
						<Route
							path='/myrecipes'
							element={<Bookmark />}
						/>
					</Routes>
				</ComponentContent>
			</MainContent>
		</Container>
	);
};

export default AppLayout;
