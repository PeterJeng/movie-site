import SignInButton from "@/components/login/SignInButton";

const Main = () => {
    return (
        <div>
             <div
                id="header"
                className="
                    relative
                    w-full
                    h-[75%]
                    sm:h-[50vh]
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
                            py-2.5
                            px-4
                            md:px-20
                            lg:px-32
                            xl:px-40
                            2xl:px-60
                        "
                    >
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="
                                w-52
                            "
                        />
                        <SignInButton />
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

            
            <div className="section-header">
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
                        h-[55%]
                        col-start-1
                        row-start-2
                        col-span-2
                        md:col-start-2
                        md:row-start-1
                        md:col-span-1
                        z-5
                        -mt-[3%]
                    "
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    autoPlay 
                    playsInline 
                    muted 
                    loop 
                />
            </div>
        
            <div className="section-header">
                <img 
                    className="
                        w-full
                        col-start-1
                        row-start-2
                        col-span-2
                        md:col-start-1
                        md:row-start-1
                        md:col-span-1
                        px-4
                        z-10
                    " 
                    src="images/devices.png" 
                    alt="Netflix TV" 
                />

                <video
                    className="
                        relative
                        w-full
                        h-[45%]
                        col-start-1
                        row-start-2
                        col-span-2
                        md:col-start-1
                        md:row-start-1
                        md:col-span-1
                        z-5
                        -mt-[25%]
                    "
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    autoPlay 
                    playsInline 
                    muted 
                    loop 
                />
                <div 
                    className="
                        text-white
                        px-4
                        col-start-1
                        col-span-2
                        row-start-1
                        md:col-span-1
                        md:col-start-2
                        md:row-start-1
                        text-center
                        md:text-left
                    "
                >
                    <h1 className="font-bold text-5xl">Watch everywhere</h1>
                    <h3 className="text-2xl leading-8 pt-4">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
            </div>
            
            <div className="section-header">
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
                    <h1 className="font-bold text-5xl">Create profiles for kids</h1>
                    <h3 className="text-2xl leading-8 pt-4">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
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
                    src="images/kids.png" 
                    alt="Netflix TV" 
                />
            </div>
            
            <div className="section-header">
                <img 
                    className="
                        w-full
                        col-start-1
                        row-start-2
                        col-span-2
                        md:col-start-1
                        md:row-start-1
                        md:col-span-1
                        px-4
                        z-10
                    " 
                    src="images/mobile.jpg" 
                    alt="Netflix TV" 
                />

                <div 
                    className="
                        text-white
                        px-4
                        col-start-1
                        col-span-2
                        row-start-1
                        md:col-span-1
                        md:col-start-2
                        md:row-start-1
                        text-center
                        md:text-left
                    "
                >
                    <h1 className="font-bold text-5xl">Download your shows to watch offline</h1>
                    <h3 className="text-2xl leading-8 pt-4">Only available on ad-free plans.</h3>
                </div>
            </div>

            <div className="section-header">
                <div 
                    className="
                        text-neutral-100
                        px-4
                        col-span-2
                        md:col-span-1
                        text-center
                        md:text-left
                        items-center
                    "
                >
                    <div className="flex flex-col">
                        { /* eslint-disable-next-line react/no-unescaped-entities */ }
                        <h1 className="font-bold text-5xl ">Hi, I'm Peter Jeng!</h1>
                        <h3 className="text-2xl leading-8 py-4 text-neutral-300">FullStack developer based in New York City, US.</h3>
                        <div className="flex flex-row justify-center md:justify-normal items-center">
                            <a href="https://www.linkedin.com/in/peterjeng/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/linkedIn.svg" alt="linkedIn" className="w-10 h-10 rounded-md hover:opacity-50 bg-neutral-600 border-2 border-neutral-600"/>
                            </a>
                        </div>
                        
                    </div>
                    <div className="flex flex-col pt-20">
                        <h3 className="text-2xl leading-8">Project Development:</h3>
                        <div className="flex flex-row gap-6 pt-4">
                            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/react.svg" alt="React" className="tech-logo"/>
                            </a>
                            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/nextjs.png" alt="NextJS" className="tech-logo"/>
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/tailwind.svg" alt="Tailwind" className="tech-logo"/>
                            </a>
                            <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/prisma.svg" alt="Prisma" className="tech-logo bg-neutral-50"/>
                            </a>
                            <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/nextauth.png" alt="NextAuth" className="tech-logo"/>
                            </a>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/mongoDB.svg" alt="MongoDB" className="tech-logo"/>
                            </a>
                            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                                <img src="images/tech/vercel-light.png" alt="Vercel" className="tech-logo"/>
                            </a>
                        </div>
                    </div>
                   
                </div>
    
                <div
                    className="
                        col-start-1
                        row-start-2
                        col-span-2
                        md:col-start-2
                        md:row-start-1
                        md:col-span-1
                        px-4
                        z-10
                        pt-8
                    "
                >
                    <img 
                        className="
                            w-full
                            h-auto
                            rounded-full
                        " 
                        src="images/tech/peter.jpeg" 
                        alt="Peter" 
                    />
                </div>
            </div>
        </div>
       
  )
}
 
export default Main;