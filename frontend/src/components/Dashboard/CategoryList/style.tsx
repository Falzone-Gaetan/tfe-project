import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
	padding: 20px;
`;
export const ContainerList = styled.ul`
	list-style-type: none;
	justify-content: space-between;
	display: flex;
	padding: 0;
	overflow: hidden;
`;
export const LinkItem = styled(Link)`
	display: inline-block;
	width: 100%;
	height: 100%;
	text-decoration: none;
	color: black;
`;
export const ListItem = styled.li`
	margin-top: 10px;
	margin-right: 25px;
	border: 1px solid;
	border-radius: 3px;
	border-color: gray;
	height: 150px;
	width: 150px;
	&:hover {
		background-color: green;
		border: none;
		margin-top: 0px;
		box-shadow: 5px 5px 5px black;
		color: #ffffff;
	}
	&:focus {
		background-color: green;
		color: #ffffff;
	}
`;
export const H2SubTitle = styled.h2`
	font-weight: bold;
	font-size: xxl;
	margin-top: 15px;
	margin-bottom: 0;
`;
