import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__inner">
        <p>Une idée, une difficulté ou simplement une activité à mieux présenter ?</p>
        <h2 id="final-cta-title">Commençons par en parler.</h2>
        <Link href="/contact">
          <span>Parler de votre projet</span>
          <span className="final-cta__passage" aria-hidden="true">
            <i />
          </span>
        </Link>
      </div>
    </section>
  );
}
