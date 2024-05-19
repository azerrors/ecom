import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import s from "./style.module.scss";

import { ClubsAndCashBackImages } from "./components/ClubsAndCashbackImage";
import { ClubsAndCashBacksWrapper } from "./components/ClubsAndCashbackWrapper";

export const ClubsAndCashBacks = () => {
  return (
    <Container className={s.container}>
      <Section className={s.section}>
        <ClubsAndCashBacksWrapper>
          <div className={s.club1} />
          <div className={s.club2} />
          <div className={s.cashback1} />
          <div className={s.cashback2} />
        </ClubsAndCashBacksWrapper>
        <div>
          <div className={s.video} />
        </div>
      </Section>
    </Container>
  );
};
