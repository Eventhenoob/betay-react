import React from "react";
import style from "./style.module.css";

const RainbowHover = ({ text }: { text: string }) => {
  return (
    <button
      className={" text-xs md:text-base py-4 px-8 " + style["glow-on-hover"]}
      type="button"
    >
      {text}
    </button>
  );
};

export default RainbowHover;
