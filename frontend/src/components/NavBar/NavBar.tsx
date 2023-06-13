import React, { FC } from 'react';
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
	return (
		<Container>
			<NavigationList>
				<NavigationItem>Menu</NavigationItem>
				<NavigationItem>
					<NavigationLink to='/dashboard'>
						<NavigationIcon>
							<AiOutlineDashboard />
						</NavigationIcon>
						Dashboard
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink to='/myrecipes'>
						<NavigationIcon>
							<AiOutlineFileText />
						</NavigationIcon>
						My Recipes
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink to='/myaccount'>
						<NavigationIcon>
							<AiOutlineUser />
						</NavigationIcon>
						Account
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
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
