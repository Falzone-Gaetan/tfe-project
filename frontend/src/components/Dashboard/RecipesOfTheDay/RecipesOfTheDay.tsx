import React, { FC } from 'react';
import {
	ContainerBookmark,
	ContainerImage,
	LinkBookmark,
	ResultImage,
	TimesRecipes,
	TitleRecipes,
} from './style';
import { Box, Icon } from '@mui/material';
interface RecipesRandomProps {
	title: string;
	image: string;
	times: number;
}

export const RecipesOfTheDay: FC<RecipesRandomProps> = ({
	title,
	image,
	times,
}) => {
	return (
		<Box
			height='300px'
			display={'flex'}>
			<ContainerImage>
				<TitleRecipes>{title}</TitleRecipes>
				<ResultImage src={image}></ResultImage>
				<TimesRecipes>{times}</TimesRecipes>
			</ContainerImage>
			<ContainerBookmark>
				<Icon></Icon>
				<Box p={4}> You have 3 new recipes in your bookmark</Box>
				<LinkBookmark to='/myrecipes'>See Bookmark</LinkBookmark>
			</ContainerBookmark>
		</Box>
	);
};
