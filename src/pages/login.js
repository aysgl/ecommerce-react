import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function Login() {
    return (
        <Container className='vh-100'>
            <Row className='h-100 d-flex align-items-center'>
                <Col lg={5} md={8} className="mx-auto">
                    <Form inline className='bg-light rounded p-4'>
                        <FormGroup floating>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Label for="exampleEmail">
                                Email
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            <Label for="examplePassword">
                                Password
                            </Label>
                        </FormGroup>
                        <Button>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
