import React from 'react'
import { useSelector } from 'react-redux';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import Link from "next/link"

export default function TopFooter() {
    const { category } = useSelector(state => state.categories);
    const { subcategory } = useSelector(state => state.subcategories);

    return (
        <Container>
            <Row className="row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
                {category.map((i, k) =>
                    <Col key={k} className='mb-4'>
                        <Link href={`/category/${i.id}`}>
                            <a className='text-dark'>
                                <p className='fw-bold'>{i.name}</p>
                            </a>
                        </Link>

                        <ListGroup flush>
                            {subcategory.filter(x => x.catname == i.name).map((sub, k) =>
                                <ListGroupItem
                                    className='px-0 py-1'
                                    key={k}
                                >
                                    <Link href={`/subcategory/${sub.slug}`}>
                                        <a className='text-dark text-decoration-none'>
                                            {sub.name}
                                        </a>
                                    </Link>
                                </ListGroupItem>
                            )}
                        </ListGroup>
                    </Col>
                )}

            </Row>
        </Container >
    )
}
