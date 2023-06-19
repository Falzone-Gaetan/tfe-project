import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
	background-color: #f7f8fa;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const NavigationList = styled.div`
	list-style-type: none;
	justify-content: space-around;
	margin-top: 40px;
	margin-left: 40px;
`;

export const NavigationItem = styled.div`
	&.active {
		border-right: 2px solid green;
	}
`;

export const NavigationLink = styled(Link)`
	display: inline-block;
	text-decoration: none;
	padding: 10px;
	color: #000;
	font-weight: light;
	width: 100%;
	&:hover {
		color: green;
	}

	&.active {
		color: green;
		font-weight: bold;
	}
`;
export const NavigationIcon = styled.span`
	margin-right: 10px;
`;
