import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import SliderContent from "./SliderContent";
import slider from "/public/img/slider.png";
import slider2 from "/public/img/man4.png";
import slider3 from "/public/img/man3.png";
export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      loop={true}
      lazy={true}
      autoplay={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <SliderContent slider={slider} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent slider={slider2} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent slider={slider3} />
      </SwiperSlide>
    </Swiper>
  );
}
