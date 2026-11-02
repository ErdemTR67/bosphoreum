import Link from "next/link";

export function PositioningSection() {
  return (
    <section
      id="positionnement"
      className="section section--positioning"
      aria-labelledby="positioning-title"
    >
      <div className="section__frame positioning crossing-section">
        <p className="section__label">Bosphoreum</p>

        <div className="positioning__banks">
          <div className="positioning__bank positioning__bank--statement">
          <h2 id="positioning-title" className="display-heading">
            Le numérique doit s’adapter à votre activité.
            <br />
            Pas l’inverse.
          </h2>
          </div>

          <div className="crossing-axis crossing-axis--positioning" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <div className="positioning__bank positioning__bank--copy">
            <div className="positioning__copy">
            <div>
              <p>
                Chaque entreprise fonctionne à sa manière. Ses clients, ses
                habitudes et ses contraintes lui sont propres.
              </p>
              <p>
                Bosphoreum conçoit des solutions numériques à partir de cette
                réalité : un site pour mieux présenter votre activité, un
                système de réservation pour alléger votre quotidien ou un outil
                sur mesure pour répondre à un besoin précis.
              </p>
              <p>
                L’objectif n’est pas d’ajouter de la technologie partout. Il est
                de rendre votre activité plus claire, plus accessible et plus
                simple à gérer.
              </p>
            </div>
            <Link className="text-link" href="/approche">
              Découvrir notre approche
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
