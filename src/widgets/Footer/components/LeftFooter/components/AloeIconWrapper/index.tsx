import s from "./style.module.scss";

interface AloeIconWrapperProps {
  children: React.ReactNode;
}

export const AloeIconWrapper = ({ children }: AloeIconWrapperProps) => {
  return <div className={s.aloeIconWrapper}>{children}</div>;
};
