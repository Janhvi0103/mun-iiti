import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
  "https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2RhcmUyY29tcGV0ZWNvbS5qcGc.png",
  "https://tse2.mm.bing.net/th?id=OIP._mqu7Qpqx_xfTYel9rmoCgAAAA&pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th?id=OIP.PW-nNQoxd0Dmnvm3vZaVkQAAAA&pid=Api&P=0&h=180",
  "https://bestmediainfo.com/uploads/2020/01/Youva-Logo_4.jpg",
  "http://logotypes101.com/logos/840/A849138A8845804B1C8DCFEC11F21709/Wiley.png",
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
