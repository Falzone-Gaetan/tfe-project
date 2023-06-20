import React, { FC, useEffect, useState } from 'react';
import {
	Container,
	NavigationIcon,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from './style';
import {
	AiOutlineDashboard,
	AiOutlineFileText,
	AiOutlineLogout,
	AiOutlineUser,
} from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

export const NavBar: FC = () => {
	const location = useLocation();
	const [activeItem, setActiveItem] = useState<null | string>(null);
	useEffect(() => {
		// Vérifier si l'emplacement actuel correspond à la page d'accueil
		if (location.pathname === '/Home/dashboard') {
			setActiveItem('dashboard'); // Définir l'élément actif sur le Dashboard
		}
	}, [location.pathname]);

	const handleItemClick = (item: string) => {
		setActiveItem(item);
	};
	return (
		<Container>
			<NavigationList>
				<NavigationItem>Menu</NavigationItem>
				<NavigationItem
					className={activeItem === 'dashboard' ? 'active' : ''}
					onClick={() => handleItemClick('dashboard')}
				>
					<NavigationLink
						to='/Home/dashboard'
						className={activeItem === 'dashboard' ? 'active' : ''}
					>
						<NavigationIcon>
							<AiOutlineDashboard />
						</NavigationIcon>
						Dashboard
					</NavigationLink>
				</NavigationItem>
				<NavigationItem
					className={activeItem === 'myrecipes' ? 'active' : ''}
					onClick={() => handleItemClick('myrecipes')}
				>
					<NavigationLink
						to='/Home/myrecipes'
						className={activeItem === 'myrecipes' ? 'active' : ''}
					>
						<NavigationIcon>
							<AiOutlineFileText />
						</NavigationIcon>
						My Recipes
					</NavigationLink>
				</NavigationItem>
				<NavigationItem
					className={activeItem === 'myaccount' ? 'active' : ''}
					onClick={() => handleItemClick('myaccount')}
				>
					<NavigationLink
						to='/Home/myaccount'
						className={activeItem === 'myaccount' ? 'active' : ''}
					>
						<NavigationIcon>
							<AiOutlineUser />
						</NavigationIcon>
						Account
					</NavigationLink>
				</NavigationItem>
				<NavigationItem
					className={activeItem === 'logout' ? 'active' : ''}
					onClick={() => handleItemClick('logout')}
				>
					<NavigationLink
						to='/logout'
						className={activeItem === 'logout' ? 'active' : ''}
					>
						<NavigationIcon>
							<AiOutlineLogout />
						</NavigationIcon>
						Log Out
					</NavigationLink>
				</NavigationItem>
			</NavigationList>
		</Container>
	);
};
