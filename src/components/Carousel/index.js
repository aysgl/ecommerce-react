import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { fetchSliders } from '../../redux/slider';

export default function Carousel() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const dispatch = useDispatch();
    const slider = useSelector(state => state.slider.items);
    useEffect(() => {
        dispatch(fetchSliders())
    }, [dispatch]);

    const settings = {
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1500,
        autoplay: false,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 8,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    }

    return (
        <Container fluid className='slider position-relative'>
            {slider &&
                <>
                    <Slider
                        asNavFor={nav2}
                        arrows={false}
                        fade={true}
                        ref={(slider1) => setNav1(slider1)}>
                        {slider.map(slide =>
                            <img key={slide.id} src={slide.url} />
                        )}
                    </Slider>

                    <Slider
                        {...settings}
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                    >
                        {slider.map(slide =>
                            <div key={slide.id} className='px-md-2 pt-md-2 px-1 pt-1'>
                                <img className='img-fluid rounded' src={slide.thumbs}></img>
                            </div>
                        )}
                    </Slider>
                </>
            }
        </Container>
    )
}
