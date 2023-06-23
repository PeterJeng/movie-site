import prisma from "@/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

const getFavorites = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        const favorites = await prisma.movie.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        })

        return favorites;
    } catch (error: any) {
        throw new Error(error);
    }
}

export default getFavorites;