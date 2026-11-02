import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";

export const metadata: Metadata = {
  title: "À propos | Bosphoreum",
  description:
    "Découvrez le fondateur de Bosphoreum et son approche du développement et de la gestion.",
};

export default function AboutPage() {
  return (
    <InteriorPageShell activePath="/a-propos">
      <InteriorHero
        label="À propos"
        title="Un interlocuteur qui comprend le développement et la gestion."
      />

      <section className="route-section route-section--white">
        <div className="route-section__inner route-about">
          <p>
            Je suis diplômé d’un bachelier en informatique de gestion et
            fondateur de Bosphoreum.
          </p>
          <div>
            <p>
              Cette double approche me permet de ne pas considérer un projet
              uniquement comme un exercice technique. Je m’intéresse d’abord à
              la façon dont une activité fonctionne, aux personnes qui
              l’utilisent et au résultat que la solution doit produire.
            </p>
            <p>
              Bosphoreum est né de cette volonté : proposer aux indépendants et
              petites structures un accompagnement accessible, direct et adapté
              à leur réalité.
            </p>
            <p>Basé en Belgique, disponible pour des projets locaux ou à distance.</p>
          </div>
        </div>
      </section>
    </InteriorPageShell>
  );
}
