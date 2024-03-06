"use client";
import Lottie from "lottie-react";

interface Props {
  heading: string;
  description: string;
  animation: any;
}

const GoalCard = ({ animation, description, heading }: Props) => {
  return (
    <div className="hover:scale-110 transition-all duration-500 w-[20rem] h-[30rem] sm:h-[30rem] sm:w-[25rem] md:h-[40rem] md:w-[30rem] bg-zinc-900 rounded-3xl flex flex-col items-center  ">
      <Lottie className="w-1/2 -mt-28" animationData={animation} />
      <div className=" p-4">
        <h3 className="font-bold text-green-400 text-xl sm:text-2xl md:text-4xl mb-2 ">
          {heading}
        </h3>
        <p className="md:text-xl mt-1 md:mt-7 leading-8">{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
