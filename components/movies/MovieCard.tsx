'use client';

import { Movie } from "@prisma/client";
import { BsFillPlayFill, BsArrowDown } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal";
import GenreTag from "../GenreTag";

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
    const router = useRouter();
    const { onOpen } = useInfoModal();

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
                <video
                    muted
                    autoPlay
                    controls={false}
                    className="
                        object-cover
                        transition
                        duration-0
                        shadow-xl
                        rounded-t-md
                        w-full
                        h-[12vw]
                    "
                    poster={data.thumbnailUrl}
                    src={data.videoUrl}
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
                            onClick={() => router.push(`/watch/${data.id}`)}
                        >
                            <BsFillPlayFill className="Icon" />
                        </div>
                        <FavoriteButton movieId={data.id} />
                        <div
                            className="
                                cursor-pointer
                                ml-auto
                                group/item
                                w-6
                                h-6
                                lg:w-9
                                lg:h-9
                                border-white
                                border-2
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:border-neutral-300
                            "
                            onClick={() => onOpen(data.id)}
                        >
                            <BsArrowDown 
                                size={28} 
                                className="
                                    text-white
                                    group-hover/item:text-neutral-300
                                "    
                            />
                        </div>
                    </div>

                    <div className="flex flex-row text-neutral-200 mt-4 gap-2 items-center">
                        <button 
                            className="
                                cursor-default
                                rounded-md 
                                px-1.5 
                                py-0.5 
                                bg-green-500 
                                text-white"
                            >
                                New
                            </button>
                        <div className="font-semibold text-xl">{data.title}</div>
                        <div className="ml-auto">{data.duration}</div>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                       {data.genre.map((genre, index) => <GenreTag key={index} genre={genre} />)}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieCard;