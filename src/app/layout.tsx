/* Copyright (c) 2026 Erdem Topcu. All rights reserved. */
import type { Metadata } from "next";
import { bigCaslon } from "@/app/fonts";
import { ScrollExperience } from "@/components/animation/ScrollExperience";
import "./globals.css";
import "./identity.css";
import "./mobile.css";

export const metadata: Metadata = {
  title: "Bosphoreum | Partenaire numérique",
  description:
    "Sites internet, automatisations et outils de gestion conçus autour des besoins réels des indépendants et des petites entreprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bigCaslon.className} ${bigCaslon.variable}`}
    >
      <body>
        <ScrollExperience />
        {children}
      </body>
    </html>
  );
}
