// api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface Recipe {
	id: number;
	title: string;
	readyInMinutes: number;
	image: string;
	imageUrls: string[];
}

interface SimilarData {
	recipeId: number;
}

// Créer une instance de l'API
export const api = createApi({
	reducerPath: 'spoonacularApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spoonacular.com/recipes',
		prepareHeaders: (headers) => {
			headers.set('X-API-Key', '330ca52ffaa14f8aa2622d4f0eaacdaf');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getSimilarRecipes: builder.query<Recipe[], SimilarData>({
			query: ({ recipeId }) => `/${recipeId}/similar`,
		}),
		// Ajoutez d'autres endpoints
		getRandomRecipes: builder.query({
			query: () => '/random',
		}),
		getRecipesInformation: builder.query({
			query: (recipeId) => `${recipeId}/information`,
		}),
		getRecipesSummary: builder.query({
			query: (recipeId) => `${recipeId}/summary`,
		}),
	}),
});

// Exporter les hooks d'API générés automatiquement
export const {
	useGetSimilarRecipesQuery,
	useGetRandomRecipesQuery,
	useGetRecipesInformationQuery,
	useGetRecipesSummaryQuery,
} = api;
