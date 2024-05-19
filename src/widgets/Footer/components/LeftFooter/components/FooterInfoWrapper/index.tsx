import s from "./style.module.scss";

interface FooterInfoWrapperProps {
  children: React.ReactNode;
}

export const FooterInfoWrapper = ({ children }: FooterInfoWrapperProps) => {
  return <div className={s.info}>{children}</div>;
};
