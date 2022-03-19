import React from 'react'
import { Button } from 'reactstrap'

export default function Login({ title }) {
    return (
        <Button
            color="secondary"
            outline
            className='me-1'
        ><i className="bi bi-person-fill me-1"></i>{title}
        </Button>
    )
}
