import { useState } from "react";
import ArrowButton from "../Buttons/ArrowButton";

interface Props {
  position: string;
  setPosition: (position: string) => void;
}
const MessageForm = ({ position, setPosition }: Props) => {
  const [formPosition, setFormPosition] = useState("start");

  return (
    <form
      className={
        " bg-black z-30 w-full h-full absolute top-0 left-0 flex overflow-hidden gap-96  justify-center flex-col transition-all duration-500 " +
        (position === "form" ? "translate-x-0" : "translate-x-full")
      }
    >
      <div
        className={
          "w-full h-full flex flex-col transition-all duration justify-center items-center  top-0 left-0 p-10 absolute z-20 " +
          (formPosition === "start" ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="">
          <h2 className="text-8xl  mb-4">Start</h2>
          <p className="w-[40rem] mb-60">
            We are excited to work with you but first we need some details about
            your project to guide you to the best position.
          </p>
          <ArrowButton
            direction="bottom"
            onClick={() => {
              setFormPosition("name");
            }}
            text="continue"
          />
        </div>
      </div>

      <div
        className={
          "w-full h-full transition-all duration p-10 z-30 absolute top-0 left-0 bg-black flex justify-center items-center " +
          (formPosition === "name" ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="">
          <p className="w-[40rem] text-3xl mb-60">
            Before we start,
            <br />
            What's your name?
          </p>

          <div className="w-full flex gap-10 mb-32">
            <input
              type="text"
              placeholder="First Name"
              className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-1/2 border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-1/2 border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
            />
          </div>

          <ArrowButton
            direction="bottom"
            onClick={() => {
              setFormPosition("email");
            }}
            text="continue"
          />
        </div>
      </div>

      <div
        className={
          "w-full h-full transition-all duration p-10 z-30 absolute top-0 left-0 bg-black flex justify-center items-center " +
          (formPosition === "email" ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="">
          <p className="w-[40rem] text-3xl mb-60">Please enter your email</p>

          <div className="w-full flex gap-10 mb-32">
            <input
              type="email"
              placeholder="Email"
              className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
            />
          </div>

          <ArrowButton
            direction="bottom"
            onClick={() => {
              setFormPosition("message");
            }}
            text="continue"
          />
        </div>
      </div>

      <div
        className={
          "w-full h-full transition-all duration absolute top-0 left-0 p-10 z-40 bg-black flex justify-center items-center " +
          (formPosition === "message"
            ? " translate-x-0 "
            : " translate-x-full ")
        }
      >
        <div className="">
          <p className="w-[40rem] text-3xl mb-60">Please enter your message</p>

          <div className="w-full flex gap-10 mb-32">
            <textarea
              placeholder="enter your message here"
              className="placeholder:text-slate-400 h-28 placeholder:capitalize text-white bg-transparent outline-none border-b-[1px]  text-xl w-full border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
            />
          </div>

          <ArrowButton
            direction="right"
            onClick={() => {
              setPosition("start");
              setFormPosition("Sumbit");
            }}
            text="Sumbit"
          />
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
