import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalScrollCard from "./HorizontalScrollCard";
import Outline from "../Buttons/Outline";
import RevelAnimation from "../RevelAnimation";
interface Props {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const HorizontalScrollCarousel = ({ onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div className="">
      <RevelAnimation width="fit-content">
        <div className="flex h-20 items-center justify-center">
          <h2
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="text-4xl text-white font-heading font-bold text-center "
          >
            NOS EXPERTISES
          </h2>
        </div>
      </RevelAnimation>

      <HorizontalScrollCarouselContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className="flex h-48 items-center justify-center">
        <Outline text="NOS EXPERTISES" />
      </div>
    </div>
  );
};

const HorizontalScrollCarouselContainer = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[450vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pt-20">
          <HorizontalScrollCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            img="e1.jpeg"
            mainTitle="Stratégie de communication"
            subText={[
              {
                heading: "AUDIT DE COMMUNICATION",
                description:
                  "Pour mieux appréhender votre activité, identifier les enjeux et vous accompagner dans votre développement.",
              },
              {
                heading: "PLAN STRATEGIQUE DE COMMUNICATION",
                description:
                  "Élaboration d'un plan de communication opérationnel et définition des objectifs à atteindre grâce à votre présence en ligne.",
              },
              {
                heading: "ENGAGEMENT SUR LE RESULTAT",
                description:
                  "Nous nous engageons à optimiser le trafic vers votre site web, à augmenter la génération de prospects et à renforcer la notoriété de votre marque.",
              },
            ]}
          />

          <HorizontalScrollCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            img="e2.jpeg"
            mainTitle="VOS SUPPORTS DE COMMUNICATION"
            subText={[
              {
                heading: "IMAGE DE MARQUE",
                description:
                  "Nous concevons et créons des visuels en harmonie avec les tendances actuelles et l'essence de votre marque. Cela comprend la création de votre logo, la charte graphique, le wording, les plaquettes, les mémoires techniques, les livrets d'accueil, les signatures d'e-mails et les supports de correspondance, ainsi que la personnalisation de vos réseaux sociaux.",
              },
              {
                heading: "SITE WEB",
                description:
                  "Nous élaborons votre site web sur mesure, en fonction de vos besoins spécifiques et de vos objectifs de croissance.",
              },
              {
                heading: "PRODUCTION VISUELLE ",
                description:
                  "Des séances photo, des vidéos d'entreprise, du motion design... Notre équipe répond à tous vos besoins en matière de contenu visuel.",
              },
            ]}
          />

          <HorizontalScrollCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            img="e3.jpeg"
            mainTitle="Community Management"
            subText={[
              {
                heading: "STRATÉGIE DE CONTENU",
                description:
                  "Une offre personnalisée pour répondre à vos objectifs de conquête et de recrutement : chaque semaine, nous créons du contenu pour votre site web et vos réseaux sociaux, tout en assurant la gestion de votre e-réputation.",
              },
              {
                heading: "PUBLICITÉ EN LIGNE",
                description:
                  "Nos social media managers dédiés à votre stratégie digitale prennent en charge et optimisent les publications sponsorisées pour atteindre vos prospects.",
              },
              {
                heading: "RAPPORTS DE PERFORMANCE",
                description:
                  "Un rapport mensuel détaillant les résultats chiffrés de chaque campagne de communication.",
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
