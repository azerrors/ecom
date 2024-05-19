import { NavItem } from '@/widgets/UpperNav/components/NavItem';

import s from './style.module.scss';

export const Nav = () => {
  const navItems = [
    {
      title: 'Программа лояльности',
      link: '/',
      isImportant: true,
    },
    {
      title: 'Промо',
      link: '/',
      isImportant: false,
    },
    {
      title: 'Мобильное приложение',
      link: '/',
      isImportant: false,
    },
    {
      title: 'Работа и карьера',
      link: '/',
      isImportant: false,
    },
    {
      title: 'Адреса аптек',
      link: '/',
      isImportant: false,
    },
    {
      title: 'Доставка',
      link: '/',
      isImportant: false,
    },
  ];

  return (
    <nav className={s.nav}>
      {navItems.map(({ title, link, isImportant }) => (
        <NavItem key={title} link={link} isImportant={isImportant}>
          {title}
        </NavItem>
      ))}
    </nav>
  );
};
