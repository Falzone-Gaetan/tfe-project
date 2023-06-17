import styled from 'styled-components';

export const ContainerListSuggested = styled.div`
	display: flex;
	justify-content: space-between;
	list-style-type: none;

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
`;
export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
`;

export const PaginationButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: transparent;
	color: #000;
	font-size: 16px;
	padding: 8px;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: #f0f0f0;
	}
`;
