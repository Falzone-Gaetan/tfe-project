import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/users';
import dotenv from 'dotenv';
import mysql, { Connection } from 'mysql2/promise';
import bcrypt from 'bcrypt';

const app = express();
app.use(bodyParser.json());

dotenv.config();

const dbConfig = {
	host: process.env.DB_HOST || 'localhost',
	port: parseInt(process.env.DB_PORT || '3306', 10),
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || 'mydatabase',
};

(async () => {
	try {
		const connection = await mysql.createConnection(dbConfig);

		console.log('Connexion à la base de données réussie');

		// Middleware pour gérer les erreurs de type pour CORS
		app.use((req: Request, res: Response, next: NextFunction) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept'
			);
			next();
		});

		// Routes utilisateur
		app.use('/api/users', userRoutes(connection, bcrypt));

		app.get('/', (req: Request, res: Response) => {
			res.send("Bienvenue sur l'API de gestion des utilisateurs !");
		});

		const port = process.env.PORT || 3000;

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
