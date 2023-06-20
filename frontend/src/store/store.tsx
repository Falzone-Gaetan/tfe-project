import { configureStore } from '@reduxjs/toolkit';
import { api as spoonacularApi } from './spoonacular';
import { api as loginApi } from './login'; // Importez votre nouvelle API de connexion

const store = configureStore({
	reducer: {
		[spoonacularApi.reducerPath]: spoonacularApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		spoonacularApi.middleware,
		loginApi.middleware,
	],
});

export default store;
