import Link from "next/link";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section section--services"
      aria-labelledby="services-title"
    >
      <div className="section__frame">
        <div className="section__heading">
          <p className="section__label">Services</p>
          <h2 id="services-title" className="section__title">
            Du premier contact à l’outil qui vous accompagne au quotidien.
          </h2>
          <p className="section__intro">
            Les services peuvent être combinés ou adaptés en fonction de votre
            activité. Chaque projet commence par la compréhension du besoin,
            avant le choix de la solution.
          </p>
        </div>

        <ol className="services-list" aria-label="Besoins et réponses proposées">
          {services.map((service) => (
            <li className="service-crossing" key={service.number}>
              <div className="service-crossing__need">
                <span>Le besoin</span>
                <p className="services-list__purpose">{service.purpose}</p>
              </div>

              <div className="service-crossing__passage" aria-hidden="true">
                <span />
                <i />
                <span />
              </div>

              <div className="service-crossing__response">
                <span>La réponse</span>
                <h3>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </h3>
                <p className="services-list__description">
                  {service.description}
                </p>
                <Link className="service-crossing__link" href={`/services/${service.slug}`}>
                  Découvrir le service
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
