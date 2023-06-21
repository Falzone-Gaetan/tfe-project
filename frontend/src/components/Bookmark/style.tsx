import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow-y: scroll;
`;
export const ContainerList = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
export const BoxRecipes = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	border-bottom: 2px solid #f7f8fa;
	padding: 20px 0px;
	align-items: center;
`;
export const RecipesTitle = styled.span`
	font-weight: bold;
	margin: 0;
`;
export const EllipsisRecipesBox = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
export const ImageRecipes = styled.img`
	height: 100%;
	width: 100%;
	max-width: 150px;
`;
export const RecipesTime = styled.h3`
	font-weight: bold;
	margin: 0;
`;
