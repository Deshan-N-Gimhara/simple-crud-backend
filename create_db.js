const mysql = require('mysql2/promise');

async function createDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
    });
    await connection.query('CREATE DATABASE IF NOT EXISTS `crud_db`;');
    console.log('Database crud_db created or already exists.');
    await connection.end();
  } catch (error) {
    console.error('Error creating database:', error);
    process.exit(1);
  }
}

createDatabase();
