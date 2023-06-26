import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { LANGUAGES } from "@/types";

const Languages = () => {
    return ( 
        <div >
            <Navbar currentPage={LANGUAGES} />
            <NoFeature />
        </div>
     );
}
 
export default Languages;