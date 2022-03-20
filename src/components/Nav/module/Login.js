import React from 'react'
import { Button } from 'reactstrap'
import Link from 'next/link'

export default function Login({ title }) {
    return (
        <Link href="/login">
            <Button
                color="secondary"
                outline
                className='me-1'
            ><i className="bi bi-person-fill me-1"></i>{title}
            </Button>
        </Link>
    )
}
