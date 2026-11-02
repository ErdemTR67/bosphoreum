import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import { services } from "@/content/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Bosphoreum`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceIndex = services.findIndex((item) => item.slug === slug);
  const service = services[serviceIndex];

  if (!service) {
    notFound();
  }

  const previous = serviceIndex > 0 ? services[serviceIndex - 1] : undefined;
  const next =
    serviceIndex < services.length - 1 ? services[serviceIndex + 1] : undefined;
  const isBookingService =
    service.slug === "reservation-et-prise-de-rendez-vous";

  return (
    <InteriorPageShell activePath={`/services/${service.slug}`}>
      <InteriorHero
        label="Service"
        title={service.title}
        intro={service.purpose}
        tone="mist"
      />

      <section
        className="route-section route-section--service"
        aria-labelledby="service-detail-title"
      >
        <div className="route-section__inner service-detail">
          <p className="section__label">Ce que ce service peut simplifier</p>
          <div>
            <h2 id="service-detail-title">{service.purpose}</h2>
            <p>{service.description}</p>
            <div className="service-detail__links">
              {isBookingService ? (
                <Link
                  className="text-link"
                  href="/realisations/bsrm-booking"
                >
                  Découvrir BSRM Booking
                </Link>
              ) : null}
              <Link className="text-link" href="/contact">
                Parler de votre projet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav className="route-pagination" aria-label="Navigation entre les services">
        <div>
          {previous ? (
            <Link href={`/services/${previous.slug}`}>
              <span>Service précédent</span>
              {previous.title}
            </Link>
          ) : (
            <Link href="/services">
              <span>Vue d’ensemble</span>
              Tous les services
            </Link>
          )}
        </div>
        <div>
          {next ? (
            <Link href={`/services/${next.slug}`}>
              <span>Service suivant</span>
              {next.title}
            </Link>
          ) : (
            <Link href="/contact">
              <span>Étape suivante</span>
              Parler de votre projet
            </Link>
          )}
        </div>
      </nav>
    </InteriorPageShell>
  );
}
