import { MovieModel } from '../models/movieModel.js';
import { moviesService } from '../services/movieService.js';

export const createMovie = async (req, res) => {
    try {
        const movie = req.body;
        const newMovie = await MovieModel.createMovie(movie);
        return res.status(201).json(newMovie);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear la película' });
    }
}

export const getMovies = async (req, res) => {
    try {
        const {category,title,orderbyrelease,pagination} =req.query;
        moviesService.getMovies({category, title, orderbyrelease, offset: pagination ? (parseInt(pagination) - 1) * 10 : 0})
        .then(({movies, pages}) => {
            return res.status(200).json({ movies, pages });
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).json({ message: 'Error al obtener las películas' });
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener las películas' });
    }
}

export const getNewsMovies = async (req, res) => {
    try {
        const {pagination} =req.query;
        moviesService.getNewsMovies({ offset: pagination ? (parseInt(pagination) - 1) * 10 : 0 })
        .then(movies => {
            return res.status(200).json(movies);
        })
        .catch(() => {
            return res.status(500).json({ message: 'Error al obtener las películas' });
        });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al obtener las películas' });
    }
}

export const showMovie = async (req, res) => {
    const { id } = req.params;
    try {
    
        const movie = await moviesService.getMovieById(id , req.user.id);
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al obtener la película' });
    }
}