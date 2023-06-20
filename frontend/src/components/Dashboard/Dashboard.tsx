import React, { FC } from 'react';
import { Container } from './style';
import { RecipesOfTheDay } from './RecipesOfTheDay/RecipesOfTheDay';
import { CategoryList } from './CategoryList/CategoryList';
import { SuggestedRecipes } from './SuggestedRecipes/SuggestedRecipes';
import { useGetRecipesCategoryQuery } from '../../store/spoonacular';

export const Dashboard: FC = () => {
	const { data } = useGetRecipesCategoryQuery('');

	return (
		<Container>
			<RecipesOfTheDay />
			<CategoryList />
			<SuggestedRecipes />
		</Container>
	);
};
