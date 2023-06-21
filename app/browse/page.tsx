import getCurrentUser from "@/actions/getCurrentUser";
import getMovieList from "@/actions/getMovieList";
import getRandomMovie from "@/actions/getRandomMovie";
import ClientOnly from "@/components/ClientOnly";
import Billboard from "@/components/billboard/Billboard";
import MovieList from "@/components/movies/MovieList";
import Navbar from "@/components/navbar/Navbar";

const Browse = async () => {
    const currentUser = await getCurrentUser();
    const randomMovie = await getRandomMovie();
    const movieList = await getMovieList();

    return ( 
        <ClientOnly>
            <Navbar currentUser={currentUser} />
            <Billboard randomMovie={randomMovie} />
            <div className="pb-40">
                <MovieList currentUser={currentUser} title="Trending Now" movieList={movieList} />
            </div>
        </ClientOnly>
     );
}
 
export default Browse;