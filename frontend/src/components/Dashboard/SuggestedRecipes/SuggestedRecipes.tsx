import { FC } from 'react';
import {
	ContainerListSuggested,
	DescriptionRecipes,
	EllipsisRecipesBox,
	H2SubTitle,
	ImageRecipes,
	RecipesCard,
	Separator,
	TimesRecipes,
	TitleRecipes,
} from './style';
import { Icon } from '@mui/material';
import { AiOutlineDashboard } from 'react-icons/ai';

export const SuggestedRecipes: FC = () => {
	return (
		<>
			<H2SubTitle>Suggested Recipes for you</H2SubTitle>
			<ContainerListSuggested>
				<RecipesCard>
					<ImageRecipes src='https://picsum.photos/200' />
					<TitleRecipes>Chicken garlic</TitleRecipes>
					<EllipsisRecipesBox>
						<DescriptionRecipes>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
							hic, fugit a quasi ex ipsum nemo, cum doloribus dicta nam tempora
							doloremque odit reiciendis iure nesciunt porro. Laboriosam, facere
							illo?
						</DescriptionRecipes>
					</EllipsisRecipesBox>
					<Separator />
					<Icon>
						<AiOutlineDashboard />
					</Icon>
					<TimesRecipes>1hr</TimesRecipes>
				</RecipesCard>

				<RecipesCard>
					<ImageRecipes src='https://picsum.photos/200' />
					<TitleRecipes>Chicken garlic</TitleRecipes>
					<EllipsisRecipesBox>
						<DescriptionRecipes>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
							hic, fugit a quasi ex ipsum nemo, cum doloribus dicta nam tempora
							doloremque odit reiciendis iure nesciunt porro. Laboriosam, facere
							illo?
						</DescriptionRecipes>
					</EllipsisRecipesBox>
					<Separator />
					<Icon>
						<AiOutlineDashboard />
					</Icon>
					<TimesRecipes>1hr</TimesRecipes>
				</RecipesCard>

				<RecipesCard>
					<ImageRecipes src='https://picsum.photos/200' />
					<TitleRecipes>Chicken garlic</TitleRecipes>
					<EllipsisRecipesBox>
						<DescriptionRecipes>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
							hic, fugit a quasi ex ipsum nemo, cum doloribus dicta nam tempora
							doloremque odit reiciendis iure nesciunt porro. Laboriosam, facere
							illo?
						</DescriptionRecipes>
					</EllipsisRecipesBox>
					<Separator />
					<Icon>
						<AiOutlineDashboard />
					</Icon>
					<TimesRecipes>1hr</TimesRecipes>
				</RecipesCard>

				<RecipesCard>
					<ImageRecipes src='https://picsum.photos/200' />
					<TitleRecipes>Chicken garlic</TitleRecipes>
					<EllipsisRecipesBox>
						<DescriptionRecipes>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
							hic, fugit a quasi ex ipsum nemo, cum doloribus dicta nam tempora
							doloremque odit reiciendis iure nesciunt porro. Laboriosam, facere
							illo?
						</DescriptionRecipes>
					</EllipsisRecipesBox>
					<Separator />
					<Icon>
						<AiOutlineDashboard />
					</Icon>
					<TimesRecipes>1hr</TimesRecipes>
				</RecipesCard>
			</ContainerListSuggested>
		</>
	);
};
