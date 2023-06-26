import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface MenuItemProps {
    key: string;
    label: string;
    path: string;
    imageSrc?: string;
    center?: boolean;
    icon?: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({
    label,
    imageSrc,
    icon: Icon,
    center,
    path
}) => {
    const router = useRouter();

    return ( 
        <div 
            onClick={() => router.push(path)} 
            className={
                `
                    px-3 
                    py-3 
                    text-sm 
                    text-white 
                    hover:text-gray-300 
                    hover:bg-neutral-900
                    transition
                    ${center ? 'text-center' : ''}
                `
            }
        >
            {(Icon || imageSrc) ? (
                <div 
                    className="
                        flex 
                        flex-row
                        px-3
                        group/item
                        items-center
                        w-full
                        gap-3
                        
                    "
                >
                    {Icon && (
                        <Icon size={24} className="mx-0.5"/>
                    )}
                    {imageSrc && (
                        <img className="w-7 rounded-md" src={imageSrc} alt="profile pic" />
                    )}
                    {label}
                </div>
            ) :
            <>{label}</>
            }
            
        </div>
    );
}
 
export default MenuItem;