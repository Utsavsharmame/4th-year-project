import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";

import Course_Card from "./Course_Card";

const CourseSlider = ({ Course }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={200}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      className="my-Swiper"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      navigation={true}
    >
      {Course?.length ? (
        Course.map((course, index) => (
          <SwiperSlide key={index}>
            <Course_Card course={course} Height="h-[250px]" />
          </SwiperSlide>
        ))
      ) : (
        <p>No Course Found</p>
      )}
    </Swiper>
  );
};

export default CourseSlider;
