import { useState } from "react";
import { Link } from "react-router-dom";

const Initial = () => {
  const [isEnded, setIsEnded] = useState(false);
  return (
    <Link
      to={isEnded ? "/home" : "/"}
      className="flex flex-col justify-center items-center bg-white w-screen h-screen"
    >
      <video
        onEnded={() => {
          setIsEnded(true);
        }}
        src="/initial.mp4"
        className="object-contain md:object-cover w-full h-full"
        controls={false}
        autoPlay
        muted
      />
      <div className="top-[62%] sm:top-[54%] md:top-2/3 text-2xl md:text-4xl absolute">
        <p
          className={
            " transition-all duration-500 text-black p-4 text-center font-heading " +
            (isEnded ? " opacity-100 " : " opacity-0 ")
          }
        >
          La communication et le marketing pensé par des passionnées dont c'est
          le métier
        </p>
        <p
          className={
            " transition-all duration-[1.5s] ease-in text-black p-4 text-center font-heading " +
            (isEnded ? " opacity-100 " : " opacity-0 ")
          }
        >
          Cliquez sur
        </p>
      </div>
    </Link>
  );
};

export default Initial;
