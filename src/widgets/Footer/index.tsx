import s from "./style.module.scss";

import LeftFooter from "./components/LeftFooter";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SubFooter } from "./components/SubFooter";
import RightFooter from "./components/RightFooter";
import MiddleFooter from "./components/MiddleFooter";

function Footer() {
  return (
    <Container className={s.container}>
      <Section className={s.section}>
        <div className={s.wrapper}>
          <LeftFooter />
          <MiddleFooter />
          <RightFooter />
        </div>
        <SubFooter />
      </Section>
    </Container>
  );
}

export default Footer;
