import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import Layout from '../../components/Layout'
import ProductCard from '../../components/Product/ProductCard'
import Seperate from '../../components/Stuff/Seperate'
import { catdata } from '../../data/catdata'
import Link from 'next/link'
import HeadSeo from '../../components/Nav/HeadSeo'
import { fetchProducts } from '../../redux/product'
import { fetchSubCategory } from '../../redux/subcategory'

export default function Category({ cat }) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.items);
    const subcategory = useSelector(state => state.subcategory.items);
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchSubCategory())
    }, [dispatch]);

    const { colors } = useSelector(state => state.common);

    const [randomColor, setrandomColor] = useState([])

    useEffect(() => {
        setrandomColor(colors[Math.floor((Math.random() * 3))])
    }, [cat.id])

    return (
        <Layout>
            <HeadSeo />
            <Container className='category'>
                <div style={{ backgroundColor: `rgba(var(--bs-${randomColor}-rgb), .2)` }} className="rounded mb-2">
                    <Row className='g-0'>
                        <Col md={8}>
                            <Card className='p-2 h-100 bg-transparent border-0'>
                                <CardBody className='d-flex align-items-center'>
                                    <div>
                                        <CardTitle className='fs-2 lh-1'>
                                            {cat.name}
                                        </CardTitle>

                                        {subcategory && subcategory.filter(x => x.catname == cat.name).map((sub, k) =>
                                            <Link key={k} href={`/subcategory/${sub.slug}`}>
                                                <Button value={cat.name} size='sm' outline className='me-2 mb-2'>
                                                    {sub.name ? sub.name : null}
                                                </Button>
                                            </Link>
                                        )}
                                        <CardText>
                                            {cat.desc}
                                        </CardText>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="d-none d-md-block">
                            <Card className='bg-transparent border-0'>
                                <CardBody>
                                    <CardImg src={cat.img} alt={cat.id} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row >
                </div>
                {product && product.filter(x => x.categoryname) ?
                    <Row className='row-cols-lg-4 row-cols-md-3 row-cols-2 g-2'>
                        {product.filter(x => x.categoryname == cat.name).map((pro, k) =>
                            <Col key={k}>
                                <ProductCard
                                    key={pro.id}
                                    title={pro.title}
                                    desc={pro.desc}
                                    price={pro.price}
                                    id={pro.id}
                                    slug={pro.slug}
                                    discount={pro.discount}
                                    img={pro.img}
                                />
                            </Col>
                        )}
                    </Row> :
                    <div className='text-dark text-center border rounded p-5'>
                        <i className="bi bi-emoji-dizzy display-1"></i>
                        <p className='fs-4 fw-bold mb-0'>sorry</p>
                        <p> we have no product this category</p>
                    </div>
                }
            </Container>
            <Seperate />
        </Layout >
    )
}

export const getStaticPaths = async () => {
    const paths = catdata.map((cat) => ({
        params: {
            slug: cat.slug,
        }
    }))

    return {
        paths, fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const categoryList = catdata.filter((cat) => cat.slug === params.slug)
    return {
        props: {
            cat: categoryList[0]
        }
    }
}
