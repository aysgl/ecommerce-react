import { useEffect, useState } from 'react';
import Slider from "react-slick";

export default function ProductGallery({ images }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider2, slider1]);

    const settingsMain = {
        initialSlide: 0,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    };

    const settingsThumbs = {
        infinite: false,
        slidesToShow: Math.min(images.length, 4),
        swipeToSlide: true,
        focusOnSelect: true,
        rows: 1,
        slidesPerRow: 1,
        arrows: true,
    };


    return (
        <div className='slick-carousel'>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
            >
                {images.map(i =>
                    <img className='rounded' alt="" src={i.url} key={i.id} />
                )}
            </Slider>

            <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
            >
                {images.map(i =>
                    <div key={i.id} className='pt-2'>
                        <img
                            className='rounded'
                            src={i.url}
                            alt={i.alt}
                            style={{
                                width: "100%",
                                height: 100,
                                objectFit: "cover",
                                cursor: "pointer"
                            }}
                        />
                    </div>
                )}
            </Slider>
        </div>
    );
};

