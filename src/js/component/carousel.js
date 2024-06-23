import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = () => {
    const settings = {
      dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Pausa en cada imagen por 3 segundos
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={require('../../img/image1.png').default} alt="Image 1" />
            </div>
            <div>
                <img src={require('../../img/image2.png').default} alt="Image 2" />
            </div>
            <div>
                <img src={require('../../img/image3.png').default} alt="Image 3" />
            </div>
            <div>
                <img src={require('../../img/image4.png').default} alt="Image 4" />
            </div>
        </Slider>
    );
};
