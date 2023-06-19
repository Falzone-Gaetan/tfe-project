import mysql from 'mysql2/promise';

const dbConfig = {
	host: process.env.DB_HOST || 'localhost',
	port: parseInt(process.env.DB_PORT || '3306', 10),
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'root',
	database: process.env.DB_DATABASE || 'kitchenmate',
};

const connection = mysql.createConnection(dbConfig);

export default connection;
