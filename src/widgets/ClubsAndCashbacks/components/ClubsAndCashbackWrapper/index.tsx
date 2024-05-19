import s from "./style.module.scss";

interface ClubsAndCashBacksWrapperProps {
  children: React.ReactNode;
}

export const ClubsAndCashBacksWrapper = ({
  children,
}: ClubsAndCashBacksWrapperProps) => {
  return <div className={s.wrapper}>{children}</div>;
};
