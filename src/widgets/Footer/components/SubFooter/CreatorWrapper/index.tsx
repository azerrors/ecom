import s from "./style.module.scss";

interface CreatorWrapperProps {
  children: React.ReactNode;
}

export const CreatorWrapper = ({ children }: CreatorWrapperProps) => {
  return <div className={s.creatorWrapper}>{children}</div>;
};
