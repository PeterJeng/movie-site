import getMovieById from "@/actions/getMovie";
import WatchVideo from "@/components/video/WatchVideo";


interface WatchProps {
    movieId: string
}

const Watch = async (
    { params }: { params: WatchProps }
) => {
    const { movieId } = params;
    const movie = await getMovieById({ movieId });

    return ( 
        <WatchVideo movie={movie} />
     );
}
 
export default Watch;