import Head from 'next/head'
import Layout from '../../components/Layout';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import ProductGallery from '../../components/Product/ProductGallery';
import ProductCarousel from '../../components/Product/ProductCarousel';
import Stars from '../../components/Product/module/Stars';
import Seperate from '../../components/Stuff/Seperate';
import Rating from '../../components/Product/Rating';
import { prodata } from "../../data/prodata"
import { comdata } from "../../data/comdata"
import { useEffect, useState } from 'react';
import Comments from '../../components/Product/Comments';
import HeadSeo from '../../components/Nav/HeadSeo';

export default function Product({ pro }) {
    const [comments, setComment] = useState([1])
    const total = (pro.price * pro.discount) / 100
    const amount = pro.price - total;

    useEffect(() => {
        setComment(comdata.filter(x => x.catId == pro.catId))
    }, [pro.catId])

    return (
        <Layout>
            <HeadSeo />
            <Container>
                <div className='bg-light rounded'>
                    <Row className='g-0'>
                        <Col md={6} className="p-md-5 p-2 text-center">
                            <ProductGallery images={pro.images} />
                        </Col>
                        <Col md={6}>
                            <Card className='p-3 h-100'>
                                <CardBody className='d-flex align-items-center'>
                                    <div>
                                        <CardTitle tag="h1">
                                            {pro.title}
                                        </CardTitle>
                                        <CardText>
                                            {pro.desc}
                                        </CardText>
                                        <Row className='d-flex align-items-end mb-4'>
                                            <Col>
                                                {pro.discount == null ?
                                                    <CardText tag="h1" className='mb-0'>
                                                        {pro.price}
                                                    </CardText>
                                                    :
                                                    <CardText className='mb-0 fs-5 lh-1'>
                                                        <span className='text-decoration-line-through text-secondary'>{pro.price}$</span>
                                                        <span className='text-secondary ms-2'>%{pro.discount}</span>
                                                        <span className='d-flex h1 mb-0'>{amount.toFixed(2)}$</span>
                                                    </CardText>
                                                }
                                            </Col>
                                            <Col className='d-flex justify-content-end'>
                                                {pro.stars === 0 ? null :
                                                    <Stars stars={pro.stars} />
                                                }
                                            </Col>
                                        </Row>

                                        <button className="snipcart-add-item btn btn-dark"
                                            data-item-id={pro.id}
                                            data-item-image={pro.img}
                                            data-item-name={pro.title}
                                            data-item-description={pro.desc}
                                            data-item-url={pro.slug}
                                            data-item-price={pro.price}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row >
                </div>
            </Container>
            <Seperate />
            <ProductCarousel title="you may also be interested in" />
            <Seperate />
            <Rating title={pro.title} img={pro.img} rating={pro.stars} comments={comments.length} />
            <Seperate />
            {comments != 0 ?
                <><Comments title="comments" comments={comments} /> <Seperate /></> : null
            }

        </Layout >

    )
}


export const getStaticPaths = async () => {
    const paths = prodata.map((pro) => ({
        params: {
            products: pro.slug,
        }
    }))

    return {
        paths, fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const productList = prodata.filter((pro) => pro.slug === params.products)
    return {
        props: {
            pro: productList[0]
        }
    }
}
