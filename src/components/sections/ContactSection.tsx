import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section section--contact"
      aria-labelledby="contact-title"
    >
      <div className="section__frame contact">
        <p className="section__label">Contact</p>

        <div className="contact__body">
          <div className="contact__heading">
            <h2 id="contact-title" className="contact__title">
              Parlons de ce que vous aimeriez simplifier.
            </h2>
            <div className="contact__copy">
              <p>
                Vous avez besoin d’un site, d’un système de réservation ou d’un
                outil adapté à votre activité ?
              </p>
              <p>
                Décrivez brièvement votre situation, même si la solution n’est
                pas encore claire. Le premier échange sert justement à
                identifier ce qui serait réellement utile.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="contact__crossing" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
      </div>
    </section>
  );
}
