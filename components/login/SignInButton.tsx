'use client';

import { useRouter } from "next/navigation";

const SignInButton = () => {
    const router = useRouter();

    return ( 
        <button 
            className="
                px-4
                py-1.5
                cursor-pointer 
                rounded-md 
                border-spacing-0 
                bg-netflix-red
                text-white
                hover:bg-opacity-70
                duration-300
                transform
                ml-auto
                w-24
            "
            onClick={() => router.push('/auth')}
        >
            Sign In
        </button>
     );
}
 
export default SignInButton;