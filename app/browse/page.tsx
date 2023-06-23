import getCurrentUser from "@/actions/getCurrentUser";
import getFavorites from "@/actions/getFavorites";
import getMovieList from "@/actions/getMovieList";
import getRandomMovie from "@/actions/getRandomMovie";
import ClientOnly from "@/components/ClientOnly";
import Billboard from "@/components/billboard/Billboard";
import InfoModal from "@/components/modal/InfoModal";
import FavoriteList from "@/components/movies/FavoriteList";
import MovieList from "@/components/movies/MovieList";
import Navbar from "@/components/navbar/Navbar";
import { MovieProvider } from "@/hooks/useMovieContext";
import { UserProvider } from "@/hooks/useUserContext";

const Browse = async () => {
    const randomMovie = await getRandomMovie();
    const movieList = await getMovieList();
    const favoriteList = await getFavorites();
    const currentUser = await getCurrentUser();
    
    return ( 
        <ClientOnly>
            <UserProvider currentUser={currentUser}>
                <MovieProvider movies={movieList}>
                    <InfoModal />
                    <Navbar />
                    {randomMovie && <Billboard randomMovie={randomMovie} />}
                    <div className="pb-40">
                        <MovieList title="Trending Now" movieList={movieList} />
                        <FavoriteList favoriteList={favoriteList} />
                    </div>
                </MovieProvider>
            </UserProvider>
        </ClientOnly>
     );
}
 
export default Browse;