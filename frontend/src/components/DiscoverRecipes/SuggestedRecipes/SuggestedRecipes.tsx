import React, { FC, useCallback, useEffect, useState } from 'react';
import {
	Container,
	ContainerListSuggested,
	DescriptionRecipes,
	EllipsisRecipesBox,
	H2SubTitle,
	ImageRecipes,
	PaginationButton,
	PaginationContainer,
	RecipesCard,
	Separator,
	TimesRecipes,
	TitleRecipes,
} from './style';
import { Icon } from '@mui/material';

import { AiOutlineDashboard } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
	useGetRecipesInformationQuery,
	useGetRecipesSummaryQuery,
	useGetSimilarRecipesQuery,
} from '../../../store/spoonacular';

export const SuggestedRecipes: FC = () => {
	const { data } = useGetSimilarRecipesQuery({ recipeId: 715538 });
	const [recipesId, setRecipesId] = useState(715538);
	const { data: information } = useGetRecipesInformationQuery(recipesId);
	const { data: summary } = useGetRecipesSummaryQuery(recipesId);
	const itemsPerPage = 4;
	const [currentPage, setCurrentPage] = useState(1);
	if (!data) {
		return null;
	}
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handleClickPrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleClickNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedData = data.slice(startIndex, endIndex);
	console.log(paginatedData);

	return (
		<>
			<Container>
				<H2SubTitle>Suggested Recipes for you</H2SubTitle>
				<PaginationContainer>
					<PaginationButton
						onClick={handleClickPrevious}
						disabled={currentPage === 1}
					>
						<MdChevronLeft />
					</PaginationButton>
					<PaginationButton
						onClick={handleClickNext}
						disabled={currentPage === totalPages}
					>
						<MdChevronRight />
					</PaginationButton>
				</PaginationContainer>
			</Container>
			<ContainerListSuggested>
				{paginatedData.map((recipes) => (
					<RecipesCard key={recipes.id}>
						<ImageRecipes src={recipes.image} />
						<TitleRecipes>{recipes.title}</TitleRecipes>
						<EllipsisRecipesBox>
							<DescriptionRecipes></DescriptionRecipes>
						</EllipsisRecipesBox>
						<Separator />
						<Icon>
							<AiOutlineDashboard />
						</Icon>
						<TimesRecipes>{recipes.readyInMinutes} min</TimesRecipes>
					</RecipesCard>
				))}
			</ContainerListSuggested>
		</>
	);
};
