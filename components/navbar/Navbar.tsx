'use client';

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { MdArrowDropDown } from "react-icons/md";
import { BsSearch, BsBell } from "react-icons/bs";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import BrowseMenu from "./BrowseMenu";
import Dropdown from "../Dropdown";
import AccountMenu from "./AccountMenu";

interface NavbarProps {
    currentUser?: User | null
}

export const navbarMenuList = [
    {
        label: "Home",
        onClick: () => {}
    },
    {
        label: "TV Shows",
        onClick: () => {}
    },
    {
        label: "Movies",
        onClick: () => {}
    },
    {
        label: "New & Popular",
        onClick: () => {}
    },
    {
        label: "My List",
        onClick: () => {}
    },
    {
        label: "Browse by Languages",
        onClick: () => {}
    }
]

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return ( 
        <div className="fixed w-full z-40 shadow-sm">
            <div 
                className="
                    px-4
                    lg:px-10
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    bg-neutral-950
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
                        lg:flex
                    "
                >
                    {
                        navbarMenuList.map(item => (
                            <NavbarItem key={item.label} label={item.label} />
                        ))
                    }
                </div>
                <div className="ml-8 lg:hidden">
                    <Dropdown label="Browse" icon={MdArrowDropDown}>
                        <BrowseMenu />
                    </Dropdown>
                </div>
                
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-white hover:text-gray-300 cursor-pointer">
                        <BsSearch size={24} />
                    </div>
                    <div className="text-white hover:text-gray-300 cursor-pointer">
                        <BsBell size={24} />
                    </div>
                    <Dropdown imageSrc="/images/default-blue.png" icon={MdArrowDropDown}>
                        <AccountMenu />
                    </Dropdown>
                </div>   
            </div>
        </div>

        
     );
}
 
export default Navbar;