import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import Layout from '../../components/Layout'
import ProductCard from '../../components/Product/ProductCard'
import Seperate from '../../components/Stuff/Seperate'
import { subcatdata } from '../../data/subcatdata'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeadSeo from '../../components/Nav/HeadSeo'

export default function SubCategory({ sub }) {
    const { product } = useSelector(state => state.products);
    const { subcategory } = useSelector(state => state.subcategories);
    const { colors } = useSelector(state => state.common);

    const router = useRouter();

    const [randomColor, setrandomColor] = useState([])

    useEffect(() => {
        setrandomColor(colors[Math.floor((Math.random() * 3))])
    }, [sub.id])

    return (
        <Layout>
            <HeadSeo />
            <Container className='category'>
                <div style={{ backgroundColor: `rgba(var(--bs-${randomColor}-rgb), .2)` }} className="rounded mb-2">
                    <Row className='g-0'>
                        <Col md={9}>
                            <Card className='p-2 h-100 bg-transparent border-0'>
                                <CardBody className='d-flex align-items-center'>
                                    <div>
                                        <CardTitle className='fs-2 lh-1'>
                                            {sub.name}
                                        </CardTitle>
                                        {subcategory.filter(x => x.catname === sub.catname).map((sub, k) =>
                                            <Link key={k} href={`/subcategory/${sub.slug}`}>
                                                <Button outline size='sm' className={`me-2 mb-2 ${router.query.slug == sub.slug ? "btn-dark text-white" : null}`}>
                                                    {sub.name}
                                                </Button>
                                            </Link>
                                        )}
                                        <CardText>
                                            {sub.desc}
                                        </CardText>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='bg-transparent border-0'>
                                <CardBody>
                                    <CardImg src={sub.img} alt={sub.id} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row >
                </div>

                {product.filter(x => x.subcategoryname == sub.name) != 0 ?
                    <Row className='row-cols-md-4 g-2'>
                        {product.filter(x => x.subcategoryname == sub.name).map(pro =>
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
    const paths = subcatdata.map((sub) => ({
        params: {
            slug: sub.slug,
        }
    }))

    return {
        paths, fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const subcategoryList = subcatdata.filter((sub) => sub.slug === params.slug)
    return {
        props: {
            sub: subcategoryList[0]
        }
    }
}
