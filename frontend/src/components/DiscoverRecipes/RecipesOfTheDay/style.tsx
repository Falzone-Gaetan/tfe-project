import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 310px;
	gap: 30px;
`;
export const ContainerImage = styled.div`
	width: 100%;
	flex: 5;
	object-fit: cover;
	height: 100%;
	position: relative;
`;
export const ResultImage = styled.img`
	width: 100%;
	height: 100%;
`;
export const ContainerBookmark = styled.div`
	background-color: #e8f7ed;
	width: 100%;
	flex: 1;

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const LinkBookmark = styled(Link)`
	font-weight: bold;
	font-size: xxl;
	color: green;
	padding: 32px;
`;
export const TitleRecipes = styled.h2`
	font-weight: bold;
	font-size: xxl;
	position: absolute;
	left: 0;
	bottom: 80px;
	color: #ffff;
	padding-left: 40px;
`;
export const TimesRecipes = styled.span`
	font-weight: bold;
	font-size: xl;
	position: absolute;
	left: 0;
	bottom: 80px;
	color: #ffff;
	padding-left: 40px;
`;
