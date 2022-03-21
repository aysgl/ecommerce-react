import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import Layout from '../../components/Layout'
import ProductCard from '../../components/Product/ProductCard'
import Seperate from '../../components/Stuff/Seperate'
import { catdata } from '../../data/catdata'
import Link from 'next/link'

export default function SubCategory({ cat }) {
    const { product } = useSelector(state => state.products);
    const { subcategory } = useSelector(state => state.subcategories);

    return (
        <Layout>
            <Head>
                <title>{cat.title} - Snipcart Store</title>
            </Head>
            <h6 className='container'>Breadcrumbs gelecek </h6>
            <Container className='category'>
                <div className='bg-light rounded mb-2'>
                    <Row className='g-0'>
                        <Col md={9}>
                            <Card className='p-2 h-100'>
                                <CardBody className='d-flex align-items-center'>
                                    <div>
                                        <CardTitle className='fs-2 lh-1'>
                                            {cat.name}
                                        </CardTitle>

                                        {subcategory.filter(x => x.catname == cat.name).map((sub, k) =>
                                            <Link href={`/subcategory/${sub.slug}`}>
                                                <Button value={cat.name} key={k} size='sm' outline className='me-2 mb-2'>
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
                        <Col>
                            <Card className='bg-light'>
                                <CardBody>
                                    <CardImg src={cat.img} alt={cat.id} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row >
                </div>
                {product.filter(x => x.categoryname) ?
                    <Row className='row-cols-md-4 g-2'>
                        {product.filter(x => x.categoryname == cat.name).map(pro =>
                            <Col>
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
