import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";

export const metadata: Metadata = {
  title: "Réalisations | Bosphoreum",
  description:
    "Les projets de Bosphoreum présentés avec leur contexte, leurs besoins et les solutions mises en place.",
};

export default function WorkPage() {
  return (
    <InteriorPageShell activePath="/realisations">
      <InteriorHero
        label="Réalisations"
        title="Des projets conçus pour des usages réels."
        intro="Bosphoreum présente les projets à partir du besoin rencontré, du fonctionnement à comprendre et de la réponse construite."
      />

      <section
        className="route-section route-section--accent"
        aria-labelledby="internal-project-title"
      >
        <div className="route-section__inner route-project">
          <div className="route-project__meta">
            <p>Projet interne</p>
            <p>001</p>
          </div>
          <div>
            <h2 id="internal-project-title">BSRM Booking</h2>
            <p>
              Un module de réservation multi-sites conçu pour fiabiliser les
              plannings, centraliser l’activité et réduire les erreurs autour
              des rendez-vous.
            </p>
          </div>
          <Link className="text-link" href="/realisations/bsrm-booking">
            Découvrir BSRM Booking
          </Link>
        </div>
      </section>

      <section
        className="route-section route-section--white"
        aria-labelledby="bosphoreum-project-title"
      >
        <div className="route-section__inner route-project route-project--secondary">
          <div className="route-project__meta">
            <p>Projet interne</p>
            <p>002</p>
          </div>
          <div>
            <h2 id="bosphoreum-project-title">Bosphoreum</h2>
            <p>
              Construire une identité et un site capables de concilier présence
              visuelle, performance et développement futur.
            </p>
          </div>
          <Link className="text-link" href="/contact">
            Vous avez un projet à construire ?
          </Link>
        </div>
      </section>
    </InteriorPageShell>
  );
}
