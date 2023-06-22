'use client';

import MovieList from "./MovieList";
import { Movie } from "@prisma/client";
import useFavoriteMovieStore from "@/hooks/useFavoriteStore";
import { useEffect } from "react";

interface FavoriteListProps {
    favoriteList: Movie[]
}

const FavoriteList: React.FC<FavoriteListProps> = ({
    favoriteList
}) => {
    const { movies, initialize } = useFavoriteMovieStore();

    useEffect(() => {
        initialize(favoriteList);
    }, [initialize, favoriteList]);

    return (  
        <MovieList title="My List" movieList={ Array.from(movies.values()) } />
    );
}
 
export default FavoriteList;