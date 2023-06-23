'use client';

import { Movie } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

interface WatchVideoProps {
    movie?: Movie | null
}

const WatchVideo: React.FC<WatchVideoProps> = ({
    movie
}) => {
    const router = useRouter();

    useEffect(() => {
        const handleMouseMove = () => {
            const videoPlayer = document.getElementById("videoPlayer");
            const nav = document.getElementById("nav");

            if (videoPlayer && nav) {
                const videoTimer = videoPlayer.getAttribute("timer");
                const navTimer = nav.getAttribute("timer");

                if (videoTimer) {
                    clearTimeout(videoTimer);
                    videoPlayer.setAttribute("timer", "");
                }

                if (navTimer) {
                    clearTimeout(navTimer);
                    nav.setAttribute("timer", "");
                }

                const videoTime = setTimeout(() => {
                    videoPlayer.setAttribute("timer", "");
                    videoPlayer.classList.add("cursor-none");
                }, 3500);

                const navTime = setTimeout(() => {
                    nav.setAttribute("timer", "");
                    nav.classList.add("hidden");
                }, 2500);

                // @ts-ignore
                videoPlayer.setAttribute("timer", videoTime);
                // @ts-ignore
                nav.setAttribute("timer", navTime);

                videoPlayer.classList.remove("cursor-none");
                nav.classList.remove("hidden");
            }
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    

    return ( 
        <div className="h-screen w-screen bg-black">
            <nav
                id="nav"
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
                    justify-between
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
                <p className="text-white text-1xl md:text-3xl font-bold">
                    {movie?.title}
                </p>
                <div />
            </nav>
            <video
                id="videoPlayer"
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