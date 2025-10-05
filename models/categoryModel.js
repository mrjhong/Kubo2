import db from '../db/config/config.js';

export const CategoryModel = {
    getAllCategories: async () => {
        const [rows] = await db.query('SELECT * FROM categories');
        return rows;
    },
    getCategoryById: async (id) => {
        const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
        return rows[0];
    }
};