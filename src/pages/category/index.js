import React, { useEffect } from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row, CardImg, Button } from 'reactstrap'
import Layout from '../../components/Layout'
import Seperate from '../../components/Stuff/Seperate'
import { catdata } from '../../data/catdata'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import HeadSeo from '../../components/Nav/HeadSeo'
import { fetchSubCategory } from '../../redux/subcategory'

export default function Category({ catlist }) {
    const router = useRouter()

    const dispatch = useDispatch();
    const subcategory = useSelector(state => state.subcategory.items);
    useEffect(() => {
        dispatch(fetchSubCategory())
    }, [dispatch]);
    return (
        <Layout>
            <HeadSeo />
            {catlist.map(i =>
                <Container className='category'>
                    <div className='bg-light rounded mb-3'>
                        <Row className='g-0'>
                            <Col md={8}>
                                <Card className='p-2 h-100'>
                                    <CardBody className='d-flex align-items-center'>
                                        <div>
                                            <CardTitle className='fs-2 lh-1'>
                                                {i.name}
                                            </CardTitle>

                                            {subcategory && subcategory.filter(x => x.catname == i.name).map((sub, k) =>
                                                <Button onClick={() => router.push(`/subcategory/${sub.id}`)} value={sub.name} key={k} size='sm' outline className='me-2 mb-2'>
                                                    {sub.name}
                                                </Button>
                                            )}

                                            <CardText>
                                                {i.desc}
                                            </CardText>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='bg-light'>
                                    <CardBody>
                                        <CardImg src={i.img} alt={i.id} />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row >
                    </div>

                </Container>
            )}
            <Seperate />
        </Layout >
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            catlist: catdata
        }
    }
}