import React from 'react';

import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons';

import s from './style.module.scss';

interface TitleSectionProps {
  controlSlider: (d: 'next' | 'prev') => void;
}

export const TitleSection = ({ controlSlider }: TitleSectionProps) => {
  return (
    <div className={s.titleSection}>
      <div className={s.info}>
        <h3 className={s.title}>Бренды и партнеры</h3>
        <a href="/" className={s.seeAll}>
          Посмотреть все <ArrowRightIcon />
        </a>
      </div>
      <div className={s.nav}>
        <button
          type="button"
          aria-label="Previous Slide"
          className={s.navItem}
          onClick={() => controlSlider('prev')}
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Next Slide"
          className={s.navItem}
          onClick={() => controlSlider('next')}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};
