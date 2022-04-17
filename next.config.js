module.exports = {
    reactStrictMode: true,
    env: {
        URL: process.env.URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        EMAIL_SERVER: process.env.EMAIL_SERVER,
        EMAIL_FROM: process.env.EMAIL_FROM,
        DATABASE_URL: process.env.DATABASE_URL,
    },
}
