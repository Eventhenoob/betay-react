import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import RevelAnimation from "../RevelAnimation";
import ProjectBox from "./ProjectBox";
import PremiumButton from "../Buttons/PermiumButton";
import { Link } from "react-router-dom";
interface Props {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const ProjectsShowcase = ({ onMouseEnter, onMouseLeave }: Props) => {
  return (
    <HorizontalScrollCarousel
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default ProjectsShowcase;

const HorizontalScrollCarousel = ({ onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div className="">
      <RevelAnimation width="fit-content">
        <h2
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="text-4xl lg:text-7xl mb-14 text-white font-heading font-bold text-center w-[80%] m-auto"
        >
          Identité de marque et Marketing visuel In branding we trust!
        </h2>
      </RevelAnimation>
      <p className="w-[80%] mb-10 text-xl md:text-3xl  m-auto">
        L'agence de communication digitale{" "}
        <Link className="text-blue-400" to="/">
          Darwin
        </Link>{" "}
        en Essonne se distingue par son expertise dans la création de stratégies
        de communication novatrices destinées aux entreprises.{" "}
      </p>

      <p className="mb-10 w-[80%] text-xl md:text-3xl  m-auto">
        Notre vaste expérience englobe la conception de sites web, la gestion
        efficace des réseaux sociaux et la mise en œuvre de campagnes
        publicitaires en ligne percutantes.
      </p>

      <p className="mb-10 w-[80%] text-xl md:text-3xl  m-auto">
        Chez Darwin, nous sommes fiers d'avoir accompagné de nombreuses
        entreprises locales dans l'amélioration de leur référencement SEO et
        l'augmentation de leurs ventes. Notre équipe est composée de
        professionnels chevronnés et passionnés, prêts à mettre leur
        savoir-faire au service de votre projet.
      </p>

      <p className="mb-10 w-[80%] text-xl md:text-3xl  m-auto">
        Nous vous invitons à nous contacter pour discuter de vos besoins
        spécifiques et élaborer ensemble une stratégie marketing sur mesure.
        Chez Darwin, notre objectif est de vous aider à atteindre vos objectifs
        commerciaux grâce à des solutions digitales innovantes et efficaces.
      </p>
      <HorizontalScrollCarouselContainer />
      <div className="p-10 flex justify-center items-center">
        <PremiumButton
          text="Un projet en tête? contactez nous"
          href="/contact"
        />
      </div>
    </div>
  );
};

const HorizontalScrollCarouselContainer = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] ">
      <div className="sticky top-0 flex h-screen items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex gap-32 p-10 ">
          <ProjectBox
            dir="up"
            heading="This is the best website i have created"
            img="e4.jpg"
          />
          <ProjectBox
            heading="This is the best website i have created"
            img="e4.jpg"
          />
          <ProjectBox
            dir="up"
            heading="This is the best website i have created"
            img="e4.jpg"
          />
          <ProjectBox
            heading="This is the best website i have created"
            img="e4.jpg"
          />
          <ProjectBox
            dir="up"
            heading="This is the best website i have created"
            img="e4.jpg"
          />
          <ProjectBox
            dir="up"
            heading="This is the best website i have created"
            img="e4.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
};