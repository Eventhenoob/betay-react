import { GrFormPrevious } from "react-icons/gr";

const CustomButtonPrev = ({
  onClick,
}: {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "absolute top-[50%] left-4 text-2xl cursor-pointer group flex  pl-4 "
      }
    >
      <GrFormPrevious className="group-[:hover]:-ml-2 transition-all duration-300" />
      <GrFormPrevious className="-ml-4 group-[:hover]:-ml-5 transition-all duration-300" />
      <GrFormPrevious className="-ml-4 group-[:hover]:-ml-5 transition-all duration-300" />
    </button>
  );
};

export default CustomButtonPrev;
