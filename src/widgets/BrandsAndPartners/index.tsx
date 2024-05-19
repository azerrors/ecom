'use client';

import { useRef } from 'react';
import type { SwiperRef } from 'swiper/react';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Slider } from '@/widgets/BrandsAndPartners/components/Slider';
import { TitleSection } from '@/widgets/BrandsAndPartners/components/TitleSection';

import s from './style.module.scss';

// TODO: REWRITE WHOLE WIDGET. SLIDE CONTAINER LOGIC IS WRONG. https://swiperjs.com/demos#grid
export const BrandsAndPartners = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const controlSlider = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      // @ts-ignore
      sliderRef.current.swiper.slideNext();
    } else if (direction === 'prev') {
      // @ts-ignore
      sliderRef.current.swiper.slidePrev();
    }
  };

  return (
    <Section className={s.section}>
      <Container>
        <TitleSection controlSlider={controlSlider} />
        <Slider sliderRef={sliderRef} />
      </Container>
    </Section>
  );
};
