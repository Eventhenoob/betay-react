import style from "./style.module.css";
const Outline = ({ text }: { text: string }) => {
  return (
    <button
      className={" text-xs z-40 md:text-base p-[1rem] px-4 md:px-8  " + style["btn"]}
      type="button"
    >
      {text}
    </button>
  );
};

export default Outline;
