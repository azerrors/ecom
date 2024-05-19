import BrandMock1 from '@/assets/images/mocks/brand1.svg';
import BrandMock2 from '@/assets/images/mocks/brand2.svg';
import BrandMock3 from '@/assets/images/mocks/brand3.svg';
import BrandMock4 from '@/assets/images/mocks/brand4.svg';
import BrandMock5 from '@/assets/images/mocks/brand5.svg';
import BrandMock6 from '@/assets/images/mocks/brand6.svg';
import BrandMock7 from '@/assets/images/mocks/brand7.svg';
import BrandMock8 from '@/assets/images/mocks/brand8.svg';
import BrandMock9 from '@/assets/images/mocks/brand9.svg';
import BrandMock10 from '@/assets/images/mocks/brand10.svg';
import BrandMock11 from '@/assets/images/mocks/brand11.svg';
import BrandMock12 from '@/assets/images/mocks/brand12.svg';
import BrandMock13 from '@/assets/images/mocks/brand13.svg';
import BrandMock14 from '@/assets/images/mocks/brand14.svg';
import { Image } from '@/components/Image';

import s from './style.module.scss';

export const SlideItem = () => {
  const data = [
    {
      imgSrc: BrandMock1,
      link: '/',
    },
    {
      imgSrc: BrandMock2,
      link: '/',
    },
    {
      imgSrc: BrandMock3,
      link: '/',
    },
    {
      imgSrc: BrandMock4,
      link: '/',
    },
    {
      imgSrc: BrandMock5,
      link: '/',
    },
    {
      imgSrc: BrandMock6,
      link: '/',
    },
    {
      imgSrc: BrandMock7,
      link: '/',
    },
    {
      imgSrc: BrandMock8,
      link: '/',
      autoHeight: true,
    },
    {
      imgSrc: BrandMock9,
      link: '/',
    },
    {
      imgSrc: BrandMock10,
      link: '/',
    },
    {
      imgSrc: BrandMock11,
      link: '/',
    },
    {
      imgSrc: BrandMock12,
      link: '/',
      autoHeight: true,
    },
    {
      imgSrc: BrandMock13,
      link: '/',
      autoHeight: true,
    },
    {
      imgSrc: BrandMock14,
      link: '/',
    },
  ];

  return (
    <div className={s.slidesContainer}>
      {data.map(({ imgSrc, link, autoHeight }) => (
        <a key={imgSrc.src} href={link} className={s.slideItem}>
          <Image src={imgSrc.src} className={s.slideImage} autoHeight={autoHeight} alt="Brand" />
        </a>
      ))}
    </div>
  );
};
