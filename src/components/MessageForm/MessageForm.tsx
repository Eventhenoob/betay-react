import { useEffect, useState } from "react";
import ArrowButton from "../Buttons/ArrowButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RevelAnimation from "../RevelAnimation";

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters" }),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
interface Props {
  position: string;
  setPosition: (position: string) => void;
}
const MessageForm = ({ position, setPosition }: Props) => {
  type FormData = z.infer<typeof schema>;
  const [formPosition, setFormPosition] = useState<
    "start" | "name" | "email" | "message"
  >("start");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    console.log("Here");
    if (errors.firstName || errors.lastName) setFormPosition("name");
    else if (errors.email) setFormPosition("email");
    else if (errors.message) setFormPosition("message");
  }, [errors]);
  return (
    <form
      onSubmit={handleSubmit((data, e) => {
        if (
          !errors.firstName &&
          !errors.lastName &&
          !errors.email &&
          !errors.message
        ) {
          console.log(data);
          setFormPosition("start");
          setPosition("start");
        }
      })}
      className={
        " bg-black z-30 w-full h-full absolute top-0 left-0 flex overflow-hidden gap-96  justify-center flex-col transition-all duration-500 " +
        (position === "form" ? "translate-x-0" : "translate-x-full")
      }
    >
      <div
        className={
          "w-full h-full flex flex-col transition-all duration-500 justify-center items-center  top-0 left-0 p-10 absolute z-20 " +
          (formPosition === "start" ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="">
          <RevelAnimation width="100%">
            <h2 className="md:text-8xl text-4xl  mb-4">Start</h2>
          </RevelAnimation>
          <RevelAnimation width="100%">
            <p className="md:w-[40rem] mb-60">
              We are excited to work with you but first we need some details
              about your project to guide you to the best position.
            </p>
          </RevelAnimation>
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
          "w-full h-full transition-all duration-500 p-10 z-30 absolute top-0 left-0 bg-black flex justify-center items-center " +
          (formPosition === "name" ? " translate-x-0  " : " translate-x-full ")
        }
      >
        <div className="">
          <RevelAnimation width="fit-content">
            <p className="md:w-[40rem] text-3xl mb-10 md:mb-60">
              Before we start,
              <br />
              What's your name?
            </p>
          </RevelAnimation>
          <div className="">
            <div className="w-full flex md:flex-row flex-col gap-10 mb-10 md:mb-32">
              <input
                {...register("firstName")}
                type="text"
                placeholder="First Name"
                className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full md:w-1/2 border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
              />
              <input
                {...register("lastName")}
                type="text"
                placeholder="Last Name"
                className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full md:w-1/2 border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName?.message}</p>
            )}
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName?.message}</p>
            )}
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
          "w-full h-full transition-all duration-500 p-10 z-30 absolute top-0 left-0 bg-black flex justify-center items-center " +
          (formPosition === "email" ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="">
          <RevelAnimation width="fit-content">
            <p className="md:w-[40rem] text-3xl mb-10 md:mb-60">
              Please enter your email
            </p>
          </RevelAnimation>

          <div className="w-full mb-10 md:mb-32">
            <div className="w-full flex gap-10">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
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
          "w-full h-full transition-all duration-500 absolute top-0 left-0 p-10 z-40 bg-black flex justify-center items-center " +
          (formPosition === "message"
            ? " translate-y-0 "
            : " -translate-y-full ")
        }
      >
        <div className="">
          <RevelAnimation width="fit-content">
            <p className="md:w-[40rem] text-3xl mb-10 md:mb-60">
              Please enter your message
            </p>
          </RevelAnimation>

          <div className="w-full  mb-10 md:mb-32">
            <div className="w-full flex-col flex gap-10 mb-14 md:mb-32">
              <textarea
                {...register("message")}
                placeholder="enter your message here"
                className="placeholder:text-slate-400 bg-gray-900 p-3 h-28 placeholder:capitalize text-white bg-transparent outline-none border-b-[1px]  text-xl w-full border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message?.message}</p>
              )}
            </div>
          </div>
          <ArrowButton
            type="submit"
            direction="right"
            onClick={() => {}}
            text="Submit"
          />
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
