import { Movie } from "@prisma/client";
import { create } from "zustand";

export interface IFavoriteStore {
    movies: Map<string, Movie>;
    initialize: (movies: Movie[]) => void;
    addFavorite: (movieId: string, movie: Movie) => void;
    removeFavorite: (movieId: string) => void;
}

const useFavoriteStore = create<IFavoriteStore>((set) => {
    const movies = new Map<string, Movie>();

    return ({
        movies,
        initialize: (movieList: Movie[]) => {
            const newMovies = new Map<string, Movie>();
            movieList.map((movie) => newMovies.set(movie.id, movie));            

            return set({
                movies: new Map<string, Movie>(newMovies)
            })

        },
        addFavorite: (movieId: string, movie: Movie) => set({
            movies: new Map(movies.set(movieId, movie))
        }),
        removeFavorite: (movieId: string) => {
            movies.delete(movieId);
            return set({
                movies: new Map(movies)
            });
        }
    });
});

export default useFavoriteStore;