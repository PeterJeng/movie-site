import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";
import { Movie } from "@prisma/client";

const getMovieList = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        const movies: Movie[] = await prisma.movie.findMany();

        return movies;
    } catch (error: any) {
        throw new Error(error);
    }
}

export default getMovieList;