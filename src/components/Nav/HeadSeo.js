import Head from "next/head"
import { useRouter } from "next/router"

const HeadSeo = ({ title, desc, url, img, children }) => {
    const router = useRouter()
    console.log(router);
    return (
        <Head>
            <title>{title ? title : router.query.slug || router.query.products}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={desc} />

            {/* twitter metadata */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={img} />

            {/* canonical link */}
            <link rel="canonical" href={url} />
            {children}
        </Head>
    )
}

export default HeadSeo