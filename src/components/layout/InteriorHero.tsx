type InteriorHeroProps = {
  intro?: string;
  label: string;
  title: string;
  tone?: "white" | "mist";
};

export function InteriorHero({
  intro,
  label,
  title,
  tone = "white",
}: InteriorHeroProps) {
  return (
    <header className={`interior-hero interior-hero--${tone}`}>
      <div className="interior-hero__inner">
        <div className="interior-hero__meta">
          <p>{label}</p>
          <div className="interior-hero__crossing" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
        </div>
        <h1>{title}</h1>
        {intro ? <p className="interior-hero__intro">{intro}</p> : null}
      </div>
    </header>
  );
}
