'use client';

import useFavorite from "@/hooks/useFavorite";
import { IoAddCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { useCurrentUserContext } from "@/hooks/useUserContext";

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId,
}) => {
    const currentUser = useCurrentUserContext();
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