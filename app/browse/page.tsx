import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/navbar/Navbar";

const Browse = async () => {
    const currentUser = await getCurrentUser();

    return ( 
        <div>
            <Navbar currentUser={currentUser} />
            <div className="h-96"></div>
            <div className="h-96"></div>
            <div className="h-96"></div>
            <div className="h-96"></div>
            <div className="h-96"></div>
        </div>
     );
}
 
export default Browse;