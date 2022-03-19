import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import Title from '../Stuff/Title'

export default function Comments({ title, comments }) {
    const [randomNumber, setrandomNumber] = useState(0)

    useEffect(() => {

        setrandomNumber(color[Math.floor((Math.random() * 4))])
    }, [randomNumber])

    const color = ["primary", "success", "info", "warning"]
    return (
        <Container>
            <Title title={title} />
            <div className='border rounded p-lg-5 p-4'>
                {comments.map((i, k) =>
                    <div key={k} className="position-relative my-3 mx-lg-5">
                        <div className="position-absolute top-0 start-0">
                            <div className={`bg-light rounded-pill d-flex align-items-center text-${color[Math.floor((Math.random() * 4))]} overflow-hidden fs-2 px-3 me-3 user`}>
                                <span className='icon-shadow'>{i.name}</span>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='rounded bg-light p-2 ms-md-5'>
                                <p className='mb-0'>
                                    {i.body}
                                </p>
                                <span className='small text-muted'>{i.datetime}</span>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </Container >
    )
}
