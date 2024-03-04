"use client";
import AutoChangeableText from "./../components/AutoChangeableTex";
import Outline from "./../components/Buttons/Outline";
import RainbowHover from "./..//components/Buttons/RanibowHover/RainbowHover";
import HorizontalScrollCarousel from "./..//components/HorizontalScrollCarousel";
import RevelAnimation from "./..//components/RevelAnimation";
import VideoBG from "./..//components/VideoBG";
import ParallaxScrollGallery from "./..//components/parallaxScrollGallery";

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
  return (
    <>
      <header className=" flex h-screen w-screen flex-col items-center justify-center p-5 pt-32  md:p-24">
        <VideoBG isDarkBg={true} onLoadedData={() => {}} />
        <div className="w-full lg:w-2/3  text-center">
          <RevelAnimation width="100%">
            <h1 className="text-white text-5xl md:text-6xl mb-4 font-main font-thin italic">
              BE-TAYE!
            </h1>
          </RevelAnimation>
          <AutoChangeableText
            textArray={[
              "votre agence en marketing digital, accompagne les entreprises de toutes tailles et de tous secteurs grâce à son expertise en acquisition et création. Nos consultants web passionnés conçoivent et mettent en œuvre votre stratégie digitale avec pour objectif la performance et la rentabilité. Nous vous accompagnons dans la réalisation de vos objectifs de visibilité et d'expansion à travers des stratégies numériques innovantes et sur mesure.",
            ]}
          />

          <div className="cta flex gap-2  md:gap-10 justify-center items-center md:mt-[12rem] mt-[20rem] lg:mt-44">
            <RainbowHover text="Nos expertises et" />
            <Outline text="Nous découvrir" />
          </div>
        </div>
      </header>
      <main className="min-h-screen w-full py-24">
        <section className=" w-full">
          <HorizontalScrollCarousel />
        </section>
        <section className="w-full">
          <ParallaxScrollGallery images={images} />
          {/* <Gallery /> */}
        </section>
      </main>
    </>
  );
}
