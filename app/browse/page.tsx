import getCurrentUser from "@/actions/getCurrentUser";
import getRandomMovie from "@/actions/getRandomMovie";
import ClientOnly from "@/components/ClientOnly";
import Billboard from "@/components/billboard/Billboard";
import Navbar from "@/components/navbar/Navbar";

const Browse = async () => {
    const currentUser = await getCurrentUser();
    const randomMovie = await getRandomMovie();

    return ( 
        <ClientOnly>
            <Navbar currentUser={currentUser} />
            <Billboard randomMovie={randomMovie} />
        </ClientOnly>
     );
}
 
export default Browse;