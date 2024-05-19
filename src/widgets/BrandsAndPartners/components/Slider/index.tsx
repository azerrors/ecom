'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';
import { Navigation } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideItem } from '@/widgets/BrandsAndPartners/components/SlideItem';

interface SliderProps {
  sliderRef: React.Ref<SwiperRef>;
}

export const Slider = ({ sliderRef }: SliderProps) => {
  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={1}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem />
      </SwiperSlide>
    </Swiper>
  );
};
