import style from "./style.module.css";

interface NavigationIconProps {
  onClick: () => void;
  isActive: boolean;
}

const NavigationIcon = ({ onClick, isActive }: NavigationIconProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "justify-center items-center flex flex-col " +
        style["button"] +
        " " +
        (isActive && style["active"])
      }
    >
      <span className={style["icon"]}></span>
    </button>
  );
};

export default NavigationIcon;
