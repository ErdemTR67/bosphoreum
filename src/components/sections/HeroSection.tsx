import Image from "next/image";

export function HeroSection() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <video
        className="hero__video"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__brand">
          <div className="hero__logo-frame">
            <Image
              src="/brand/bospho_light_version/text_bridge.png"
              alt="Bosphoreum"
              className="hero__logo"
              width={1000}
              height={1000}
              preload
            />
          </div>
          <p className="hero__slogan">Bridging Digital.</p>
        </div>

        <div className="hero__statement">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">
              <span>Votre activité,</span>
            </span>
            <span className="hero__title-line">
              <span>mieux reliée au numérique.</span>
            </span>
          </h1>

          <p className="hero__lead">
            Sites internet, automatisations et outils de gestion conçus autour
            des besoins réels des indépendants et des petites entreprises.
          </p>
        </div>
      </div>

      <a className="hero__next" href="#positionnement">
        <span className="hero__passage" aria-hidden="true" />
        <span>Découvrir Bosphoreum</span>
      </a>
    </section>
  );
}
