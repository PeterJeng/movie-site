'use client';

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface NavbarProps {
    currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log(currentUser)
    return ( 
        <div>
            Hello {currentUser?.email}
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout</button>
        </div>
     );
}
 
export default Navbar;