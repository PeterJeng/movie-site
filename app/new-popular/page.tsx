import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { NEW_AND_POPULAR } from "@/components/navbar/Navbar";

const NewPopular = () => {
    return ( 
        <div>
            <Navbar currentPage={NEW_AND_POPULAR} />
            <NoFeature />
        </div>
     );
}
 
export default NewPopular;