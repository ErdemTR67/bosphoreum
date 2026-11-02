import Link from "next/link";
import { InteriorPageShell } from "@/components/layout/InteriorPageShell";

export default function NotFound() {
  return (
    <InteriorPageShell>
      <section className="not-found">
        <p>404</p>
        <h1>Cette page n’existe pas.</h1>
        <Link className="text-link" href="/">
          Retour à l’accueil <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </InteriorPageShell>
  );
}
