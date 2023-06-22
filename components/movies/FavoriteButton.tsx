'use client';

import useFavorite from "@/hooks/useFavorite";
import useFavoriteMovieStore from "@/hooks/useFavoriteStore";
import { IoAddCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId,
}) => {
    const { movies } = useFavoriteMovieStore();
    const { toggleFavorite } = useFavorite({
        movieId
    })

    return ( 
        <div
            onClick={toggleFavorite}
            className="
                relative
                transition
                cursor-pointer
                w-6
                h-6
                lg:w-10
                lg:h-10
                rounded-full
                flex
                justify-center
                items-center
                text-neutral-300
                hover:bg-opacity-10
                hover:bg-neutral-300
                hover:text-neutral-100
            "
        >
            {movies.has(movieId) ?
                <IoCheckmarkCircleOutline size={30} /> :
                <IoAddCircleOutline size={30}/>
            }
        </div>
     );
}
 
export default FavoriteButton;