import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { LANGUAGES } from "@/components/navbar/Navbar";

const Languages = () => {
    return ( 
        <div >
            <Navbar currentPage={LANGUAGES} />
            <NoFeature />
        </div>
     );
}
 
export default Languages;