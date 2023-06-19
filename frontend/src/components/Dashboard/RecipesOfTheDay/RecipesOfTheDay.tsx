import React, { FC } from 'react';
import {
	ContainerBookmark,
	ContainerImage,
	LinkBookmark,
	ResultImage,
	TimesRecipes,
	TitleRecipes,
	Container,
} from './style';
import { Box, Icon } from '@mui/material';
import { useGetRandomRecipesQuery } from '../../../store/api';

export const RecipesOfTheDay: FC = () => {
	const { data: random } = useGetRandomRecipesQuery('random');

	if (!random) {
		return null;
	}
	return (
		<Container>
			{random.recipes.map(
				(recipe: {
					title: string | undefined;
					image: string | undefined;
					readyInMinutes: number;
					id: number;
				}) => (
					<ContainerImage key={recipe.id}>
						<TitleRecipes>{recipe.title}</TitleRecipes>
						<ResultImage src={recipe.image}></ResultImage>
						<TimesRecipes>{recipe.readyInMinutes}</TimesRecipes>
					</ContainerImage>
				)
			)}
			<ContainerBookmark>
				<Icon></Icon>
				<Box p={4}> You have 3 new recipes in your bookmark</Box>
				<LinkBookmark to='/myrecipes'>See Bookmark</LinkBookmark>
			</ContainerBookmark>
		</Container>
	);
};
