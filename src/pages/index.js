import Layout from '../components/Layout';
import { Container } from "reactstrap";
import Carousel from '../components/Carousel';
import ProductCarousel from '../components/Product/ProductCarousel';
import Seperate from '../components/Stuff/Seperate';
import HeadSeo from '../components/Nav/HeadSeo';
import LoginTest from '../components/Nav/LoginTest';

export default function Home() {
  return (
    <Layout>
      <HeadSeo title="candyshop is awesome!"
        description="your description goes here on every page. 
                  Keep character count between 140 to 160 characters" />
      <Container>
        <Carousel />
        <Seperate />
        <ProductCarousel />
        <Seperate />
      </Container>
    </Layout>
  )
}
