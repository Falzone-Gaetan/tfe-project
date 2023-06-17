import { FC, useState } from 'react';
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
import { useGetSimilarRecipesQuery } from '../../../store/api';

export const SuggestedRecipes: FC = () => {
	const { data } = useGetSimilarRecipesQuery(715538);

	console.log(data);
	const itemsPerPage = 4;
	const [currentPage, setCurrentPage] = useState(1);
	if (!data) {
		return null; // ou un indicateur de chargement, un message d'attente, etc.
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

	return (
		<>
			<Container>
				<H2SubTitle>Suggested Recipes for you</H2SubTitle>
				<PaginationContainer>
					<PaginationButton
						onClick={handleClickPrevious}
						disabled={currentPage === 1}>
						<MdChevronLeft />
					</PaginationButton>
					<PaginationButton
						onClick={handleClickNext}
						disabled={currentPage === totalPages}>
						<MdChevronRight />
					</PaginationButton>
				</PaginationContainer>
			</Container>
			<ContainerListSuggested>
				{paginatedData.map(
					(recipes: {
						sourceUrl: string | undefined;
						title: string;
						readyInMinutes: number;
						id: number;
					}) => {
						return (
							<RecipesCard key={recipes.id}>
								<ImageRecipes src={recipes.sourceUrl} />
								<TitleRecipes>{recipes.title}</TitleRecipes>
								<EllipsisRecipesBox>
									<DescriptionRecipes>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Commodi hic, fugit a quasi ex ipsum nemo, cum doloribus
										dicta nam tempora doloremque odit reiciendis iure nesciunt
										porro. Laboriosam, facere illo?
									</DescriptionRecipes>
								</EllipsisRecipesBox>
								<Separator />
								<Icon>
									<AiOutlineDashboard />
								</Icon>
								<TimesRecipes>{recipes.readyInMinutes} min</TimesRecipes>
							</RecipesCard>
						);
					}
				)}
			</ContainerListSuggested>
		</>
	);
};
