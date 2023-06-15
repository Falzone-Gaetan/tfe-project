import React, { FC } from 'react';
import {
	Container,
	ContainerList,
	H2SubTitle,
	LinkItem,
	ListItem,
} from './style';

export const CategoryList: FC = () => {
	return (
		<Container>
			<H2SubTitle>Categories</H2SubTitle>
			<ContainerList>
				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>
				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>
				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>
				<LinkItem to='/Myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>
				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>
				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>

				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>

				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>

				<LinkItem to='/myrecipes'>
					<ListItem>Snack</ListItem>
				</LinkItem>
			</ContainerList>
		</Container>
	);
};
