"use client";
import { useEffect, useState } from "react";
import style from "./AutoChangeableText.module.css";
interface Props {
  textArray: string[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AutoChangeableText = ({
  textArray,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}: Props) => {
  const [currentSelected, setCurrentSelected] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSelected((previousItem) => {
        return previousItem === textArray.length - 1 ? 0 : previousItem + 1;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full justify-center items-center">
      {textArray.map((text, index) => (
        <p
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          key={index}
          className={
            style["textItem"] +
            " text-slate-300 absolute top-0 left-0 md:text-xl lg:text-2xl w-full text-center font-light font-main " +
            (currentSelected === index ? style["active"] : "")
          }
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default AutoChangeableText;
