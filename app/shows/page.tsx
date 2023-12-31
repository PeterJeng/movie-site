import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { TV_SHOWS } from "@/types";

const Shows = () => {
    return ( 
        <div>
            <Navbar currentPage={TV_SHOWS} />
            <NoFeature />
        </div>
     );
}
 
export default Shows;