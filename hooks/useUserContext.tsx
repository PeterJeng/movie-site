'use client';

import { SafeUser } from "@/types";
import { createGenericContext } from "./useGenericContext";

interface UserContextProps {
    children: React.ReactNode;
    currentUser: SafeUser | null;
}

const [useCurrentUserContext, UserContextProvider] = createGenericContext<SafeUser>();

const UserProvider: React.FC<UserContextProps> = ({
    currentUser,
    children
}) => {
    return (
        <UserContextProvider value={currentUser}>
            {children}
        </UserContextProvider>
    )
}


export { UserProvider, useCurrentUserContext };