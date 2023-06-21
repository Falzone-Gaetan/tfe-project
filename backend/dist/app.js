"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./routes/users"));
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const favorites_1 = __importDefault(require("./routes/favorites"));
const express = require('express');
const app = express();
app.use(body_parser_1.default.json());
dotenv_1.default.config();
const cors = require('cors');
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'kitchenmate',
};
(async () => {
    try {
        const connection = await promise_1.default.createConnection(dbConfig);
        console.log('Connexion à la base de données réussie');
        // Middleware pour gérer les erreurs de type pour CORS
        app.use(cors({
            origin: 'http://localhost:3000',
        }));
        // Routes utilisateur
        app.use('/api/users', (0, users_1.default)(connection, bcrypt_1.default));
        app.use('/api/favorites', (0, favorites_1.default)(connection));
        app.get('/', (req, res) => {
            res.send("Bienvenue sur l'API de gestion des utilisateurs !");
        });
        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log(`Le serveur écoute sur le port ${port}`);
        });
    }
    catch (error) {
        console.error('Erreur lors de la création de la connexion à la base de données :', error);
        process.exit(1); // Arrêter l'application en cas d'échec de la connexion
    }
})();
//# sourceMappingURL=app.js.map