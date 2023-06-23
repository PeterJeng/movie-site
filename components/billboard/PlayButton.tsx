import useInfoModal from "@/hooks/useInfoModal";
import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
    movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({
    movieId
}) => {
    const { onClose } = useInfoModal();
    const router = useRouter();
    return ( 
        <button
            onClick={() => {
                onClose(); // make sure info modal always closes
                router.push(`/watch/${movieId}`);
            }}
            className="
                bg-white
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
                hover:bg-neutral-300
                transition
            "
        >
            <BsFillPlayFill className="mr-1 Icon" />
            <p className="pr-">Play</p>
        </button>
     );
}
 
export default PlayButton;