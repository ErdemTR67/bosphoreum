import Link from "next/link";

export function WorkSection() {
  return (
    <section
      id="realisations"
      className="section section--work"
      aria-labelledby="work-title"
    >
      <div className="section__frame work">
        <div className="work__heading">
          <p className="section__label">Réalisations</p>
          <h2 id="work-title" className="section__title">
            Des outils pensés pour des usages réels.
          </h2>
          <div className="work__intro">
            <p>
              BSRM Booking est un module de réservation conçu pour les
              structures qui coordonnent plusieurs établissements, équipes et
              agendas.
            </p>
            <p>
              Le projet part d’un besoin concret : rendre les plannings plus
              fiables et réduire le travail administratif autour des
              rendez-vous.
            </p>
          </div>
        </div>

        <article className="work__project" aria-labelledby="project-title">
          <div className="work__project-meta">
            <p>Projet interne</p>
            <p>001</p>
          </div>
          <div>
            <h3 id="project-title">BSRM Booking</h3>
            <div className="work__crossing" aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
            <p>
              Centraliser les disponibilités, éviter les doubles réservations
              et donner aux équipes une vue claire de leur activité.
            </p>
          </div>
          <Link className="text-link" href="/realisations/bsrm-booking">
            Découvrir le projet
          </Link>
        </article>
      </div>
    </section>
  );
}
