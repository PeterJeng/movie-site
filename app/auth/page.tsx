'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/component/Container";

const Auth = () => {
    const router = useRouter();

    return ( 
        <div 
            className="
                relative 
                h-full 
                w-full 
                bg-[url('/images/hero.jpg')]
                bg-no-repeat
                bg-center
                bg-fixed
                bg-cover
            "
        >
            <div className="bg-black w-full h-full sm:bg-opacity-50">
                <div className="py-5 px-12">
                    <Container>
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            className="md:block cursor-pointer"
                            onClick={() => router.push('/')}
                            width={167}
                            height={167}
                        />
                    </Container>
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
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auth; 