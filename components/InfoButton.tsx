'use client';

import useInfoModal from "@/hooks/useInfoModal";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface InfoButtonProps {
    movieId: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({
    movieId
}) => {
    const { onOpen } = useInfoModal();

    return ( 
        <button
            className="
                bg-white
                text-white
                bg-opacity-30
                rounded-md
                py-1
                md:py-2
                px-2
                md:px-4
                w-auto
                text-xs
                lg:text-lg
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-opacity-20
                transition
            "
            onClick={() => onOpen(movieId)}
        >
            <AiOutlineInfoCircle className="mr-2 Icon"/>
            More Info
        </button>
     );
}
 
export default InfoButton;