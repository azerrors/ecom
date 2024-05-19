import s from "./style.module.scss";

type FooterTitleProps = {
  children: React.ReactNode;
  type?: string;
};

export const FooterTitle = ({
  children,
  type = "primary",
}: FooterTitleProps) => {
  if (type === "primary") {
    return <h4 className={s.primary}>{children}</h4>;
  }
  if (type === "secondary") {
    return <h4 className={s.secondary}>{children}</h4>;
  }

  if (type === "tertiary") {
    return <h4 className={s.tertiary}>{children}</h4>;
  }

  if (type === "primary2a") {
    return <h4 className={s.primary2a}>{children}</h4>;
  }
  if (type === "primary2b") {
    return <h4 className={s.primary2b}>{children}</h4>;
  }

  if (type === "secondary2") {
    return <h4 className={s.secondary2}>{children}</h4>;
  }
};
