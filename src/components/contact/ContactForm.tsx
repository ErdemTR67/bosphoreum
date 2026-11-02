export function ContactForm() {
  return (
    <form className="contact-form">
      <fieldset disabled>
        <legend className="sr-only">Votre demande</legend>
        <label>
          <span>Nom</span>
          <input type="text" name="name" autoComplete="name" />
        </label>
        <label>
          <span>Adresse e-mail</span>
          <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          <span>Activité ou entreprise</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
        <label className="contact-form__message">
          <span>Votre besoin</span>
          <textarea name="message" rows={4} />
        </label>
        <button type="submit">Le formulaire sera bientôt disponible.</button>
      </fieldset>
      <p>Votre message sera uniquement utilisé pour répondre à votre demande.</p>
    </form>
  );
}
