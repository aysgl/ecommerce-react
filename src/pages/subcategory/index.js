import Head from 'next/head'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row, CardImg, Button, CardHeader, CardImgOverlay } from 'reactstrap'
import Layout from '../../components/Layout'
import Seperate from '../../components/Stuff/Seperate'
import { catdata } from '../../data/catdata'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Category({ catlist }) {
    const router = useRouter()
    const { subcategory } = useSelector(state => state.subcategories);
    return (
        <Layout>
            <Head>
                <title>Snipcart Store</title>
            </Head>
            {catlist.map(i =>
                <Container className=''>
                    <Card className='p-2 h-100 mb-3'>
                        <CardBody>
                            <CardTitle className='fs-2 lh-1'>
                                {i.name}
                            </CardTitle>
                            <Row className='row-cols-md-5 row-cols-2 g-2 text-center'>
                                {subcategory.filter(x => x.catname == i.name).map((sub, k) =>
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