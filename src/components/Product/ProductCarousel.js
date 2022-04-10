import { useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "reactstrap";
import Title from "../Stuff/Title";
import { fetchProducts } from "../../redux/product";

export default function ProductCarousel({ title }) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.items);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const settings = {
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1500,
        adaptiveHeight: true,
        centerPadding: 10,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    }

    return (
        <Container className="slick-carousel">
            {title &&
                <Title title={title} />
            }
            <Slider {...settings} className="h-100">
                {product && product.map((pro, i) =>
                    <ProductCard
                        key={i}
                        title={pro.title.substring(0, 40)}
                        desc={pro.desc}
                        price={pro.price}
                        id={pro.id}
                        slug={pro.slug}
                        discount={pro.discount}
                        img={pro.img}
                    />
                )}
            </Slider>
        </Container>
    );
}