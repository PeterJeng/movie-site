import MenuItem from "../MenuItem";
import { signOut } from "next-auth/react";
import { LuPencil } from "react-icons/lu";
import { IoPersonOutline, IoHelpCircleOutline } from "react-icons/io5";
import { 
    ACCOUNT_PATH,
    HELP_PATH,
    PROFILES_PATH 
} from "@/types";

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
                <MenuItem 
                    key="profile" 
                    label="Manage Profiles" 
                    path={PROFILES_PATH}
                    icon={LuPencil}
                />
                <MenuItem 
                    key="account" 
                    label="Account" 
                    path={ACCOUNT_PATH}
                    icon={IoPersonOutline}
                />
                <MenuItem 
                    key="help" 
                    label="Help Center" 
                    path={HELP_PATH}
                    icon={IoHelpCircleOutline}
                />
                <hr className="border-gray-600" />
                <div 
                    onClick={() => signOut({
                        redirect: true,
                        callbackUrl: '/auth'
                    })} 
                    className="
                        px-3 
                        py-3 
                        text-sm 
                        text-white 
                        hover:text-gray-300 
                        hover:bg-neutral-900
                        transition
                        text-center
                        
                    "
                >
                    Sign out of Netflix
                </div>
            </div>
        </div>
     );
}
 
export default AccountMenu;