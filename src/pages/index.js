import Head from 'next/head';
import Layout from '../components/Layout';
import { Container } from "reactstrap";
import Carousel from '../components/Carousel';
import ProductCarousel from '../components/Product/ProductCarousel';
import Seperate from '../components/Stuff/Seperate';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>candyshop</title>
      </Head>
      <Container>
        <Carousel />
        <Seperate />
        <ProductCarousel />
        <Seperate />
      </Container>
    </Layout>
  )
}
