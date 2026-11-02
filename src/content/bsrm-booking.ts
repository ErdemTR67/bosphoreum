export const bsrmBooking = {
  name: "BSRM Booking",
  eyebrow: "Module de réservation multi-sites",
  headline: "Des plannings fiables, sur tous vos sites.",
  introduction:
    "BSRM Booking centralise les établissements, les équipes, les services et les rendez-vous dans une seule plateforme. Les disponibilités réellement réservables sont calculées automatiquement à partir du fonctionnement de chaque structure.",
  promise:
    "Moins d’administratif, moins d’erreurs et une organisation plus claire pour chaque équipe.",
  outcomes: [
    {
      title: "Éviter les doubles réservations",
      description:
        "Les créneaux proposés tiennent compte des horaires, des indisponibilités, des congés et des temps de préparation.",
    },
    {
      title: "Fiabiliser les plannings",
      description:
        "Chaque rendez-vous suit un cycle clair, de sa création à sa réalisation, son annulation ou l’absence du client.",
    },
    {
      title: "Partager une vue commune",
      description:
        "Les établissements et les équipes travaillent depuis la même plateforme, avec des accès adaptés à chaque rôle.",
    },
  ],
  system: [
    {
      number: "01",
      title: "Structurer l’activité",
      description:
        "Établissements, employés, rôles, services, tarifs, durées et temps de préparation sont organisés dans un même environnement.",
    },
    {
      number: "02",
      title: "Calculer le créneau juste",
      description:
        "Les horaires d’ouverture, fermetures exceptionnelles, congés et indisponibilités déterminent ce qui peut réellement être réservé.",
    },
    {
      number: "03",
      title: "Suivre chaque rendez-vous",
      description:
        "Création, confirmation, annulation, réalisation ou absence : les équipes conservent une lecture claire de l’activité.",
    },
  ],
  audiences: [
    {
      label: "Pour le client final",
      title: "Réserver sans friction.",
      description:
        "Le parcours affiche les prestations et les créneaux réellement disponibles pour permettre une prise de rendez-vous simple et cohérente.",
    },
    {
      label: "Pour les équipes",
      title: "Organiser sans ressaisie.",
      description:
        "Une base clients centralisée, des plannings lisibles et une gestion partagée réduisent les manipulations et les erreurs du quotidien.",
    },
  ],
} as const;
