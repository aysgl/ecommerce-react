import React from 'react'
import { Card, CardBody, CardImg, CardText, Col, Container, Row } from 'reactstrap'
import BigStars from './module/BigStars'
import Comment from './module/Comment'

export default function Rating({ img, rating, title, comments }) {
    return (
        <Container>
            <Row className='g-2'>
                <Col md={4}>
                    <Card>
                        <CardBody className='bg-light overflow-hidden'>
                            <CardImg src={img} />
                            <CardText tag="div" className='mb-3 mt-1 fs-3 lh-1 fw-bold icon-shadow'>{title}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <div className="border h-100 d-flex align-items-center justify-content-center rounded p-3 bg-light overflow-hidden">
                        <BigStars stars={rating} />
                    </div>
                </Col>
                <Col md={4}>
                    <Comment comments={comments} />
                </Col>
            </Row>
        </Container >
    )
}
