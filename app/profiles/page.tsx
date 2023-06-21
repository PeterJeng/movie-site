
import ClientOnly from "@/components/ClientOnly";
import ProfilesClient from "./ProfilesClient";
import { UserProvider } from "@/hooks/useUserContext";
import getCurrentUser from "@/actions/getCurrentUser";

const Profiles = async () => {
    const currentUser = await getCurrentUser();
    
    return (
        <ClientOnly>
            <UserProvider currentUser={currentUser}>
                <ProfilesClient />
            </UserProvider>
        </ClientOnly> 
     );
}
 
export default Profiles;