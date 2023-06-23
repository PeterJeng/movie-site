import prisma from "@/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

interface IParams {
    movieId: string;
}

const getMovieByIds = async (params: IParams) => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            throw new Error("User not logged in.");;
        }

        const { movieId } = params;

        const movie = await prisma.movie.findUnique({
            where: {
                id: movieId
            },
        });

        if (!movie) {
            throw new Error("Invalid Movie ID");
        }

        return movie;
    } catch (error: any) {
        console.error(error);
        return null;
    }
}

export default getMovieByIds;