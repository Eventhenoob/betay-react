"use client";
import AutoChangeableText from "./../components/AutoChangeableTex";
import HorizontalScrollCarousel from "./..//components/HorizontalScrollCarousel";
import VideoBG from "./..//components/VideoBG";
import CursorMask from "../components/CursorMark/CursorMask";
import { useState } from "react";
import MyImageSlider from "../components/MyImageSlider/MyImageSlider";
import PremiumButton from "../components/Buttons/PermiumButton";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const enableHover = () => {
    setIsHovered(true);
  };
  const disableHover = () => {
    setIsHovered(false);
  };

  return (
    <>
      <CursorMask isHovered={isHovered} />
      <header className="flex h-max md:h-screen min-h-screen w-screen flex-col items-center relative justify-center p-5 pt-32  md:p-24">
        <VideoBG
          video="header.mp4"
          isDarkBg={true}
          onLoadedData={() => {
            setIsVideoLoaded(true);
          }}
        />
        <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
          <div className="content w-full lg:w-2/3  text-center">
            {/* <RevelAnimation width="fit-content">
              <h1
                onMouseEnter={enableHover}
                onMouseLeave={disableHover}
                className=" text-white font-heading text-5xl md:text-6xl mb-10  font-thin italic"
              >
                DARWIN!
              </h1>
            </RevelAnimation> */}
            {isVideoLoaded && (
              <AutoChangeableText
                onMouseEnter={enableHover}
                onMouseLeave={disableHover}
                timings={[2.5, 2.9, 2, 3, 5.1, 2, 3, 1]}
                textArray={[
                  "Nous Sommes Des Passionnes",
                  "Nous Sommes Creatifs",
                  "Referencement seo",
                  "Creation de sites internet",
                  "Communication digital",
                  "Acquisition de leads",
                  "Image de marque et reputation",
                  "Nous Sommes Des Passionnes",
                ]}
              />
            )}
            {/* <div className="cta flex gap-2  md:gap-10 justify-center items-center  md:mt-[16rem] mb-10 mt-[20rem] xl:mt-[16rem] lg:mt-[19rem]">
              <RainbowHover text="Nos expertises et" />
              <Outline text="Nous découvrir" />
            </div> */}
          </div>
        </div>
      </header>

      <main className="min-h-screen w-full py-10">
        <section className=" py-14 w-full">
          <HorizontalScrollCarousel
            onMouseEnter={enableHover}
            onMouseLeave={disableHover}
          />
        </section>
        <section className="w-full overflow-hidden relative min-h-screen">
          <div className="h-screen">
            <MyImageSlider />
          </div>
          <div className="flex items-center mt-20 mb-10 justify-center">
            <PremiumButton href="/clients" text="Cas clients" />
          </div>
        </section>
      </main>
    </>
  );
}
