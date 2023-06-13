import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	border: 1px solid #ccc;
	flex-grow: 1;
	max-width: 500px;
	border-radius: 5px;
	padding: 0 10px;
	margin-right: 20px;
`;

export const SearchInput = styled.input`
	border: none;
	outline: none;
	padding: 0 10px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
	font-size: 18px;
	color: #555;
`;
