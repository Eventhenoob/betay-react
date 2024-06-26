import { Link } from "react-router-dom";
import style from "./style.module.css";
const PremiumButton = ({
  text,
  href = "",
}: {
  text: string;
  href?: string;
}) => {
  return (
    <Link
      to={href}
      className={
        " text-xs font-bold active:scale-95 uppercase font-heading italic z-40 md:text-base hover:scale-110 p-[1rem] px-4 md:px-8  " +
        style["btn"]
      }
      type="button"
    >
      {text}
    </Link>
  );
};

export default PremiumButton;
