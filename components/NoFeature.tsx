'use client';

import { HOME_PATH } from "@/types";
import { useRouter } from "next/navigation";

const NoFeature = () => {
    const router = useRouter();

    return ( 
        <div 
            className="
                flex
                flex-col
                w-full 
                h-[100vh]
                justify-center 
                items-center
                relative
            "
        >
            <div className="text-neutral-100 text-4xl font-semibold ">Feature coming soon!</div>
            <button
                className="
                    mt-4
                    px-6
                    py-3
                    text-3xl
                    rounded-md
                    text-neutral-100
                    bg-netflix-red
                    hover:opacity-70
                "
                onClick={() => router.push(HOME_PATH)}
            >
                Home
            </button>
        </div>
     );
}
 
export default NoFeature; 