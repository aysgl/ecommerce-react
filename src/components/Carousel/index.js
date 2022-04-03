import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Container } from 'reactstrap';

export default function Carousel() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const { slider } = useSelector(state => state.slider);

    // console.log("sliders", sliders);

    return (
        <Container fluid className='slider position-relative'>
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
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={8}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {slider.map(slide =>
                    <div key={slide.id} className='px-2 pt-2'>
                        <img className='img-fluid rounded' src={slide.thumbs}></img>
                    </div>
                )}
            </Slider>
        </Container >
    )
}
