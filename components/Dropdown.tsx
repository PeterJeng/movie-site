import { IconType } from "react-icons";

interface DropdownProps {
    label?: string;
    imageSrc?: string;
    icon?: IconType;
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    imageSrc,
    icon: Icon,
    children
}) => {
    return ( 
        <div 
            className="
                group 
                relative 
                text-white
                hover:text-gray-300
                cursor-pointer 
                items-center 
                transition
            "
        >
            <div className="flex flex-row items-center ">
                <div className="text-sm">{label}</div>
                {imageSrc && ( 
                    <img 
                        alt="Image"
                        className="w-8 h-8 rounded-md overflow-hidden cursor-pointer"
                        src={imageSrc}
                    />)
                }
                {Icon && (<Icon size={24} />)}
            </div>
            <div 
                className="
                    group-hover:block
                    absolute 
                    hidden
                    top-0 
                "
            >
                {children}
            </div>
        </div>
     );
}
 
export default Dropdown;