'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Login from "@/components/login/Login";

const Auth = () => {
    const router = useRouter();

    return ( 
        <div 
            className="
                relative 
                h-full 
                w-full 
                bg-[url('/images/loginBackground.jpg')]
                bg-no-repeat
                bg-center
                bg-fixed
                bg-cover
            "
        >
            <div className="bg-black w-full h-full sm:bg-opacity-50">
                <div className="py-6 px-14">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        className="md:block cursor-pointer"
                        onClick={() => router.push('/')}
                        width={167}
                        height={167}
                    />
                </div>
                <div className="flex justify-center">
                    <div 
                        className="
                            bg-black 
                            bg-opacity-70 
                            px-16 
                            py-16
                            self-center
                            mt-2
                            lg:w-2/5
                            lg:max-w-md
                            rounded-md
                            w-full
                        "
                    >
                        <Login />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auth; 