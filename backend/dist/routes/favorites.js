"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favoritesRoutes = (connection) => {
    const router = express_1.default.Router();
    // Route pour ajouter une recette en favori pour un utilisateur
    router.post('/', async (req, res) => {
        try {
            const { userId, recipeId } = req.body;
            // Vérifier si l'utilisateur existe dans la base de données
            const [userRows] = await connection.execute('SELECT * FROM users WHERE id = ?', [userId]);
            const user = userRows[0];
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
            // Ajouter la recette en favori pour l'utilisateur
            await connection.execute('INSERT INTO favorites (user_id, recipe_id) VALUES (?, ?)', [userId, recipeId]);
            return res.status(201).json({ message: 'Recette ajoutée en favori' });
        }
        catch (error) {
            console.error("Erreur lors de l'ajout de la recette en favori :", error);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
    });
    // Route pour supprimer une recette des favoris d'un utilisateur
    router.delete('/:favoriteId', async (req, res) => {
        try {
            const favoriteId = req.params.favoriteId;
            // Vérifier si la recette en favori existe dans la base de données
            const [favoriteRows] = await connection.execute('SELECT * FROM favorites WHERE id = ?', [favoriteId]);
            const favorite = favoriteRows[0];
            if (!favorite) {
                return res
                    .status(404)
                    .json({ message: 'Recette en favori non trouvée' });
            }
            // Supprimer la recette des favoris
            await connection.execute('DELETE FROM favorites WHERE id = ?', [
                favoriteId,
            ]);
            return res.status(200).json({ message: 'Recette supprimée des favoris' });
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la recette des favoris :', error);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
    });
    return router;
};
exports.default = favoritesRoutes;
//# sourceMappingURL=favorites.js.map