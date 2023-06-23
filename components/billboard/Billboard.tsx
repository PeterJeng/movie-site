'use client';

import { Movie } from "@prisma/client";
import InfoButton from "./InfoButton";
import PlayButton from "./PlayButton";

interface BillboardProps {
    randomMovie: Movie;
}

const Billboard: React.FC<BillboardProps> = ({
    randomMovie
}) => {
    return ( 
        <div className="relative h-[56.25vw]">
            <video
                loop
                muted
                autoPlay
                poster={randomMovie?.thumbnailUrl} 
                src={randomMovie?.videoUrl}
                className="
                    w-full
                    h-[56.25vw]
                    object-cover
                    brightness-[60%]
                "
            />
            <div
                className="
                    absolute
                    top-[30%]
                    md:top-[40%]
                    ml-4
                    md:ml-16
                "
            >
                <div 
                    className="
                        text-white 
                        text-1xl 
                        md:text-5xl 
                        h-full 
                        w-[50%]
                        lg:text-6xl
                        font-bold
                        drop-shadow-xl
                    "
                >
                    {randomMovie?.title}
                </div>
                <div 
                    className="
                        text-white
                        text-[8px]
                        md:text-lg
                        mt-3
                        md:mt-8
                        w-[90%]
                        md:w-[80%]
                        lg:w-[50%]
                        drop-shadow-xl
                    "
                >
                    {randomMovie?.description}
                </div>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={randomMovie?.id} />
                    <InfoButton />
                </div>
            </div>
        </div>
     );
}
 
export default Billboard;