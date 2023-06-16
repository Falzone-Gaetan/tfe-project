import styled from 'styled-components';

export const ContainerListSuggested = styled.div`
	display: flex;
	justify-content: space-between;
	list-style-type: none;
	padding: 20px;
	gap: 20px 0px;
`;

export const RecipesCard = styled.div`
	height: 350px;
	width: calc(25% - 10px);
	margin-bottom: 20px;
`;
export const Separator = styled.div`
	height: 1px;
	background-color: gray;
	margin: 10px 0px;
`;
export const ImageRecipes = styled.img`
	width: 100%;
	height: 150px;
`;
export const TitleRecipes = styled.h2`
	font-weight: bold;
	font-size: xl;
`;
export const DescriptionRecipes = styled.span`
	font-weight: light;
`;
export const EllipsisRecipesBox = styled.div`
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
export const TimesRecipes = styled.span`
	font-weight: light;
`;
export const H2SubTitle = styled.h2`
	font-weight: bold;
	font-size: xxl;

	margin-bottom: 0;
	padding: 20px;
`;
