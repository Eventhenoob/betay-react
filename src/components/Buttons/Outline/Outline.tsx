import { Link } from "react-router-dom";
import style from "./style.module.css";
const Outline = ({ text, href = "" }: { text: string; href?: string }) => {
  return (
    <Link
      to={href}
      className={
        " text-xs z-40 md:text-base p-[1rem] px-4 md:px-8  " + style["btn"]
      }
      type="button"
    >
      {text}
    </Link>
  );
};

export default Outline;
