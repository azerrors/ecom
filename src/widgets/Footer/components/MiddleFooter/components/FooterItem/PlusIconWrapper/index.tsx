import s from "./style.module.scss";

interface PlusIconWrapperProps {
  children: React.ReactNode;
  onShow: () => {};
}

export const PlusIconWrapper = ({ children, onShow }: PlusIconWrapperProps) => {
  return (
    <div className={s.plusIconWrapper} onClick={onShow}>
      {children}
    </div>
  );
};
