import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function BottomFooter() {
    return (
        <Container fluid>
            <div
                style={{ height: "2px", overflow: "hidden" }}
            >
                <Row>
                    <Col xs={4} className='border border-primary border-2'></Col>
                    <Col xs={6} className='border border-success border-2'></Col>
                    <Col xs={2} className='border border-warning border-2'></Col>
                </Row>
            </div>
            <Container className='py-2'>
                <Row>
                    <Col>
                        &copy; candyshop powered by <a href='https://linkedin.com/in/ayşegül-avcu-74300147'>aysgl</a> = [<a className='was' href='https://www.behance.net/AysglAvcu'>designer</a>, <a href='https://github.com/aysgl'>ui developer</a>]
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center fw-bold h6'>
                        i <i className="bi bi-heart-fill text-primary mx-1"></i> my job
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
