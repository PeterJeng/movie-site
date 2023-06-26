export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/browse",
        "/shows",
        "/movies",
        "/new-popular",
        "/my-list",
        "/languages",
        "/profiles/manage",
        "/account",
        "/help"
    ]
}