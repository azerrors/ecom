import {
  AloeIcon,
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/assets/icons";
import { Container } from "@/components/Container";
import { FooterTitle } from "../FooterTitle";
import { AloeIconWrapper } from "./components/AloeIconWrapper";
import { FooterInfoWrapper } from "./components/FooterInfoWrapper";
import { FooterLogoWrapper } from "./components/FooterLogoWrapper";
import { FooterLogosWrapper } from "./components/FooterLogosWrapper";
import s from "./style.module.scss";

function LeftFooter() {
  return (
    <Container className={s.section}>
      <AloeIconWrapper>
        <AloeIcon />
      </AloeIconWrapper>

      <div>
        <div>
          <FooterTitle type="secondary2">Свяжитесь с нами</FooterTitle>
          <FooterTitle type="secondary">
            Справочная служба. С 8:00 до 22:00 по бакинскому времени.
          </FooterTitle>
        </div>
        <div>
          <FooterInfoWrapper>
            <PhoneIcon />
            <FooterTitle type="primary2a">*3103</FooterTitle>
          </FooterInfoWrapper>
          <FooterInfoWrapper>
            <EnvelopeIcon />
            <FooterTitle type="primary2b">info@aloe.az</FooterTitle>
          </FooterInfoWrapper>
        </div>
      </div>

      <div>
        <FooterTitle type="secondary2">Мы в соцсетях</FooterTitle>
        <FooterLogosWrapper>
          <FooterLogoWrapper>
            <FacebookIcon />
          </FooterLogoWrapper>
          <FooterLogoWrapper>
            <InstagramIcon />
          </FooterLogoWrapper>
          <FooterLogoWrapper>
            <YoutubeIcon />
          </FooterLogoWrapper>
          <FooterLogoWrapper>
            <LinkedinIcon />
          </FooterLogoWrapper>
        </FooterLogosWrapper>
      </div>
    </Container>
  );
}

export default LeftFooter;
