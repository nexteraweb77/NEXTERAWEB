/**
 * Fundal decorativ (imagine + fade) doar în stânga/dreapta logo-ului hero.
 * Fără layout shift — strat absolut, pointer-events none.
 */
export function HeroLogoMatrixAccent() {
  return (
    <div
      className="hero-matrix-accent-wrap"
      aria-hidden
    >
      <div className="hero-matrix-accent-wing hero-matrix-accent-wing-left" />
      <div className="hero-matrix-accent-wing hero-matrix-accent-wing-right" />
    </div>
  );
}
