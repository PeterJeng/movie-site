'use client';

interface GenreTagProps {
    genre: string
}

const GenreTag: React.FC<GenreTagProps> = ({
    genre
}) => {
    return ( 
        <div 
            className="
                py-0.5 
                px-1.5 
                text-black 
                bg-neutral-300 
                rounded-lg
                text-[10px] 
                lg:text-sm
            "
        >
            {genre}
        </div>
     );
}
 
export default GenreTag;