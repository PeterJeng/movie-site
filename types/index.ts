import { User, Account } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

export type SafeAccount = Omit<
    Account,
    "user"
> & {
    user: SafeUser
}
