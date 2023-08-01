import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { NEW_AND_POPULAR } from "@/types";

const NewPopular = () => {
    const test = "Testing for a PR"
    const test = "Testing for a PR"
    const test = "Testing for a PR"
    const test = "Testing for a PR"

    return ( 
        <div>
            <Navbar currentPage={NEW_AND_POPULAR} />
            <NoFeature />
            Hello! This is a just a quick test
        </div>
     );
}
 
export default NewPopular;