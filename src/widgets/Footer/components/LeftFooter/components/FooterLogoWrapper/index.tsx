import s from "./style.module.scss";

interface FooterLogoWrapperProps {
  children: React.ReactNode;
}

export const FooterLogoWrapper = ({ children }: FooterLogoWrapperProps) => {
  return <div className={s.logoWrapper}>{children}</div>;
};
