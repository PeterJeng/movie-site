'use client';

import { Movie } from "@prisma/client";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
    data: Movie;
    left: boolean;
    right: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data,
    left,
    right
}) => {
    return ( 
        <div className="group bg-neutral-950 col-auto relative h-[12vw]">
            <img 
                src={data.thumbnailUrl} 
                alt="Thumbnail"
                className="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-md
                    group-hover:opacity-90
                    sm:group-hover:opacity-0
                    delay-200
                    w-full
                    h-[12vw]
                "
            />
            <div 
                className={`
                    opacity-0
                    absolute
                    top-0
                    transition
                    duration-200
                    z-10
                    invisible
                    sm:visible
                    delay-200
                    w-full
                    scale-0
                    group-hover:scale-110
                    group-hover:-translate-y-[6vw]
                    group-hover:opacity-100
                    overflow-hidden-x
                    ${left && 'group-hover:translate-x-[1vw]'}
                    ${right && 'group-hover:-translate-x-[1vw]' }
                `}
            >
                <img 
                    src={data.thumbnailUrl}
                    alt="Thumbnail"
                    className="
                        cursor-pointer
                        object-cover
                        transition
                        duration-0
                        shadow-xl
                        rounded-t-md
                        w-full
                        h-[12vw]
                    "
                />
                <div
                    className="
                        z-10
                        bg-neutral-800
                        p-2
                        lg:p-4
                        absolute
                        w-full
                        transition
                        shadow-md
                        rounded-b-md
                    "
                >
                    <div className="flex flex-row items-center gap-3">
                        <div
                            className="
                                cursor-pointer
                                w-6
                                h-6
                                lg:w-10
                                lg:h-10
                                bg-white
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:bg-neutral-300
                            "
                            onClick={() => {}}
                        >
                            <BsFillPlayFill size={30} />
                        </div>
                        <FavoriteButton movieId={data.id} />
                    </div>

                    <div className="flex flex-row text-neutral-200 mt-4 gap-2 items-center">
                        <div className="font-semibold text-green-500">New</div>
                        <div>{data.duration}</div>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <div className="text-white text-[10px] lg:text-sm">{data.genre}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieCard;