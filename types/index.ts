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

// navbar
export const HOME = "Home";
export const TV_SHOWS = "TV Shows";
export const MOVIES = "Movies";
export const NEW_AND_POPULAR = "New & Popular";
export const MY_LIST = "My List";
export const LANGUAGES = "Browse by Languages";

export const HOME_PATH = "/browse";
export const TV_SHOWS_PATH = "/shows";
export const MOVIES_PATH = "/movies";
export const NEW_AND_POPULAR_PATH = "/new-popular";
export const MY_LIST_PATH = "/my-list";
export const LANGUAGES_PATH = "/languages";

// account menu
export const PROFILES_PATH = "/profiles/manage";
export const ACCOUNT_PATH = "/account";
export const HELP_PATH = "/help";