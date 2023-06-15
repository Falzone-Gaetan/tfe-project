import React, { FC } from 'react';
import { Container } from './style';
import { RecipesOfTheDay } from './RecipesOfTheDay/RecipesOfTheDay';
import { CategoryList } from './CategoryList/CategoryList';

export const Dashboard: FC = () => {
	return (
		<Container>
			<RecipesOfTheDay
				title={'Chicken'}
				image={'https://picsum.photos/200'}
				times={25}
			/>
			<CategoryList />
		</Container>
	);
};
