import ClientOnly from "@/components/ClientOnly";
import ProfilesClient from "./ProfilesClient";
import getCurrentUser from "@/actions/getCurrentUser";

const Profiles = async () => {
    const currentUser = await getCurrentUser(); 

    return (
        <ClientOnly>
            <ProfilesClient currentUser={currentUser} />
        </ClientOnly> 
        
     );
}
 
export default Profiles;