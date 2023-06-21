import React, { useEffect, useState } from 'react';

import { NavBar, Header, DiscoverRecipes, Bookmark } from '../components';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ComponentContent, Container, MainContent, Sidebar } from './style';

export const AppLayout = () => {
	const location = useLocation();
	const [pageTitle, setPageTitle] = useState('');

	useEffect(() => {
		// Mettre à jour le titre de la page en fonction de la route actuelle
		let pageTitle = '';
		switch (location.pathname) {
			case '/Home/discoverRecipes':
				pageTitle = 'Discover Recipes';
				break;
			case '/Home/myrecipes':
				pageTitle = 'My Recipes';
				break;
			case '/Home/myaccount':
				pageTitle = 'Account';
				break;
			default:
				pageTitle = 'Discover Recipes';
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
				<Header pageTitle={pageTitle} usersName='Gaetan' />
				<ComponentContent>
					<Routes>
						<Route
							path='/'
							element={<Navigate to='/Home/discoverRecipes' replace />}
						/>
						<Route path='/discoverRecipes' element={<DiscoverRecipes />} />
						<Route path='/myrecipes' element={<Bookmark />} />
					</Routes>
				</ComponentContent>
			</MainContent>
		</Container>
	);
};

export default AppLayout;
