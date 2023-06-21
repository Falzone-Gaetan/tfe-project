import React, { FC } from 'react';
import { Container } from './style';
import { RecipesOfTheDay } from './RecipesOfTheDay/RecipesOfTheDay';
import { CategoryList } from './CategoryList/CategoryList';
import { SuggestedRecipes } from './SuggestedRecipes/SuggestedRecipes';

export const DiscoverRecipes: FC = () => {
	return (
		<Container>
			<RecipesOfTheDay />
			<CategoryList />
			<SuggestedRecipes />
		</Container>
	);
};
