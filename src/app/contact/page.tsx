import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";

export const metadata: Metadata = {
  title: "Contact | Bosphoreum",
  description:
    "Présentez votre besoin à Bosphoreum afin d’identifier la solution numérique réellement utile à votre activité.",
};

export default function ContactPage() {
  return (
    <InteriorPageShell activePath="/contact">
      <InteriorHero
        label="Contact"
        title="Parlons de ce que vous aimeriez simplifier."
        intro="Décrivez brièvement votre situation, même si la solution n’est pas encore claire. Le premier échange sert justement à identifier ce qui serait réellement utile."
      />

      <section className="route-section route-section--ink">
        <div className="route-section__inner route-contact">
          <p>
            Vous avez besoin d’un site, d’un système de réservation ou d’un
            outil adapté à votre activité ?
          </p>
          <ContactForm />
        </div>
      </section>
    </InteriorPageShell>
  );
}
