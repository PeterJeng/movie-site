'use client'

import { Movie } from "@prisma/client";
import MovieCard from "./MovieCard";
import { useCallback } from "react";
import { SafeUser } from "@/types";

interface MovieListProps {
    movieList?: Movie[] | null;
    title: string;
    currentUser?: SafeUser | null;
}

const MovieList: React.FC<MovieListProps> = ({
    movieList,
    title,
    currentUser
}) => {
    const right = useCallback((index: number) => {
        return (index + 1) % 4 === 0
    }, []);
    
    const left = useCallback((index: number) => {
        return index % 4 === 0
    }, []);

    if (movieList?.length === 0) {
        return null;
    }

    return ( 
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <div
                    className="
                        text-white
                        text-md
                        md:text-xl
                        lg:text-2xl
                        font-semibold
                        mb-4
                    "
                >
                    {title}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {movieList?.map((movie, index) => (
                        <MovieCard 
                            right={right(index)} 
                            left={left(index)} 
                            key={movie.id} data={movie}
                            currentUser={currentUser}
                        />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default MovieList;