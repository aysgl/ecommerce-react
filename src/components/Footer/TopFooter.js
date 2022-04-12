import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import Link from "next/link"
import { fetchCategory } from '../../redux/category';
import { fetchSubCategory } from '../../redux/subcategory';

export default function TopFooter() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.items);
    const subcategory = useSelector(state => state.subcategory.items);
    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchSubCategory())
    }, [dispatch]);

    return (
        <Container>
            <Row className="row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
                {category && category.map((i, k) =>
                    <Col key={k} className='mb-4'>
                        <Link href={`/category/${i.id}`}>
                            <a className='text-dark'>
                                <p className='fw-bold'>{i.name}</p>
                            </a>
                        </Link>

                        <ListGroup flush>
                            {subcategory && subcategory.filter(x => x.catname == i.name).map((sub, k) =>
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
