import { navbarMenuList } from "./Navbar";

const AccountMenu = () => {
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
                -ml-44
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
                <div className="px-3 py-3 text-sm text-white hover:text-gray-300 hover:bg-neutral-900">
                    Username
                </div>
                <div className="px-3 py-3 text-sm text-white hover:text-gray-300 hover:bg-neutral-900">
                    Manage Profiles
                </div>
                <div className="px-3 py-3 text-sm text-white hover:text-gray-300 hover:bg-neutral-900">
                    Account
                </div>
                <div className="px-3 py-3 text-sm text-white hover:text-gray-300 hover:bg-neutral-900">
                    Help Center
                </div>
                <hr className="border-gray-600" />
                <div className="px-3 py-3 text-center text-sm text-white hover:text-gray-300 hover:bg-neutral-900">
                    Sign out of Netflix
                </div>
            </div>
        </div>
     );
}
 
export default AccountMenu;