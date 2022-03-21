// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"
// import GithubProvider from "next-auth/providers/github"
// import TwitterProvider from "next-auth/providers/twitter"
// import Auth0Provider from "next-auth/providers/auth0"
// // import AppleProvider from "next-auth/providers/apple"
// // import EmailProvider from "next-auth/providers/email"

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export default NextAuth({
//     // https://next-auth.js.org/configuration/providers/oauth
//     providers: [
//         /* EmailProvider({
//              server: process.env.EMAIL_SERVER,
//              from: process.env.EMAIL_FROM,
//            }),
//         // Temporarily removing the Apple provider from the demo site as the
//         // callback URL for it needs updating due to Vercel changing domains

//         Providers.Apple({
//           clientId: process.env.APPLE_ID,
//           clientSecret: {
//             appleId: process.env.APPLE_ID,
//             teamId: process.env.APPLE_TEAM_ID,
//             privateKey: process.env.APPLE_PRIVATE_KEY,
//             keyId: process.env.APPLE_KEY_ID,
//           },
//         }),
//         */
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_ID,
//             clientSecret: process.env.FACEBOOK_SECRET,
//         }),
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//         }),
//         TwitterProvider({
//             clientId: process.env.TWITTER_ID,
//             clientSecret: process.env.TWITTER_SECRET,
//         }),
//         Auth0Provider({
//             clientId: process.env.AUTH0_ID,
//             clientSecret: process.env.AUTH0_SECRET,
//             issuer: process.env.AUTH0_ISSUER,
//         }),
//     ],
//     theme: {
//         colorScheme: "light",
//     },
//     callbacks: {
//         async jwt({ token }) {
//             token.userRole = "admin"
//             return token
//         },
//     },
// })

import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Adresse email', type: 'email' },
                password: { label: 'Mot de passe', type: 'password' },
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const user = { id: 1, name: 'candy', email: 'candy@shop.com' };

                if (user.id === 1) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                }
                // If you return null or false then the credentials will be rejected
                return null;
                // You can also Reject this callback with an Error or with a URL:
                // throw new Error('error message') // Redirect to error page
                // throw '/path/to/redirect'        // Redirect to a URL
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/signout',
    },
});