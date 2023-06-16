import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerList = styled.div`
	list-style-type: none;
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: black;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&:hover {
		background-color: #2dc46b;
		border: none;
		margin-top: 0px;
		box-shadow: 10px 10px 20px black;
		color: #ffffff;
		border-radius: 3px;
	}
	&:focus {
		background-color: #2dc46b;
		color: #ffffff;
	}
`;
export const ListItem = styled.div`
	border: 2px solid;
	border-radius: 3px;
	border-color: #f7f8fa;
	height: 150px;
	width: 150px;
	margin-top: 15px;
	&:hover {
		margin-top: 0px;
	}
`;
export const H2SubTitle = styled.h2`
	font-weight: bold;
	font-size: xxl;

	margin-bottom: 0;
	padding: 20px;
`;
export const CategoryIcon = styled.span`
	display: block;
	margin-left: 20px;
`;
export const CategoryTitle = styled.span`
	display: block;
	margin-left: 20px;
`;
