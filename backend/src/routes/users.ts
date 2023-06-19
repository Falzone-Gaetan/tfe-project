import express from 'express';
import { Request, Response } from 'express';
import { Connection, RowDataPacket } from 'mysql2/promise';

const userRoutes = (connection: any, bcrypt: any) => {
	const router = express.Router();
	// Route pour récupérer tous les utilisateurs
	router.get('/', async (req: Request, res: Response) => {
		try {
			// Récupérer tous les utilisateurs depuis la base de données
			const [rows] = await connection.execute('SELECT * FROM users');
			const users = rows;

			// Retourner la liste des utilisateurs
			return res.status(200).json({ users });
		} catch (error) {
			console.error('Erreur lors de la récupération des utilisateurs :', error);
			return res.status(500).json({ message: 'Erreur serveur' });
		}
	});
	// Route de création d'un nouvel utilisateur
	router.post('/register', async (req: Request, res: Response) => {
		try {
			const { name, password, email } = req.body;
			const connection: Connection = req.app.locals.connection;

			// Vérifier si l'utilisateur existe déjà dans la base de données
			const [existingUser] = await connection.execute<RowDataPacket[]>(
				'SELECT * FROM users WHERE username = ?',
				[name]
			);
			if (existingUser.length > 0) {
				return res
					.status(409)
					.json({ message: "Nom d'utilisateur déjà utilisé" });
			}

			// Générer le hash du mot de passe
			const hashedPassword = await bcrypt.hash(password, 10);

			// Insérer l'utilisateur dans la base de données
			await connection.execute(
				'INSERT INTO users (name, password, email) VALUES (?, ?, ?)',
				[name, hashedPassword, email]
			);

			return res.status(201).json({ message: 'Utilisateur créé avec succès' });
		} catch (error) {
			console.error("Erreur lors de la création de l'utilisateur :", error);
			return res.status(500).json({ message: 'Erreur serveur' });
		}
	});

	// Route de connexion de l'utilisateur
	router.post('/login', async (req: Request, res: Response) => {
		try {
			const { username, password } = req.body;
			const connection: Connection = req.app.locals.connection;

			// Récupérer l'utilisateur depuis la base de données
			const [rows] = await connection.execute(
				'SELECT * FROM users WHERE name = ?',
				[username]
			);

			// Vérifier si l'utilisateur existe
			if (!rows) {
				return res
					.status(401)
					.json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
			}
			const user = rows[0];

			// Vérifier le mot de passe
			const isPasswordValid = await bcrypt.compare(password, user.password);
			if (!isPasswordValid) {
				return res
					.status(401)
					.json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
			}

			return res.status(200).json({ message: 'Connexion réussie' });
		} catch (error) {
			console.error("Erreur lors de la connexion de l'utilisateur :", error);
			return res.status(500).json({ message: 'Erreur serveur' });
		}
	});

	// Route pour récupérer les informations d'un utilisateur
	router.get('/:userId', async (req: Request, res: Response) => {
		try {
			const userId = req.params.userId;

			// Récupérer l'utilisateur depuis la base de données
			const [rows] = await connection.execute(
				'SELECT * FROM users WHERE id = ?',
				[userId]
			);
			const user = rows[0];

			// Vérifier si l'utilisateur existe
			if (!user) {
				return res.status(404).json({ message: 'Utilisateur non trouvé' });
			}

			// Retourner les informations de l'utilisateur
			return res.status(200).json({ user });
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des informations de l'utilisateur :",
				error
			);
			return res.status(500).json({ message: 'Erreur serveur' });
		}
	});
	// Route pour la modification du mot de passe de l'utilisateur
	router.put('/password', async (req: Request, res: Response) => {
		try {
			const { username, currentPassword, newPassword } = req.body;
			const connection: Connection = req.app.locals.connection;

			// Récupérer l'utilisateur depuis la base de données
			const [rows] = await connection.execute(
				'SELECT * FROM users WHERE name = ?',
				[username]
			);
			const user = rows[0];

			// Vérifier si l'utilisateur existe
			if (!user) {
				return res.status(404).json({ message: 'Utilisateur non trouvé' });
			}

			// Vérifier le mot de passe actuel
			const isCurrentPasswordValid = await bcrypt.compare(
				currentPassword,
				user.password
			);
			if (!isCurrentPasswordValid) {
				return res
					.status(401)
					.json({ message: 'Mot de passe actuel incorrect' });
			}

			// Générer le hash du nouveau mot de passe
			const hashedNewPassword = await bcrypt.hash(newPassword, 10);

			// Mettre à jour le mot de passe dans la base de données
			await connection.execute('UPDATE users SET password = ? WHERE name = ?', [
				hashedNewPassword,
				username,
			]);

			return res
				.status(200)
				.json({ message: 'Mot de passe modifié avec succès' });
		} catch (error) {
			console.error('Erreur lors de la modification du mot de passe :', error);
			return res.status(500).json({ message: 'Erreur serveur' });
		}
	});

	// Route pour la suppression de l'utilisateur
	router.delete('/:userId', async (req: Request, res: Response) => {
		try {
			const userId = req.params.userId;
			const connection: Connection = req.app.locals.connection;

			// Vérifier si l'utilisateur existe
			const [rows] = await connection.execute(
				'SELECT * FROM users WHERE id = ?',
				[userId]
			);
			const user = rows[0];
			if (!user) {
				return res.status(404).json({ message: 'Utilisateur non trouvé' });
			}

			// Supprimer l'utilisateur de la base de données
			await connection.execute('DELETE FROM users WHERE id = ?', [userId]);

			return res
				.status(200)
				.json({ message: 'Utilisateur supprimé avec succès' });
		} catch (error) {
			console.error("Erreur lors de la suppression de l'utilisateur :", error);
			return res.status(500).json({ message: 'Erreur serveur' });
		}
	});
	return router;
};

export default userRoutes;
