"use client";
import AutoChangeableText from "./../components/AutoChangeableTex";
import HorizontalScrollCarousel from "./..//components/HorizontalScrollCarousel";
import VideoBG from "./..//components/VideoBG";
// import CursorMask from "../components/CursorMark/CursorMask";
import { useState } from "react";
import MyImageSlider from "../components/MyImageSlider/MyImageSlider";
import PremiumButton from "../components/Buttons/PermiumButton";
import useTab from "../utils/useTab";

export default function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isTab = useTab();
  const enableHover = () => {
    // setIsHovered(true);
  };
  const disableHover = () => {
    // setIsHovered(false);
  };

  return (
    <>
      {/* <CursorMask isHovered={isHovered} /> */}
      <header className="flex h-max md:h-screen min-h-screen w-screen flex-col items-center relative justify-center p-5 pt-32  md:p-24">
        <VideoBG
          video={isTab ? "header.mp4" : "headerWithText.mp4"}
          isDarkBg={isTab ? true : false}
          onLoadedData={() => {
            setIsVideoLoaded(true);
          }}
        />
        {isTab ? (
          <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
            <div className="content w-full lg:w-2/3  text-center">
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
            </div>
          </div>
        ) : (
          <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
            <div
              className="content w-full lg:w-2/3  text-center h-16"
              onMouseEnter={enableHover}
              onMouseLeave={disableHover}
            ></div>
          </div>
        )}
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
