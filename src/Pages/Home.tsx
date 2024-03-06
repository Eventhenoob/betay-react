"use client";
import AutoChangeableText from "./../components/AutoChangeableTex";
import Outline from "./../components/Buttons/Outline";
import RainbowHover from "./..//components/Buttons/RanibowHover/RainbowHover";
import HorizontalScrollCarousel from "./..//components/HorizontalScrollCarousel";
import RevelAnimation from "./..//components/RevelAnimation";
import VideoBG from "./..//components/VideoBG";
import ParallaxScrollGallery from "./..//components/parallaxScrollGallery";

import CursorMask from "../components/CursorMark/CursorMask";
import { useState } from "react";
import MyImageSlider from "../components/MyImageSlider/MyImageSlider";

const images = [
  "/e1.jpg",
  "/e2.jpg",
  "/e3.jpg",
  "/e1.jpg",
  "/e2.jpg",
  "/e3.jpg",
  "/e1.jpg",
  "/e2.jpg",
  "/e3.jpg",
  "/e1.jpg",
  "/e2.jpg",
  "/e3.jpg",
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const enableHover = () => {
    setIsHovered(true);
  };
  const disableHover = () => {
    setIsHovered(false);
  };

  return (
    <>
      <CursorMask isHovered={isHovered} />
      <header className="flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
        <VideoBG video="header.mp4" isDarkBg={true} onLoadedData={() => {}} />
        <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
          <div className="content w-full lg:w-2/3  text-center">
            <RevelAnimation width="fit-content">
              <h1
                onMouseEnter={enableHover}
                onMouseLeave={disableHover}
                className=" text-white text-5xl md:text-6xl mb-10 font-main font-thin italic"
              >
                DARVIN!
              </h1>
            </RevelAnimation>
            <AutoChangeableText
              onMouseEnter={enableHover}
              onMouseLeave={disableHover}
              textArray={[
                "votre agence en marketing digital, accompagne les entreprises de toutes tailles et de tous secteurs grâce à son expertise en acquisition et création. Nos consultants web passionnés conçoivent et mettent en œuvre votre stratégie digitale avec pour objectif la performance et la rentabilité. Nous vous accompagnons dans la réalisation de vos objectifs de visibilité et d'expansion à travers des stratégies numériques innovantes et sur mesure.",
              ]}
            />
            <div className="cta flex gap-2  md:gap-10 justify-center items-center  md:mt-[16rem] mt-[20rem] xl:mt-[16rem] lg:mt-[19rem]">
              <RainbowHover text="Nos expertises et" />
              <Outline text="Nous découvrir" />
            </div>
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
          <div className="flex items-center mt-20 justify-center">
            <Outline text="Cas clients" />
          </div>
        </section>
      </main>
    </>
  );
}
