import GoalCard from "./../components/GoalCard";
import ImageSlider from "./../components/ImageSlider";

import openMindAnimation from "./../assets/openMind.json";
import goalAnimation from "./../assets/targetAnimation.json";
import CrewTray from "./../components/CrewTray";
import ClientsShowcase from "./../components/ClientsShowcase";
import DropCard from "./../components/DropCard";

const Agence = () => {
  return (
    <>
      <header className="w-screen overflow-hidden h-screen flex justify-center items-center">
        <div className="relative group">
          <div className="w-[150rem]  h-[150rem] z-10 bg-red-600 absolute origin-center -top-[40rem] -left-[10rem] scale-0 group-[:hover]:scale-100 transition-all duration-1000 rounded-full"></div>
          <h1 className="relative z-30 text-5xl   md:text-[8rem] lg:text-[11rem] text-center  text-outline transition-all duration-1000 flex flex-wrap leading-[8rem] font-bold text-[#131312]">
            <span className="group-[:hover]:text-white transition-all duration-1000">
              Bienvenue
            </span>
          </h1>
          <p className="md:text-4xl -mt-10 md:mt-0 md:p-4 font-semibold  z-20 absolute left-0 group-[:hover]:text-black transition-all duration-1000">
            hez Agence Darwin, là où l&apos;évolution de
            <br /> la communication prend vie.
          </p>
        </div>
      </header>
      <main className="min-h-screen w-full ">
        <section className="pt-80">
          <h2 className="md:text-6xl font-extralight text-4xl px-4 md:p-0 md:w-[60%] m-auto text-center text-bold text-green-400 mb-40 md:mb-60">
            Excellence Collaborative : Élever la Communication
          </h2>
          <div className="flex justify-evenly  gap-96 lg:gap-0 flex-wrap">
            <DropCard title="Notre Engageant Manifeste">
              <GoalCard
                heading="Notre Engageant Manifeste"
                animation={openMindAnimation}
                description="Chez Agence Darwin, nous croyons en la collaboration transparente, l'adaptabilité et la recherche constante de l'excellence. Notre approche personnalisée garantit que chaque client bénéficie d'une solution sur mesure pour évoluer avec succès dans le monde numérique en constante évolution"
              />
            </DropCard>
            <DropCard title="Notre Engageant Manifeste">
              <GoalCard
                heading="Collaboration Distinguée pour une Évolution Réussie"
                animation={goalAnimation}
                description="Votre réussite est notre priorité. Nous travaillons main dans la main avec nos clients, comprenant leurs besoins uniques pour créer des solutions qui vont au-delà des attentes et stimulent une véritable évolution dans leur communication"
              />
            </DropCard>
          </div>
        </section>
        <section className="py-40">
          <div className="p-4  md:p-20">
            <h2 className="text-2xl text-green-400">L&apos;agence</h2>
            <p className="">
              Notre agence tire son inspiration de la vision novatrice de
              Charles Darwin, et nous nous engageons à guider nos clients dans
              la transformation digitale de leur communication
              d&apos;entreprise. Fondée avec passion, l&apos;Agence Darwin est
              le partenaire idéal pour redéfinir et dynamiser votre présence
              digitale. Notre équipe dévouée allie créativité et expertise
              technique pour propulser votre communication vers de nouveaux
              sommets.
            </p>
          </div>
          <ImageSlider />
        </section>

        <section className="py-40">
          <h2 className="text-4xl md:text-6xl md:w-[80%] m-auto mb-20 capitalize font-extralight text-center text-green-400">
            Rencontrez nos experts passionnés pour une communication digitale
            complète.
          </h2>
          <CrewTray />
        </section>

        <section className="py-40">
          <h2 className="text-6xl mb-20 font-extralight  capitalize text-center text-green-400">
            Nos Clients
          </h2>
          <ClientsShowcase />
        </section>
      </main>
    </>
  );
};

export default Agence;
