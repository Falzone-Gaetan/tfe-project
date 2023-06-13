import React, { FC, useState } from 'react';
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

export const NavBar: FC = () => {
	const [activeItem, setActiveItem] = useState<null | string>(null);

	const handleItemClick = (item: string) => {
		setActiveItem(item);
	};
	return (
		<Container>
			<NavigationList>
				<NavigationItem>Menu</NavigationItem>
				<NavigationItem
					className={activeItem === 'dashboard' ? 'active' : ''}
					onClick={() => handleItemClick('dashboard')}>
					<NavigationLink to='/dashboard'>
						<NavigationIcon>
							<AiOutlineDashboard />
						</NavigationIcon>
						Dashboard
					</NavigationLink>
				</NavigationItem>
				<NavigationItem
					className={activeItem === 'myrecipes' ? 'active' : ''}
					onClick={() => handleItemClick('myrecipes')}>
					<NavigationLink to='/myrecipes'>
						<NavigationIcon>
							<AiOutlineFileText />
						</NavigationIcon>
						My Recipes
					</NavigationLink>
				</NavigationItem>
				<NavigationItem
					className={activeItem === 'myaccount' ? 'active' : ''}
					onClick={() => handleItemClick('myaccount')}>
					<NavigationLink to='/myaccount'>
						<NavigationIcon>
							<AiOutlineUser />
						</NavigationIcon>
						Account
					</NavigationLink>
				</NavigationItem>
				<NavigationItem
					className={activeItem === 'logout' ? 'active' : ''}
					onClick={() => handleItemClick('logout')}>
					<NavigationLink to='/logout'>
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
