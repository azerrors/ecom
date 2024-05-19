import { Container } from '@/components/Container';
import { Lang } from '@/widgets/UpperNav/components/Lang';
import { Nav } from '@/widgets/UpperNav/components/Nav';
import { Phone } from '@/widgets/UpperNav/components/Phone';
import { Pills } from '@/widgets/UpperNav/components/Pills';

import s from './style.module.scss';

export const UpperNav = () => {
  return (
    <div className={s.upperNav}>
      <Container>
        <div className={s.content}>
          <Pills />
          <Nav />
          <Phone />
          <Lang />
        </div>
      </Container>
    </div>
  );
};
