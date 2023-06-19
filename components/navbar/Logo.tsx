'use client';

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Logo = () => {
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push('/browse')
    }, [router]);

    return ( 
        <img 
            alt="Logo"
            className="h-4 lg:h-7 cursor-pointer"
            src="/images/logo.png"
            onClick={handleClick}
        />
     );
}
 
export default Logo;