import Link from "next/link";
import { navigationItems } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__intro">
        <Link className="site-footer__brand" href="/">
          Bosphoreum
        </Link>
        <p>
          Sites internet, automatisations et outils numériques pour indépendants
          et petites entreprises.
        </p>
      </div>

      <nav className="site-footer__nav" aria-label="Navigation du pied de page">
        <p>Navigation</p>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-footer__location">
        <p>Belgique</p>
        <Link href="/contact">Parler de votre projet</Link>
      </div>

      <div className="site-footer__legal">
        <p>© 2026 Bosphoreum</p>
        <div aria-label="Informations légales">
          <span>Mentions légales</span>
          <span>Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
