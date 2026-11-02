import Link from "next/link";
import { bigCaslon } from "@/app/fonts";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigationItems } from "@/content/site";

type SiteHeaderProps = {
  activePath?: string;
  tone?: "light" | "ink";
};

export function SiteHeader({
  activePath,
  tone = "light",
}: SiteHeaderProps) {
  return (
    <header className={`site-header site-header--${tone}`}>
      <Link
        className={`site-header__brand ${bigCaslon.className}`}
        href="/"
      >
        Bosphoreum
      </Link>

      <nav className="site-header__navigation" aria-label="Navigation principale">
        <ul className="site-header__nav">
          {navigationItems.map((item) => {
            const isCurrent =
              activePath === item.href ||
              (item.href === "/services" &&
                activePath?.startsWith("/services/"));

            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link className="site-header__cta" href="/contact">
        Parler de votre projet
      </Link>

      <MobileMenu activePath={activePath} tone={tone} />
    </header>
  );
}
