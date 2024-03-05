import Marquee from "react-fast-marquee";
import ArrowButton from "../components/Buttons/ArrowButton";
import VideoBG from "../components/VideoBG";
import { useState } from "react";
import MessageForm from "../components/MessageForm/MessageForm";

const Contact = () => {
  const [position, setPosition] = useState("start");
  return (
    <main className="overflow-hidden relative h-screen w-screen flex items-center justify-center flex-col ">
      <div className=" z-20 w-full h-full absolute top-0 left-0 flex overflow-hidden md:gap-96 gap-20  justify-center flex-col">
        <VideoBG
          video="contactUsBg.mp4"
          isDarkBg={false}
          onLoadedData={() => {}}
        />
        <Marquee className=" md:mt-40" gradient={false} speed={200}>
          <h1 className="text-6xl md:text-9xl text-slate-100 font-bold italic ">
            Get in touch - Start Your project - Say Hello - Ask a question -
            {"  "}
          </h1>
        </Marquee>

        <div className="md:px-20 px-2 gap-10 md:gap-0 flex justify-between md:flex-row flex-col">
          <div className="md:w-96">
            <h3 className="mb-4 text-gray-500">Commencez une conversation.</h3>
            <ArrowButton
              direction="right"
              onClick={() => {
                setPosition("form");
              }}
              text="Get in touch"
            />
          </div>

          <div className="">
            <h3 className="mb-4  text-gray-500">Contact Directly</h3>
            <a
              className="hover:text-green-400 transition-all duration-300"
              href="email:helo@gmail.com"
            >
              helo@gmail.com
            </a>
          </div>
        </div>
      </div>
      <MessageForm position={position} setPosition={setPosition} />
    </main>
  );
};

export default Contact;
