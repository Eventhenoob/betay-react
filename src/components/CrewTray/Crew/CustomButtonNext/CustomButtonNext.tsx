import { MdOutlineNavigateNext } from "react-icons/md";
const CustomButtonNext = ({
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
        "cursor-pointer absolute top-[50%] flex  text-2xl right-10 z-50 group"
      }
    >
      <MdOutlineNavigateNext className="-mr-4 group-[:hover]:-mr-5 transition-all duration-300" />
      <MdOutlineNavigateNext className="-mr-4 group-[:hover]:-mr-5 transition-all duration-300" />
      <MdOutlineNavigateNext className="group-[:hover]:-mr-1 transition-all duration-300" />
    </button>
  );
};

export default CustomButtonNext;
