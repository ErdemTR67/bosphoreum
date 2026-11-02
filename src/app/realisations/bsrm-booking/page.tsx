import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import { bsrmBooking } from "@/content/bsrm-booking";

export const metadata: Metadata = {
  title: "BSRM Booking | Réservation multi-sites | Bosphoreum",
  description:
    "BSRM Booking centralise les établissements, les équipes, les disponibilités et le cycle complet des rendez-vous dans une plateforme multi-sites.",
};

export default function BsrmBookingPage() {
  return (
    <InteriorPageShell activePath="/realisations">
      <InteriorHero
        label={bsrmBooking.name}
        title={bsrmBooking.headline}
        intro={bsrmBooking.introduction}
        tone="mist"
      />

      <section
        className="route-section route-section--white booking-opening"
        aria-labelledby="booking-opening-title"
      >
        <div className="route-section__inner booking-opening__inner">
          <p className="section__label">Le bénéfice</p>
          <div className="booking-opening__statement">
            <h2 id="booking-opening-title">
              Un rendez-vous ne devrait jamais créer du travail en plus.
            </h2>
            <p>{bsrmBooking.promise}</p>
          </div>

          <ol className="booking-outcomes">
            {bsrmBooking.outcomes.map((outcome, index) => (
              <li key={outcome.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="route-section route-section--ink booking-system"
        aria-labelledby="booking-system-title"
      >
        <div className="route-section__inner">
          <div className="booking-section-heading">
            <p className="section__label">Le fonctionnement</p>
            <h2 id="booking-system-title">
              Du fonctionnement réel au créneau réservable.
            </h2>
          </div>

          <ol className="booking-system__steps">
            {bsrmBooking.system.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="route-section route-section--accent booking-audiences"
        aria-labelledby="booking-audiences-title"
      >
        <div className="route-section__inner">
          <div className="booking-section-heading booking-section-heading--compact">
            <p className="section__label">Deux usages reliés</p>
            <h2 id="booking-audiences-title">
              Fluide à réserver. Simple à piloter.
            </h2>
          </div>

          <div className="booking-audiences__banks">
            {bsrmBooking.audiences.map((audience, index) => (
              <div className="booking-audiences__bank" key={audience.label}>
                <article>
                  <p>{audience.label}</p>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </article>
                {index === 0 ? (
                  <div
                    className="booking-audiences__crossing"
                    aria-hidden="true"
                  >
                    <span />
                    <i />
                    <span />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="route-section route-section--white booking-trust"
        aria-labelledby="booking-trust-title"
      >
        <div className="route-section__inner booking-trust__inner">
          <p className="section__label">Multi-tenant</p>
          <div>
            <h2 id="booking-trust-title">Chaque entreprise reste chez elle.</h2>
            <p>
              BSRM Booking est conçu pour un environnement multi-tenant. Les
              données de chaque entreprise restent strictement isolées, même
              lorsque plusieurs structures utilisent la plateforme.
            </p>
            <Link className="text-link" href="/contact">
              Parler de BSRM Booking
            </Link>
          </div>
        </div>
      </section>
    </InteriorPageShell>
  );
}
