'use client';

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Container from "../Container";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

interface NavbarProps {
    currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {

    return ( 
        <nav className="fixed w-full z-40 shadow-sm">
            <div 
                className="
                    px-4
                    md:px-10
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    bg-zinc-900
                    bg-opacity-90
                    
                "
            >
                <Logo />
                <div
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        md:flex
                    "
                >
                    <NavbarItem label="Home" />
                    <NavbarItem label="TV Shows" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="My List" />
                </div>

            </div>
        </nav>

        
     );
}
 
export default Navbar;