export function AboutSection() {
  return (
    <section
      id="a-propos"
      className="section section--about"
      aria-labelledby="about-title"
    >
      <div className="section__frame about">
        <div className="about__heading">
          <p className="section__label">À propos</p>
          <h2 id="about-title" className="section__title">
            Un interlocuteur qui comprend le développement et la gestion.
          </h2>
        </div>

        <div className="about__connection" aria-hidden="true">
          <span>Activité</span>
          <i />
          <span>Technique</span>
        </div>

        <div className="about__copy">
          <p>
            Je suis diplômé d’un bachelier en informatique de gestion et
            fondateur de Bosphoreum.
          </p>
          <p>
            Cette double approche me permet de ne pas considérer un projet
            uniquement comme un exercice technique. Je m’intéresse d’abord à la
            façon dont une activité fonctionne, aux personnes qui l’utilisent et
            au résultat que la solution doit produire.
          </p>
          <p>
            Bosphoreum est né de cette volonté : proposer aux indépendants et
            petites structures un accompagnement accessible, direct et adapté à
            leur réalité.
          </p>
          <p className="about__location">
            Basé en Belgique, disponible pour des projets locaux ou à distance.
          </p>
        </div>
      </div>
    </section>
  );
}
