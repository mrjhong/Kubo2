import db from '../db/config/config.js';

export const MovieModel = {
  getAllMovies: async (filter = {}) => {
    const { category, title, orderbyrelease, offset = 0, news } = filter;
    const limit = 10;

    let queryBase = 'FROM movies WHERE 1=1';
    const params = [];

    if (category) {
      queryBase += ' AND category_id = ?';
      params.push(category);
    }

    if (title) {
      queryBase += ' AND name LIKE ?';
      params.push(`%${title}%`);
    }

    if (news) {
      queryBase += ' AND release_date >= DATE_SUB(CURDATE(), INTERVAL 21 DAY)';
    }

    const [countRows] = await db.query(`SELECT COUNT(*) AS total ${queryBase}`, params);
    const total = countRows[0].total;
    const totalPages = Math.ceil(total / limit);

    let queryData = `SELECT * ${queryBase}`;
    if (orderbyrelease !== '0') {
      queryData += ' ORDER BY release_date ' + (orderbyrelease === '1' ? 'ASC' : 'DESC');
    }
    queryData += ' LIMIT ? OFFSET ?';
    const dataParams = [...params, limit, offset];

    const [rows] = await db.query(queryData, dataParams);

    return {
      movies: rows,
      pages: {
        total,
        totalPages,
        limit,
        offset,
        currentPage: Math.floor(offset / limit) + 1
      }
    };
  },

  getMovieById: async (id) => {
    const [rows] = await db.query('SELECT * FROM movies WHERE id = ?', [id]);
    return rows[0];
  },



  createMovie: async (movie) => {
    const { name, categoryId, releaseDate } = movie;
    const [result] = await db.query(
      'INSERT INTO movies (name, category_id, release_date) VALUES (?, ?, ?)',
      [name, categoryId, releaseDate]
    );
    return { id: result.insertId, name, categoryId, releaseDate };
  },

  markAsviewed: async (idUser, idMovie) => {
    const [result] = await db.query('INSERT INTO movies_view_user (id_movie, id_user) VALUES (?, ?)', [idUser, idMovie]);
    return { id: result.insertId, idUser, idMovie };
  },

  getViewedMoviesByUser: async (idUser) => {
    const [rows] = await db.query(
      `SELECT m.name FROM movies m
       JOIN movies_view_user mv ON m.id = mv.id_movie
       WHERE mv.id_user = ?`, [idUser]);
    return rows;
  }
};
