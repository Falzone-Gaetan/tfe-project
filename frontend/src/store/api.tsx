// api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Créer une instance de l'API
export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spoonacular.com/recipes',
		prepareHeaders: (headers) => {
			headers.set('X-API-Key', '330ca52ffaa14f8aa2622d4f0eaacdaf');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getSimilarRecipes: builder.query({
			query: (recipeId) => `/${recipeId}/similar`,
		}),
		// Ajoutez d'autres endpoints
		getRandomRecipes: builder.query({
			query: () => '/random',
		}),
		getRecipesCategory: builder.query({
			query: (type) => `complexSearch/${type}`,
		}),
	}),
});

// Exporter les hooks d'API générés automatiquement
export const {
	useGetSimilarRecipesQuery,
	useGetRandomRecipesQuery,
	useGetRecipesCategoryQuery,
} = api;
