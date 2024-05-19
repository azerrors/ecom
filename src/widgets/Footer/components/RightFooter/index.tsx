import React from "react";

import s from "./style.module.scss";
import { FooterTitle } from "../FooterTitle";
import { Container } from "@/components/Container";

function RightFooter() {
  return (
    <Container className={s.section}>
      <div>
        <FooterTitle type="secondary">
          Не забудьте загрузить на приложение для получения выгодных скидок
        </FooterTitle>
      </div>
      <div>
        <div className={s.qr}></div>
        <div className={s.downloadLinks}></div>
      </div>
    </Container>
  );
}

export default RightFooter;
