'use client';

import { SafeUser } from "@/types";
import useFavorite from "@/hooks/useFavorite";
import { IoAddCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

interface FavoriteButtonProps {
    movieId: string;
    currentUser?: SafeUser | null;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        movieId,
        currentUser
    })

    return ( 
        <div
            onClick={toggleFavorite}
            className="
                relative
                hover:opacity-80
                transition
                cursor-pointer
            "
        >
            {hasFavorited ?
                <IoCheckmarkCircleOutline size={30} /> :
                <IoAddCircleOutline size={30}/>
            }
        </div>
     );
}
 
export default FavoriteButton;