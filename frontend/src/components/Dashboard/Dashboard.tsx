import React, { FC } from 'react';
import { Container } from './style';
import { RecipesOfTheDay } from './RecipesOfTheDay/RecipesOfTheDay';
import { CategoryList } from './CategoryList/CategoryList';
import { SuggestedRecipes } from './SuggestedRecipes/SuggestedRecipes';
import { useGetRecipesCategoryQuery } from '../../store/api';

export const Dashboard: FC = () => {
	const { data } = useGetRecipesCategoryQuery('main course');
	console.log('DEBUG', data);
	return (
		<Container>
			<RecipesOfTheDay />
			<CategoryList />
			<SuggestedRecipes />
		</Container>
	);
};
