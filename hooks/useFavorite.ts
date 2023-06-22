import axios from "axios";
import { useCallback,  useState } from "react";
import { toast } from "react-hot-toast";
import { Movie } from "@prisma/client";
import { useCurrentUserContext } from "./useUserContext";
import useFavoriteStore from "./useFavoriteStore";
import { useMovieContext } from "./useMovieContext";


interface IUseFavorite {
    movieId: string;
}

const useFavorite = ({
    movieId
}: IUseFavorite ) => {
    const { movies, addFavorite, removeFavorite } = useFavoriteStore();
    const currentUser = useCurrentUserContext();
    const movieList = useMovieContext();

    const toggleFavorite = useCallback(async (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        event.stopPropagation();

        if (!currentUser) {
            return null;
        }

        try {
            let request;

            if (movies.has(movieId)) {
                await axios.delete(`/api/favorites/${movieId}`);
                removeFavorite(movieId);
            } else {
                await axios.post(`/api/favorites/${movieId}`);
                const favoriteMovie = movieList.find((movie) => movie.id === movieId);

                if (!favoriteMovie) {
                    throw new Error('Something went wrong');
                }

                addFavorite(movieId, favoriteMovie);
            }
        } catch (error) {
            toast.error('Something went wrong.');
        }
       
    }, [
        movies,
        currentUser,
        movieId,
        movieList,
        removeFavorite,
        addFavorite
    ]);

    return {
        toggleFavorite
    }
}

export default useFavorite;
