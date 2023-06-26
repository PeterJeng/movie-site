import NoFeature from "@/components/NoFeature";
import Navbar from "@/components/navbar/Navbar";
import { MY_LIST } from "@/types";

const MyList = () => {
    return (
        <div >
            <Navbar currentPage={MY_LIST} />
            <NoFeature />
        </div>
     );
}
 
export default MyList;