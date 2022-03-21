import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Container } from "reactstrap"


export default function Page() {
    const { data: session } = useSession()

    return (
        <Container>
            <div >
                {!session && (
                    <>
                        <span >
                            You are not signed in
                        </span>
                        <a
                            href={`/api/auth/signin`}
                            onClick={(e) => {
                                e.preventDefault()
                                signIn('credentials', { redirect: false, callbackUrl: `${window.location.origin}/` })
                            }}
                        >
                            Login
                        </a>
                    </>
                )}
                {session?.user && (
                    <>
                        {session.user.image && (
                            <span
                                style={{ backgroundImage: `url('${session.user.image}')` }}
                            />
                        )}
                        <span >
                            <small>Signed in as</small>
                            <br />
                            <strong>{session.user.email ?? session.user.name}</strong>
                        </span>
                        <a
                            href={`/api/auth/signout`}
                            onClick={(e) => {
                                e.preventDefault()
                                signOut({ redirect: false, callbackUrl: `${window.location.origin}/` })
                            }}
                        >
                            Sign out
                        </a>
                    </>
                )}
            </div>
        </Container>
    )
}