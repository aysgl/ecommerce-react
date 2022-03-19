import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Seperate from '../Stuff/Seperate'

export default function Service() {
    return (
        <Container>
            <Row className='row-cols-lg-3 row-cols-2 g-2'>
                <Col>
                    <div className='text-center bg-light rounded p-4 overflow-hidden h-100'>
                        <div className='display-1 text-primary icon-shadow'>
                            <i className="bi bi-cart-check"></i>
                        </div>
                        <span className='fw-bold'>get your needs the next day</span>
                    </div>
                </Col>
                <Col>
                    <div className='text-center bg-light rounded p-4 overflow-hidden h-100'>
                        <div className='display-1 text-success icon-shadow'>
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <span className='fw-bold'>shop safely</span>
                    </div>
                </Col>
                <Col>
                    <div className='text-center bg-light rounded p-4 overflow-hidden h-100'>
                        <div className='display-1 text-warning icon-shadow'>
                            <i className="bi bi-arrow-through-heart"></i>
                        </div>
                        <span className='fw-bold'> create easy return request</span>
                    </div>
                </Col>
            </Row>
            <Seperate />
        </Container>
    )
}
