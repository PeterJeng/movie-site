'use client';

import { AiOutlineInfoCircle } from "react-icons/ai";

const InfoButton = () => {
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
            onClick={() => {}}
        >
            <AiOutlineInfoCircle className="mr-2" size={24} />
            More Info
        </button>
     );
}
 
export default InfoButton;