'use client';

import { IoClose } from "react-icons/io5";

import PlayButton from "../billboard/PlayButton";
import FavoriteButton from "../movies/FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import { useMovieContext } from "@/hooks/useMovieContext";
import GenreTag from "../GenreTag";

const InfoModal = () => {
    const { isOpen, movieId, onClose } = useInfoModal();
    const movie = useMovieContext().find((movie) => movie.id === movieId);

    if (!isOpen || !movie) {
        return null;
    }

    return (
        <div 
            className="
                z-50
                bg-black
                bg-opacity-80
                flex
                justify-center
                items-center
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
            "
        >
            <div
                className="
                    relative
                    w-auto
                    mx-auto
                    max-w-6xl
                    rounded-md
                    overflow-hidden
                "
            >
                <div
                    className={`
                        ${isOpen ? 'scale-100' : 'scale-0'}
                        translate
                        duration-300
                        relative
                        flex-auto
                        bg-neutral-900
                        drop-shadow-md
                    `}
                >
                    <div className="relative h-auto">
                        <video
                            className="
                                w-full
                                brightness-[60%]
                                object-cover
                                h-full
                            "
                            autoPlay
                            muted
                            loop
                            poster={movie.thumbnailUrl}
                            src={movie.videoUrl}
                        />
                        <div
                            className="
                                cursor-pointer
                                absolute
                                top-3
                                right-3
                                h-10
                                w-10
                                rounded-full
                                bg-black
                                bg-opacity-70
                                flex
                                items-center
                                justify-center
                            "
                            onClick={onClose}
                        >
                            <IoClose className="text-white w-6" size={20} />
                        </div>
                        <div className="absolute bottom-[10%] left-10">
                            <div 
                                className="
                                    text-white 
                                    text-3xl 
                                    md:text-4xl 
                                    h-full 
                                    lg:text-5xl 
                                    font-bold 
                                    mb-8
                                "
                            >
                                {movie?.title}
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieId={movie.id} />
                                <FavoriteButton movieId={movie.id} />
                            </div>
                        </div>
                    </div>

                    <div className="px-12 py-8">
                        <div className="flex flex-row items-center gap-2 mb-8">
                            <p className="text-white text-lg">
                                {movie.duration}
                            </p>
                            {movie.genre.map((genre, index) => <GenreTag key={index} genre={genre} />)}
                           
                        </div>
                        <p className="text-white text-lg">
                            {movie.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default InfoModal;