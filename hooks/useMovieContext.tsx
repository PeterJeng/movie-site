'use client';

import { Movie } from "@prisma/client";
import { createGenericContext } from "./useGenericContext";

interface MovieContextProps {
    children: React.ReactNode;
    movies: Movie[] | null
}

const [useMovieContext, MovieContextProvider] = createGenericContext<Movie[]>();

const MovieProvider: React.FC<MovieContextProps> = ({
    movies,
    children
}) => {
    return ( 
        <MovieContextProvider value={movies}>
            {children}
        </MovieContextProvider>
     );
}
 
export { MovieProvider, useMovieContext };

