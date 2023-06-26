import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { MOVIES } from "@/components/navbar/Navbar"; 

const Movies = () => {
    return ( 
        <div>
            <Navbar currentPage={MOVIES} />
            <NoFeature />
        </div>
     );
}
 
export default Movies;