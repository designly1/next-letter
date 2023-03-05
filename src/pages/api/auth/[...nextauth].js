import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"

export const authOptions = {
    providers: [
        CognitoProvider({
            clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
            issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER,
        }),
    ],
    theme: {
        colorScheme: "dark", // "auto" | "dark" | "light"
        brandColor: "#000", // Hex color code
        logo: "https://cdn.designly.biz/images/designly-logo-300.webp", // Absolute URL to image
        buttonText: "#fff" // Hex color code
    }
}

export default NextAuth(authOptions)