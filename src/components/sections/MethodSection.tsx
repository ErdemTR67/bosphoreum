import { methodSteps } from "@/content/approach";

export function MethodSection() {
  return (
    <section
      id="approche"
      className="section section--method"
      aria-labelledby="method-title"
    >
      <div className="section__frame">
        <div className="section__heading section__heading--light">
          <p className="section__label">Approche</p>
          <h2 id="method-title" className="section__title">
            Comprendre avant de construire.
          </h2>
          <p className="section__intro">
            Un projet numérique utile ne commence pas par une technologie ou un
            modèle déjà prêt. Il commence par votre activité, vos clients et ce
            qui pourrait fonctionner plus simplement.
          </p>
        </div>

        <ol className="method-list method-path">
          <svg
            className="method-path__line"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              pathLength="1"
              d="M0 238 C 195 238, 230 76, 430 76 S 690 252, 850 216 S 1010 76, 1200 76"
            />
          </svg>
          {methodSteps.map((step) => (
            <li key={step.number}>
              <span className="method-path__marker" aria-hidden="true" />
              <div>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
