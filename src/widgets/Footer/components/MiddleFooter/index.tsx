import { Container } from "@/components/Container";
import { FooterItem } from "./components/FooterItem";
import footerOption from "./options";
import s from "./style.module.scss";

function MiddleFooter() {
  return (
    <Container className={s.section}>
      {footerOption.map((item) => (
        <FooterItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default MiddleFooter;
