import { User } from "@prisma/client";

interface NavbarProps {
    currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return ( 
        <div>

        </div>
     );
}
 
export default Navbar;