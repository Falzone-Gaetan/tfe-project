import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
	background-color: #f7f8fa;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100vh;
	border-right: solid;
	border-color: gray;
	border-right-width: 1px;
`;

export const NavigationList = styled.ul`
	list-style-type: none;
	justify-content: space-around;
	padding: 15px;
`;

export const NavigationItem = styled.li`
	padding-bottom: 25px;
	&.active {
		border-right: 2px solid green;
		color: green;
	}
`;

export const NavigationLink = styled(Link)`
	text-decoration: none;
	color: #333;
	font-weight: light;

	transition: color 0.3s;

	&:hover {
		color: green;
	}
	&:focus-within {
		color: green;
		font-weight: bold;
	}
`;
export const NavigationIcon = styled.span`
	margin-right: 10px;
`;
