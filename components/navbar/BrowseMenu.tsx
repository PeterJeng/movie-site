import MenuItem from "../MenuItem";
import { navbarMenuList } from "./Navbar";

const BrowseMenu = () => {
    return ( 
        <div 
            className="
                bg-black 
                w-56 
                top-8 
                flex-col
                border-2
                border-neutral-900
                flex
                relative
                cursor-pointer
                opacity-90
                -ml-20
                mt-2
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-1
                "
            >
                {navbarMenuList.map((item) => (
                    <MenuItem
                        key={item.label}
                        label={item.label}
                        onClick={item.onClick}
                        center
                    />
                ))}
                
            </div>
           
        </div>
     );
}
 
export default BrowseMenu;

