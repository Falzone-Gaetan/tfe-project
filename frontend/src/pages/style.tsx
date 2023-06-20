import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;

export const Sidebar = styled.div`
	width: 20%;
`;

export const MainContent = styled.div`
	width: 80%;
`;
export const ComponentContent = styled.div`
	padding: 36px;
`;

export const ContainerLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
`;

export const Title = styled.h1`
	font-size: 24px;
	margin-bottom: 20px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
`;

export const Label = styled.label`
	margin-bottom: 8px;
`;

export const Input = styled.input`
	height: 30px;
	margin-bottom: 16px;
	padding: 4px;
`;

export const Button = styled.button`
	height: 40px;
	background-color: #28a745;
	color: #fff;
	border: none;
	cursor: pointer;
`;

export const ErrorMessage = styled.p`
	color: red;
	margin-top: 8px;
`;
