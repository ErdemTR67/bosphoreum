import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type InteriorPageShellProps = {
  activePath?: string;
  children: ReactNode;
};

export function InteriorPageShell({
  activePath,
  children,
}: InteriorPageShellProps) {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <SiteHeader activePath={activePath} tone="ink" />
      <main id="contenu" className="interior-main">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
