import { useState } from "react";
import { GoDot } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import style from "./style.module.css";

interface ArrowButtonProps {
  direction: "left" | "right" | "top" | "bottom";
  onClick: () => void;
  text: string;
}
const ArrowButton = ({ direction, onClick, text }: ArrowButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onClick={onClick}
      className="flex text-sm gap-0 justify-center items-center "
      type="button"
    >
      <span
        className={
          "text-xs text-slate-400 p-2 " +
          (hover &&
            "bg-white   font-bold rounded-full transition-all duration-500 mr-2 text-black")
        }
      >
        {!hover ? (
          <GoDot className="" />
        ) : (
          <>
            {direction === "bottom" && (
              <GoArrowDown className={"font-bold text-black"} />
            )}
            {direction === "top" && (
              <GoArrowUp className={"font-bold text-black"} />
            )}
            {direction === "right" && (
              <GoArrowRight className={"font-bold text-black"} />
            )}
            {direction === "left" && (
              <GoArrowLeft className={"font-bold text-black"} />
            )}
          </>
        )}
      </span>
      <span
        className={
          "text-white  inline-flex flex-col uppercase transition-all duration-500 " +
          (hover && " font-bold text-white ")
        }
      >
        {text}
        <span
          className={
            "w-full h-[1px] transition-all duration-500 text-slate-100 bg-white " +
            (hover && " w-0 ")
          }
        ></span>
      </span>
    </button>
  );
};

export default ArrowButton;
