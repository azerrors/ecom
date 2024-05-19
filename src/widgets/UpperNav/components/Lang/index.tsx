import { AzFlagIcon } from '@/assets/icons';

import s from './style.module.scss';

export const Lang = () => {
  return (
    <button type="button" className={s.container}>
      <span className={s.text}>AZ</span>
      <span className={s.icon}>
        <AzFlagIcon />
      </span>
    </button>
  );
};
