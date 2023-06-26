import { useRouter } from 'next/navigation';
import React from 'react';

interface NavItemProps {
    label: string;
    path: string;
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
    label,
    path,
    isActive
}) => {
    const router = useRouter();
    return ( 
        <div 
            className={`    
                text-white 
                cursor-pointer 
                hover:text-gray-300 
                transition
                ${isActive && 'font-semibold'}
            `}
            
            onClick={() => router.push(path)}
        >
            {label}
        </div>
     );
}
 
export default NavItem;