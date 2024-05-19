import Image from 'next/image';

import GiftIcon from '@/assets/images/gift-icon.png';
// TODO: Samani icon is not the same with the icon in the design files. Should contact with Semral.
import SamaniIcon from '@/assets/images/samani-icon.png';

import s from './style.module.scss';

export const Pills = () => {
  return (
    <div className={s.pills}>
      <a href="/" className={s.pillBtn}>
        <Image src={GiftIcon.src} className={s.pillIcon} width={39.25} height={39.25} alt="Gift" />
        Скидки до 30%
      </a>
      <a href="/" className={s.pillBtn}>
        <Image src={SamaniIcon.src} className={s.pillIcon} width={39.25} height={39.25} alt="Samani" />
        Акции
      </a>
    </div>
  );
};
