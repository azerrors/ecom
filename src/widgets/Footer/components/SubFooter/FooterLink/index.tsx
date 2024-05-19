import s from "./style.module.scss";

interface FooterLinkProps {
  children: React.ReactNode;
}

export const FooterLink = ({ children }: FooterLinkProps) => {
  return (
    <a href="#1" className={s.link}>
      {children}
    </a>
  );
};
