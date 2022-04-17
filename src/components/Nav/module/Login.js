import React from 'react'
import { Button } from 'reactstrap'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"


export default function Login({ title }) {
    const { data: session } = useSession()
    return (
        <>
            {!session ?
                <Link href="/api/auth/signin">
                    <Button
                        color="secondary"
                        outline
                        className='me-1'
                        // onClick={(e) => {
                        //     e.preventDefault()
                        //     signIn('credentials', { redirect: false, callbackUrl: `${window.location.origin}/` })
                        // }}
                        onClick={() => signIn()}
                    ><i className="bi bi-person-fill me-1"></i>{title}
                    </Button>
                </Link> :
                <Link href="/api/auth/signout">
                    <Button
                        color="secondary"
                        outline
                        className='me-1'
                        // onClick={(e) => {
                        //     e.preventDefault()
                        //     signOut({ redirect: false, callbackUrl: `${window.location.origin}/` })
                        // }}
                        onClick={() => signOut()}
                    >
                        <i className="bi bi-person-fill me-1"></i>
                        welcome <strong>{session.user.name}</strong>
                    </Button>
                </Link>
            }
        </>
    )
}
