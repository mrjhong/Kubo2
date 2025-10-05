import db from '../db/config/config.js';

export const UserModel = {
  getAllUsers: async () => {
    const [rows] = await db.query('SELECT id,username FROM users');
    return rows;
  },

  getUserById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
  getUserByUsername: async (username) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
  },

  createUser: async (user) => {
    const { name, password } = user;
    const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [name, password]);
    return { id: result.insertId, name };
  }
};

