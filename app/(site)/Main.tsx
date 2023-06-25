'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Main = () => {
    const router = useRouter();
    return (
        <div>
             <div
                id="header"
                className="
                    relative
                    w-full
                    h-[50vh]
                    bg-[url('/images/netflixBackground.jpg')]
                    bg-cover
                    bg-center
                    bg-no-repeat
                "
            >
                <div className="bg-black w-full h-full sm:bg-opacity-50">
                    <nav
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            py-2.5
                            px-40
                        "
                    >
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="
                                w-52
                            "
                        />
        
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
                            "
                        >
                            Sign In
                        </button>
                    </nav>
                    <div 
                        className="
                            text-white
                            flex
                            flex-col
                            justify-center
                            items-center
                            text-center
                            px-4
                        "
                    >
                        <div
                            className="
                                text-5xl
                                leading-[70px]
                                font-extrabold
                                max-w-2xl
                            "
                        >
                            Unlimited movies, Tv shows and more.
                        </div>
                        <div
                            className="
                                font-normal
                                my-5
                                text-3xl
                            "
                        >
                            Watch anywhere. Cancel anytime.
                        </div>
                        <div
                             className="
                                font-normal
                                my-5
                                text-3xl
                            "
                        >
                            Ready to watch? Enter your email to create or restart your membership.
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div 
                    className="
                        w-full
                        pt-6
                        pb-11
                        items-center
                        grid-cols-2
                        inline-grid
                        relative
                        md:px-20
                        lg:px-30
                        xl:px-40
                        2xl:px-60
                        px-10
                    "
                >
                    <div 
                        className="
                            text-white
                            px-4
                            col-span-2
                            md:col-span-1
                            text-center
                            md:text-left
                        "
                    >
                        <h1 className="font-bold text-5xl">Enjoy on your TV</h1>
                        <h3 className="text-2xl leading-8 pt-4">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>
       
                    <img 
                        className="
                            w-full
                            col-start-1
                            row-start-2
                            col-span-2
                            md:col-start-2
                            md:row-start-1
                            md:col-span-1
                            px-4
                            z-10
                        " 
                        src="images/tv.png" 
                        alt="Netflix TV" 
                    />
                    <video
                        className="
                            relative
                            w-full
                            h-[54%]
                            col-start-1
                            row-start-2
                            col-span-2
                            md:col-start-2
                            md:row-start-1
                            md:col-span-1
                            z-5
                        "
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        autoPlay 
                        playsInline 
                        muted 
                        loop 
                    />
          
                    
                </div>
            </div>

        </div>
       
  )
}
 
export default Main;