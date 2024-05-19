import React from 'react';

import { GreenDotIcon } from '@/assets/icons';

import s from './style.module.scss';

interface NavItemProps {
  link: string;
  isImportant?: boolean;
  children: React.ReactNode;
}

export const NavItem = ({ link, isImportant, children }: NavItemProps) => {
  const className = isImportant ? `${s.navItem} ${s.isImportant}` : `${s.navItem}`;

  return (
    <a href={link} className={className}>
      {isImportant && (
        <span className={s.greenDot}>
          <GreenDotIcon />
        </span>
      )}
      {children}
    </a>
  );
};
