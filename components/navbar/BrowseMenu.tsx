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
                    <div key={item.label} className="px-3 py-3 text-center text-sm text-white hover:text-gray-300 hover:bg-neutral-900">
                        {item.label}
                    </div>
                ))}
                
            </div>
           
        </div>
     );
}
 
export default BrowseMenu;

