import React, { FC } from 'react';
import { ContainerHeader, Title, TitleContainer, TitleUser } from './style';
import { SearchBar } from '../SearchBar';

interface HeaderProps {
	pageTitle: string;
	usersName: string;
}
export const Header: FC<HeaderProps> = ({ pageTitle, usersName }) => {
	return (
		<ContainerHeader>
			<TitleContainer>
				<TitleUser>Hello {usersName},</TitleUser>
				<Title>{pageTitle}</Title>
			</TitleContainer>
			<SearchBar />
		</ContainerHeader>
	);
};
