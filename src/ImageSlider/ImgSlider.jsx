import React from "react";
import "./imgSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_image_1 from "./Images/image-1.jpg";
import slide_image_2 from "./Images/image-2.jpg";
import slide_image_3 from "./Images/image-3.jpg";
import slide_image_4 from "./Images/image-4.jpg";

const ImgSlider = () => {
  return (
    <div className="container">
      <h1 className="heading">Past Edition Photos</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImgSlider;
