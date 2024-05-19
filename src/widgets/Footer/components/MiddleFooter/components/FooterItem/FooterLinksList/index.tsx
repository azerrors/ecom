import { FooterTitle } from "@/widgets/Footer/components/FooterTitle";
import s from "./style.module.scss";

interface FooterLinksListProps {
  children: React.ReactNode;
  show: unknown;
}

export const FooterLinksList = ({ children, show }: FooterLinksListProps) => {
  return (
    <div className={`${s.footerLinksList} ${show ? s.show : ""}`}>
      {children}
    </div>
  );
};
