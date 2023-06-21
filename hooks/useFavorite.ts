import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/types";


interface IUseFavorite {
    movieId: string;
    currentUser?: SafeUser | null;
}

const useFavorite = ({
    movieId,
    currentUser
}: IUseFavorite ) => {
    const router = useRouter();
    const [hasFavorited, setHasFavorited] = useState(currentUser?.favoriteIds.includes(movieId));

    const toggleFavorite = useCallback(async (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        event.stopPropagation();

        if (!currentUser) {
            return null;
        }

        try {
            let request;

            if (hasFavorited) {
                request = () => axios.delete(`/api/favorites/${movieId}`);
            } else {
                request = () => axios.post(`/api/favorites/${movieId}`);
            }
        
            await request();
            setHasFavorited((favorite) => !favorite);
        } catch (error) {
            toast.error('Something went wrong.');
        }
       
    }, [
        hasFavorited,
        currentUser,
        movieId
    ]);

    return {
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorite;
