import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import { methodSteps } from "@/content/approach";

export const metadata: Metadata = {
  title: "Approche | Bosphoreum",
  description:
    "Comprendre votre activité avant de concevoir et construire la solution numérique.",
};

export default function ApproachPage() {
  return (
    <InteriorPageShell activePath="/approche">
      <InteriorHero
        label="Approche"
        title="Comprendre avant de construire."
        intro="Un projet numérique utile ne commence pas par une technologie ou un modèle déjà prêt. Il commence par votre activité, vos clients et ce qui pourrait fonctionner plus simplement."
      />

      <section
        className="route-section route-section--ink"
        aria-label="Étapes de l’approche"
      >
        <div className="route-section__inner">
          <ol className="route-method-list">
            {methodSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h2>{step.title}</h2>
                <div>
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </InteriorPageShell>
  );
}
