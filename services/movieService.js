import { MovieModel } from "../models/movieModel.js";


export const moviesService = {
    async createMovie(movie) {
        return await MovieModel.createMovie(movie);
    },
    async getMovies(filter) {
        return await MovieModel.getAllMovies(filter)
    },

    async getNewsMovies(filter) {
        return await MovieModel.getAllMovies({ news : true, offset: filter.offset || 0 });
    },

    async getMovieById(idMovie,idUser) {
        await MovieModel.markAsviewed(idMovie,idUser);
        return await MovieModel.getMovieById(idMovie);

    }
}
