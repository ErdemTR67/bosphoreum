import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Bosphoreum",
  description:
    "Sites internet, réservation, automatisation, outils de gestion et accompagnement numérique conçus autour de votre activité.",
};

export default function ServicesPage() {
  return (
    <InteriorPageShell activePath="/services">
      <InteriorHero
        label="Services"
        title="Du premier contact à l’outil qui vous accompagne au quotidien."
        intro="Les services peuvent être combinés ou adaptés en fonction de votre activité. Chaque projet commence par la compréhension du besoin, avant le choix de la solution."
      />

      <section className="route-section route-section--mist" aria-label="Services">
        <div className="route-section__inner">
          <ol className="route-services-list">
            {services.map((service) => (
              <li key={service.slug}>
                <div>
                  <h2>
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <p>{service.purpose}</p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Découvrir le service ${service.title}`}
                >
                  Voir
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </InteriorPageShell>
  );
}
