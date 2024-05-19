import s from "./style.module.scss";

interface FooterLogosWrapperProps {
  children: React.ReactNode;
}

export const FooterLogosWrapper = ({ children }: FooterLogosWrapperProps) => {
  return <div className={s.logosWrapper}>{children}</div>;
};
