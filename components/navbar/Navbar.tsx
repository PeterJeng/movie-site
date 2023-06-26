'use client';

import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BsSearch, BsBell } from "react-icons/bs";
import Logo from "./Logo";
import NavItem from "./NavItem";
import BrowseMenu from "./BrowseMenu";
import Dropdown from "../Dropdown";
import AccountMenu from "./AccountMenu";

export const HOME = 'Home';
export const TV_SHOWS = 'TV Shows';
export const MOVIES = 'Movies';
export const NEW_AND_POPULAR = 'New & Popular';
export const MY_LIST = "My List";
export const LANGUAGES = "Browse by Languages";

export const navbarMenuList = [
    {
        label: HOME,
        path: "/browse"
    },
    {
        label: TV_SHOWS,
        path: "/shows"
    },
    {
        label: MOVIES,
        path: "/movies"
    },
    {
        label: NEW_AND_POPULAR,
        path: "/new-popular"
    },
    {
        label: MY_LIST,
        path: "/my-list"
    },
    {
        label: LANGUAGES,
        path: "/languages"
    }
]

const TOP_OFFSET = 66;

interface NavbarProps {
    currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({
    currentPage
}) => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return ( 
        <div className="fixed w-full z-40">
            <div 
                className={`
                    px-4
                    lg:px-10
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    ${showBackground ? 'bg-neutral-950 bg-opacity-90' : ''}
                `}
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
                            <NavItem key={item.label} label={item.label} path={item.path} isActive={currentPage === item.label} />
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