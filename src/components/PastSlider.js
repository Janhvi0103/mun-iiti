import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 // Import your CSS file for additional styling

const images = [
  "http://mun.iiti.ac.in/assets/img/sponsors/unstop.png",
  "http://mun.iiti.ac.in/assets/img/sponsors/sunkom.jpg",
  "http://mun.iiti.ac.in/assets/img/sponsors/ED.jpg",
  "http://mun.iiti.ac.in/assets/img/sponsors/Youvalogo.jpg",
  "http://mun.iiti.ac.in/assets/img/sponsors/wiley.png",
  "https://th.bing.com/th/id/OIP.-khNFXrRjsldQY66_N7BrAAAAA?rs=1&pid=ImgDetMain",
  "https://img.studydekho.com/uploads/c/2023/6/97981-22273-c-3-180x.jpg",
  "https://media.9curry.com/uploads/organization/image/2116/canara-bank-logo.png"
];

const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const PastSlider = () => {
  return (
    <div className="past-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PastSlider;
