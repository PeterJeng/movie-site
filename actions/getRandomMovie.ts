import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";
import { Movie } from "@prisma/client";

const getRandomMovie = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return null;
        }

        const movieCount = await prisma.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies: Movie[] = await prisma.movie.findMany({
            take: 1,
            skip: randomIndex
        });

        return randomMovies[0];
    } catch (error: any) {
        console.error("getRandomMovies: " + error);
        return null;
    }
}

export default getRandomMovie;