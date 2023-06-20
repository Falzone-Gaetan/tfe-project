import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface RegistrationData {
	name: string;
	email: string;
	password: string;
}

interface RegistrationResponse {
	id: number;
	name: string;
	email: string;
	created_at: string;
	updated_at: string;
	message: string;
}
interface LoginData {
	name: string;
	password: string;
	email: string;
}

interface LoginResponse {
	status: number;
	message: string;
}

// Créez votre client RTK Query
export const api = createApi({
	reducerPath: 'loginApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
	// Définissez vos endpoints ici
	endpoints: (builder) => ({
		registerUser: builder.mutation<RegistrationResponse, RegistrationData>({
			query: (data) => ({
				url: 'users/register',
				method: 'POST',
				body: data,
			}),
		}),
		login: builder.mutation<LoginResponse, LoginData>({
			query: (credentials) => ({
				url: 'users/login',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
});

// Exportez les hooks RTK Query générés automatiquement
export const { useRegisterUserMutation, useLoginMutation } = api;
