import MenuItem from "../MenuItem";
import { signOut } from "next-auth/react";
import { LuPencil } from "react-icons/lu";
import { IoPersonOutline, IoHelpCircleOutline } from "react-icons/io5";

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
                    key="username" 
                    label="Username" 
                    onClick={() => {}}
                    imageSrc="/images/default-blue.png"
                />
                <MenuItem 
                    key="profile" 
                    label="Manage Profiles" 
                    onClick={() => {}}
                    icon={LuPencil}
                />
                <MenuItem 
                    key="account" 
                    label="Account" 
                    onClick={() => {}} 
                    icon={IoPersonOutline}
                />
                <MenuItem 
                    key="help" 
                    label="Help Center" 
                    onClick={() => {}} 
                    icon={IoHelpCircleOutline}
                />
                <hr className="border-gray-600" />
                <MenuItem key="signout" label="Sign out of Netflix" onClick={signOut} center />
            </div>
        </div>
     );
}
 
export default AccountMenu;