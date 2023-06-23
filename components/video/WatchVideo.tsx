'use client';

import { Movie } from "@prisma/client";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

interface WatchVideoProps {
    movie?: Movie | null
}

const WatchVideo: React.FC<WatchVideoProps> = ({
    movie
}) => {
    const router = useRouter();

    return ( 
        <div className="h-screen w-screen bg-black">
            <nav
                className="
                    fixed
                    w-full
                    p-8
                    z-10
                    flex
                    flex-row
                    items-center
                    gap-8
                    bg-black
                    bg-opacity-70
                "
            >
                <button
                    onClick={() => router.push('/browse')}
                    className="
                        text-white
                        hover:text-neutral-300
                    " 
                >
                    <BsArrowLeft size={40} />
                </button>
                
                <p className="text-white text-1xl md:text-3xl font-bold justify-center">
                    {movie?.title}
                </p>
            </nav>
            <video
                autoPlay
                controls
                className="h-full w-full"
                poster={movie?.thumbnailUrl}
                src={movie?.videoUrl}
            />
        </div>
     );
}
 
export default WatchVideo;