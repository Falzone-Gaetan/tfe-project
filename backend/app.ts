import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import userRoutes from './routes/users';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import favoritesRoutes from './routes/favorites';

const express = require('express');
const app = express();
app.use(bodyParser.json());
dotenv.config();

const cors = require('cors');

const dbConfig = {
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || '3306', 10),
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'root',
	database: process.env.DB_DATABASE || 'kitchenmate',
};

(async () => {
	try {
		const connection = await mysql.createConnection(dbConfig);

		console.log('Connexion à la base de données réussie');

		// Middleware pour gérer les erreurs de type pour CORS

		app.use(
			cors({
				origin: 'http://localhost:3000',
			})
		);
		// Routes utilisateur
		app.use('/api/users', userRoutes(connection, bcrypt));
		app.use('/api/favorites', favoritesRoutes(connection));
		app.get('/', (req: Request, res: Response) => {
			res.send("Bienvenue sur l'API de gestion des utilisateurs !");
		});

		const port = process.env.PORT || 3001;

		app.listen(port, () => {
			console.log(`Le serveur écoute sur le port ${port}`);
		});
	} catch (error) {
		console.error(
			'Erreur lors de la création de la connexion à la base de données :',
			error
		);
		process.exit(1); // Arrêter l'application en cas d'échec de la connexion
	}
})();
