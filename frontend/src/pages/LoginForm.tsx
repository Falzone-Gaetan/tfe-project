import React, { FC, useState } from 'react';
import {
	Button,
	ContainerLogin,
	ErrorMessage,
	Form,
	Input,
	Label,
	Title,
} from './style';
import { useNavigate } from 'react-router';
import { useLoginMutation, useRegisterUserMutation } from '../store/login';

export const LoginForm: FC = () => {
	const [name, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const [
		registerUser,
		{ isError: isRegisterError },
	] = useRegisterUserMutation();
	const [login, { isError: isLoginError }] = useLoginMutation();
	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await registerUser({ name, email, password }).unwrap();
			if (response.message === 'Utilisateur créé avec succès') {
				navigate('/Home');
				console.log(response);
			}
		} catch (error) {
			console.log(
				"Erreur lors de la requête d'inscription:",
				error || 'Erreur inconnue'
			);
		}
	};
	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await login({ name, email, password }).unwrap();
			if (response.message === 'Connexion réussie') {
				// Connexion réussie
				navigate('/Home');
				console.log(response);
			}
		} catch (error) {
			console.log(
				'Erreur lors de la requête de connexion:',
				error || 'Erreur inconnue'
			);
		}
	};

	return (
		<ContainerLogin>
			<Title>Connexion</Title>
			<Form onSubmit={handleLogin}>
				<Label>Nom d'utilisateur</Label>
				<Input
					type='text'
					value={name}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Label>Adresse e-mail</Label>
				<Input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Label>Mot de passe</Label>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{isLoginError && (
					<ErrorMessage>{errorMessage || 'Erreur de connexion'}</ErrorMessage>
				)}
				<Button type='submit'>Se connecter</Button>
			</Form>
			<Title>Inscription</Title>
			<Form onSubmit={handleRegister}>
				<Label>Nom d'utilisateur</Label>
				<Input
					type='text'
					value={name}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Label>Adresse e-mail</Label>
				<Input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Label>Mot de passe</Label>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{isRegisterError && (
					<ErrorMessage>{errorMessage || "Erreur d'inscription"}</ErrorMessage>
				)}
				<Button type='submit'>S'inscrire</Button>
			</Form>
		</ContainerLogin>
	);
};
