import React, { useEffect } from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row, CardImg, Button, CardHeader, CardImgOverlay } from 'reactstrap'
import Layout from '../../components/Layout'
import Seperate from '../../components/Stuff/Seperate'
import { catdata } from '../../data/catdata'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import HeadSeo from '../../components/Nav/HeadSeo'
import { fetchSubCategory } from '../../redux/subcategory'

export default function Category({ catlist }) {
    const dispatch = useDispatch();
    const subcategory = useSelector(state => state.subcategory.items);
    useEffect(() => {
        dispatch(fetchSubCategory())
    }, [dispatch]);

    return (
        <Layout>
            <HeadSeo />
            {catlist.map(i =>
                <Container className=''>
                    <Card className='p-2 h-100 mb-3'>
                        <CardBody>
                            <CardTitle className='fs-2 lh-1'>
                                {i.name}
                            </CardTitle>
                            <Row className='row-cols-md-5 row-cols-2 g-2 text-center'>
                                {subcategory && subcategory.filter(x => x.catname == i.name).map((sub, k) =>
                                    <Col>
                                        <Link href={`subcategory/${sub.slug}`}>
                                            <a key={k} className="subcategory">
                                                <Card>
                                                    {sub.img != null ?
                                                        <CardImg
                                                            alt="Card image cap"
                                                            src={sub.img}
                                                            width="100%"
                                                        /> : null
                                                    }
                                                    <CardImgOverlay className='text-white d-flex align-items-center justify-content-center'>
                                                        <strong>{sub.name}</strong>
                                                    </CardImgOverlay>
                                                </Card>
                                            </a>
                                        </Link>
                                    </Col>
                                )}
                            </Row>

                            <CardText>
                                {i.desc}
                            </CardText>
                        </CardBody>
                    </Card>
                </Container>
            )
            }
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