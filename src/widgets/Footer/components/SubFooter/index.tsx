import s from "./style.module.scss";

import { HeartIcon } from "@/assets/icons";

import { FooterTitle } from "../FooterTitle";
import { CreatorWrapper } from "./CreatorWrapper";
import { FooterLink } from "./FooterLink";

export const SubFooter = () => {
  return (
    <div className={s.container}>
      <div>
        <FooterTitle type="tertiary">
          Аптека не осуществляет дистанционную продажу рецептурных лекарственных
          средств и БАД. Реализация указанной продукции запрещена действующим
          законодательством государства. Мы не нарушаем закон. Бронирование
          осуществляется на условиях последующего выкупа лекарственных
          препаратов и БАД в выбранном Вами аптечном пункте. Цены в аптечных
          пунктах могут отличаться от цен, указанных на сайте.
        </FooterTitle>
        <br />

        <FooterTitle type="tertiary">
          Для вопросов, предложений обращайтесь на <strong>info@aloe.az</strong>
          . По информации о нарушениях пишите на 
          <strong>speakup@aloe.az</strong> или 
          <FooterLink>эту форму</FooterLink>
        </FooterTitle>
      </div>

      <CreatorWrapper>
        <FooterTitle type="tertiary">© 2024 Все права защищены</FooterTitle>
        <FooterTitle type="tertiary">
          <div className={s.iconCenter}>
            Created with by:
            <HeartIcon />
            Amiroff Creative Agency
          </div>
        </FooterTitle>
      </CreatorWrapper>
    </div>
  );
};
