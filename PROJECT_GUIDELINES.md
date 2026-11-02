# Bosphoreum

## Contexte du projet

Bosphoreum est une activité complémentaire belge de services numériques.

Elle s’adresse principalement aux indépendants, petites entreprises et structures locales ayant besoin de solutions numériques simples, utiles et adaptées à leur fonctionnement.

Les services envisagés comprennent notamment :

- la création de sites internet ;
- la digitalisation de processus ;
- la réservation et la gestion d’agendas ;
- l’automatisation de tâches ;
- la création de petits outils de gestion sur mesure.

Bosphoreum ne doit pas être présenté comme une agence technologique classique, une startup SaaS ou un studio créatif démonstratif.

Le positionnement recherché est celui d’un partenaire numérique : une structure capable de comprendre le fonctionnement d’une activité et de créer une solution claire, proportionnée et durable.

## Objectif du site

Le site est la vitrine principale de Bosphoreum.

À terme, il devra servir à :

- présenter l’activité ;
- expliquer les services ;
- exposer des réalisations et études de cas ;
- construire la crédibilité de Bosphoreum ;
- générer des demandes de contact ;
- attirer progressivement du trafic grâce au référencement naturel ;
- démontrer les compétences techniques et visuelles du fondateur.

Le site ne doit donc pas être traité comme une simple landing page temporaire.

Il doit pouvoir évoluer vers un site structuré comportant plusieurs pages, notamment :

- accueil ;
- services ;
- pages détaillées par service ;
- réalisations ;
- études de cas ;
- à propos ;
- contact ;
- éventuellement articles ou ressources.

Le SEO, les performances, l’accessibilité, la qualité du HTML et la maîtrise du JavaScript envoyé au navigateur sont importants.

## Direction visuelle actuelle

Les références précédemment envisagées pour la composition du site sont
abandonnées.

La direction visuelle est maintenant fondée sur les éléments validés
ci-dessous.

### Entrée du site

La page d’accueil doit commencer par une grande séquence vidéo immersive.

La vidéo doit occuper tout ou presque tout le premier écran et servir de
support au titre principal.

Le texte est superposé à la vidéo.

La vidéo actuellement retenue pour cette entrée est :

- `public/videos/hero.mp4`

Ne pas la remplacer sans validation explicite.

Cette entrée ne doit pas ressembler à un hero SaaS composé de deux colonnes,
d’une illustration et d’un bouton arrondi.

La vidéo doit créer une présence de marque immédiate tout en conservant une
excellente lisibilité du contenu.

Prévoir dès la conception :

- une image poster ;
- un chargement raisonnable ;
- une version mobile adaptée ;
- un contraste suffisant avec le texte ;
- une alternative respectant prefers-reduced-motion ;
- l’absence de contenu essentiel uniquement transmis par la vidéo.

Le fichier doit être optimisé avant sa mise en production. L’image poster et
l’éventuelle version mobile doivent encore être validées.

### Typographie

La police de référence validée pour le nom Bosphoreum et les grands titres est
Big Caslon.

Le fichier est conservé dans :

`src/app/fonts/BigCaslon Regular.otf`

Son intégration doit utiliser `next/font/local`.

Ne pas remplacer cette police par une police Google Fonts ou une approximation
sans validation.

Ne pas convertir, modifier, redistribuer ou publier le fichier dans un dépôt
public sans avoir vérifié que sa licence l’autorise.

Ce choix ne définit pas encore tout le système typographique.

La typographie secondaire, les corps de texte, les graisses, les proportions
et les usages restent à valider.

Ne pas choisir automatiquement une police secondaire.

Ne pas utiliser Inter.

Ne pas construire une combinaison typographique définitive sans validation explicite.

### Palette validée

La palette de référence est composée des couleurs suivantes :

- #8074C8
- #4B4452
- #B1A8B9
- #9470BA
- #000000
- #FFFFFF

Les noms présents dans la planche de référence ne doivent pas être utilisés :
ils sont incohérents et ne définissent pas le rôle des couleurs.

Les rôles fonctionnels de ces couleurs ne sont pas encore définitivement
fixés.

Ne pas inventer automatiquement une palette supplémentaire.

Ne pas utiliser les gris par défaut de Tailwind comme remplacement.

### Ton visuel

Le site doit être :

- immersif ;
- typographique ;
- élégant ;
- expressif ;
- contemporain ;
- visuellement identifiable ;
- commercial et fonctionnel.

Il ne doit pas être :

- un faux journal ;
- un site patrimonial ;
- un template SaaS ;
- une succession de cartes ;
- une interface monochrome générique ;
- une démonstration artistique inutilisable.

L’identité doit être forte dès le premier écran, puis laisser davantage de
place à la clarté et au contenu dans les sections suivantes.
L’identité visuelle de Bosphoreum est actuellement en cours de construction.

Elle ne doit pas être complétée, interprétée ou enrichie arbitrairement.

La direction générale recherchée est :

- sobre ;
- éditoriale ;
- intemporelle ;
- précise ;
- légèrement institutionnelle ;
- minimaliste sans être froide ;
- inspirée par l’édition, la presse ancienne et les identités typographiques historiques ;
- moderne dans son exécution, sans employer les codes visuels habituels de la tech.

La marque doit évoquer une maison sérieuse, cultivée et durable plutôt qu’une agence web générique.

### Logos disponibles

Les exports de logo actuellement disponibles sont conservés dans
`public/brand/`.

Ils comprennent :

- une version noire dans `public/brand/bosphoreum_black_version/` ;
- une version claire dans `public/brand/bospho_light_version/` ;
- un mot-symbole « Bosphoreum » utilisé seul ;
- plusieurs compositions associant le mot-symbole à un pont suspendu ;
- des variantes du pont avec ou sans paysage marin.

Les fichiers actuels sont des PNG transparents de 4000 × 4000 px. Ils doivent
être considérés comme des exports de travail : ne pas les renommer, les
recadrer, les recolorer, les convertir ou les optimiser sans validation.

Le choix du logo principal, des variantes autorisées et de leurs contextes
d’utilisation reste à valider. Ne pas utiliser automatiquement une composition
complexe lorsqu’un simple mot-symbole est plus lisible, notamment aux petites
tailles.

La disponibilité de fichiers vectoriels sources et les droits associés aux
illustrations du pont doivent être confirmés avant l’intégration définitive.

### Éléments encore ouverts

Les éléments suivants ne sont pas encore définitivement arrêtés :

- le rôle fonctionnel exact de chaque couleur dans l’interface ;
- la typographie secondaire ;
- les proportions typographiques ;
- le système d’espacement ;
- le traitement des images ;
- les éléments graphiques distinctifs ;
- les animations en dehors du hero vidéo ;
- le symbole ou monogramme éventuel ;
- le choix du logo principal et les règles d’utilisation de ses variantes.

Toute décision importante concernant ces éléments doit être signalée avant d’être figée.

## Ce qu’il faut éviter

Éviter absolument les réflexes visuels suivants :

- esthétique SaaS ;
- apparence shadcn/ui ;
- palette Tailwind grise utilisée par défaut ;
- Tailwind Gray-900 comme direction artistique ;
- police Inter ;
- cartes arrondies répétées ;
- grandes ombres diffuses ;
- dégradés bleus ou violets ;
- effets néon ;
- glassmorphism ;
- illustrations technologiques génériques ;
- ordinateurs, circuits, nuages ou fusées ;
- icônes décoratives systématiques ;
- boutons en forme de pilule sans justification ;
- mise en page constituée uniquement de cartes ;
- design de tableau de bord appliqué à un site éditorial ;
- animations gratuites ou permanentes ;
- textes marketing génériques de startup.

Ne pas chercher à rendre le site « premium » en accumulant des effets.

L’originalité doit venir de la composition, de la typographie, du rythme, des proportions et des détails.

## Stack technique

Le projet utilise :

- Next.js ;
- App Router ;
- React ;
- TypeScript ;
- Tailwind CSS ;
- CSS global personnalisé ;
- `next/font` pour les polices ;
- ESLint ;
- Git.

Le déploiement initial est prévu sur Vercel.

Une bibliothèque d’animation comme Motion for React pourra être ajoutée plus tard uniquement lorsqu’un besoin concret aura été défini.

## Rôle de Tailwind CSS

Tailwind est un outil de mise en page et de production CSS.

Tailwind ne doit pas définir l’identité visuelle.

Ne pas utiliser automatiquement les couleurs, ombres, arrondis et composants visuels fréquemment associés à Tailwind.

Les choix structurants doivent être définis à travers des variables CSS propres au projet, par exemple :

- couleurs ;
- typographies ;
- espacements ;
- largeurs ;
- bordures ;
- durées d’animation ;
- courbes de transition.

Éviter les longues suites de classes contenant des valeurs arbitraires répétées.

Lorsqu’une valeur fait partie du langage visuel, elle doit être centralisée.

## Architecture

Utiliser l’App Router de Next.js.

Privilégier les Server Components.

Ajouter `"use client"` uniquement lorsqu’une interaction côté navigateur le nécessite réellement.

Ne pas transformer une page entière en Client Component uniquement pour animer un petit élément.

Séparer autant que possible :

- le contenu ;
- la structure sémantique ;
- la présentation ;
- les comportements interactifs.

Créer des composants lorsqu’ils représentent une section claire ou lorsqu’ils sont véritablement réutilisables.

Ne pas créer artificiellement une bibliothèque UI générique.

Ne pas introduire des abstractions prématurées.

## Dépendances

Ne pas installer de dépendance sans nécessité concrète.

Avant toute installation :

1. expliquer le besoin ;
2. vérifier si le besoin peut être satisfait avec Next.js, React, CSS ou les API du navigateur ;
3. demander une validation si la dépendance influence fortement l’architecture ou l’identité visuelle.

Ne pas installer automatiquement :

- shadcn/ui ;
- une bibliothèque de composants ;
- une bibliothèque d’icônes ;
- un framework CSS supplémentaire ;
- une bibliothèque d’animation ;
- un CMS ;
- une solution de gestion d’état ;
- une bibliothèque de formulaires.

## SEO

Le référencement naturel est une priorité du projet.

Respecter notamment les principes suivants :

- une seule intention principale par page ;
- titres et descriptions propres à chaque route ;
- HTML sémantique ;
- structure correcte des titres ;
- contenu disponible dans le HTML initial ;
- URLs lisibles ;
- liens internes cohérents ;
- sitemap ;
- robots.txt ;
- métadonnées Open Graph ;
- données structurées lorsqu’elles sont réellement pertinentes ;
- images correctement dimensionnées et décrites ;
- bonnes performances ;
- absence de contenu critique rendu uniquement après exécution de JavaScript.

Ne pas ajouter du texte artificiel uniquement pour placer des mots-clés.

Ne pas inventer de localisation, de clientèle, de témoignage, de chiffre ou de réalisation.

## Accessibilité

Le site doit être utilisable au clavier et compatible avec les technologies d’assistance.

Toujours prévoir :

- HTML sémantique ;
- ordre logique du contenu ;
- labels de formulaire ;
- textes alternatifs pertinents ;
- états focus visibles ;
- contraste suffisant ;
- liens et boutons correctement distingués ;
- respect de `prefers-reduced-motion`.

Ne pas masquer les contours de focus sans remplacement accessible.

## Animations

Les animations doivent soutenir l’identité et la compréhension du site.

Elles peuvent notamment servir à :

- révéler une composition ;
- accompagner une transition ;
- matérialiser une liaison ;
- mettre en valeur la hiérarchie ;
- renforcer une interaction.

Elles ne doivent pas distraire du contenu.

Privilégier CSS pour les transitions simples.

N’utiliser une bibliothèque d’animation que pour des interactions qui seraient difficiles ou fragiles à réaliser proprement en CSS.

Toujours respecter `prefers-reduced-motion`.

Éviter :

- les animations permanentes ;
- les déplacements excessifs ;
- les effets de parallaxe importants ;
- les animations appliquées à tous les éléments ;
- les délais qui ralentissent l’accès au contenu ;
- les effets de curseur envahissants.

## Positionnement éditorial

Bosphoreum doit être présenté comme un partenaire numérique destiné aux
indépendants, petites entreprises et structures locales.

Le site ne doit pas donner l’impression d’une grande agence, d’une startup ou
d’une plateforme logicielle.

La proposition de valeur centrale est la suivante :

> Bosphoreum aide les indépendants et petites entreprises à mieux relier leur
> activité au numérique grâce à des sites internet, des automatisations et des
> outils conçus autour de leurs besoins réels.

Le numérique ne doit pas être présenté comme une finalité.

Les textes doivent toujours partir :

- du fonctionnement réel de l’activité ;
- du besoin rencontré ;
- de la difficulté à résoudre ;
- du résultat utile pour le client.

Éviter les formulations centrées uniquement sur la technologie employée.

Préférer :

- « faciliter la prise de rendez-vous » ;
- « réduire les tâches répétitives » ;
- « mieux présenter votre activité » ;
- « centraliser vos demandes » ;
- « construire un outil adapté à votre fonctionnement ».

Éviter :

- « solution innovante » ;
- « transformation digitale » ;
- « technologie de pointe » ;
- « expérience digitale disruptive » ;
- « propulser votre business » ;
- « révolutionner votre activité » ;
- « expertise 360° » ;
- « solutions digitales sur mesure » lorsque cette expression n’est pas
  expliquée concrètement.

## Ton de voix

Le ton doit être :

- clair ;
- direct ;
- calme ;
- humain ;
- professionnel ;
- accessible ;
- précis ;
- assuré sans être prétentieux.

Les textes ne doivent pas être :

- excessivement commerciaux ;
- remplis de jargon ;
- artificiellement institutionnels ;
- trop familiers ;
- pompeux ;
- écrits comme ceux d’une grande agence internationale.

Utiliser des phrases relativement courtes.

Éviter les accumulations d’adjectifs.

Ne pas employer de superlatifs non démontrables comme :

- meilleur ;
- unique ;
- exceptionnel ;
- révolutionnaire ;
- incontournable ;
- haut de gamme.

Ne pas promettre de résultat commercial garanti.

## Personne grammaticale

Utiliser principalement « Bosphoreum » comme sujet dans les pages commerciales.

Exemples :

- « Bosphoreum conçoit des sites internet adaptés à votre activité. »
- « Bosphoreum vous accompagne de l’analyse du besoin à la mise en ligne. »

Utiliser « je » uniquement dans les contenus directement liés au fondateur,
notamment la section ou la page À propos.

Ne pas utiliser « nous » tant que Bosphoreum reste une activité portée par une
seule personne, sauf décision éditoriale explicite ultérieure.

S’adresser au visiteur avec « vous ».

## Messages validés

Les formulations suivantes constituent la base éditoriale actuelle.

### Message principal

> Votre activité, mieux reliée au numérique.

### Slogan de marque

> Bridging Digital.

Conserver cette formulation, sa capitalisation et sa ponctuation.

### Positionnement secondaire

> Sites internet, automatisations et outils de gestion conçus autour des
> besoins réels des indépendants et des petites entreprises.

### Principe de marque

> Le numérique doit s’adapter à votre activité. Pas l’inverse.

### Approche

> Comprendre avant de construire.

Ces formulations peuvent être adaptées légèrement pour des contraintes de
mise en page, mais leur sens ne doit pas être modifié sans validation.

## Services

Les cinq catégories de services actuellement retenues sont :

1. Sites internet
2. Réservation et prise de rendez-vous
3. Automatisation
4. Outils de gestion
5. Accompagnement numérique

Ne pas renommer, fusionner ou remplacer ces catégories sans validation.

Chaque service doit être présenté à partir de son utilité concrète, pas à
partir de la technologie utilisée.

## Réalisations

Aucune réalisation client ne doit être inventée.

Tant que Bosphoreum ne dispose pas de projets clients publiables, la section
Réalisations peut :

- annoncer les futures études de cas ;
- présenter un projet interne ;
- présenter un projet conceptuel clairement identifié comme tel ;
- rester volontairement limitée.

Ne pas créer :

- de faux noms de clients ;
- de faux logos ;
- de faux témoignages ;
- de faux chiffres ;
- de faux résultats ;
- de faux secteurs d’activité présentés comme des références réelles.

## Appels à l’action

Les appels à l’action doivent rester simples et directs.

Formulations privilégiées :

- « Parler de votre projet »
- « Découvrir Bosphoreum »
- « Découvrir notre approche »
- « Commençons par en parler »
- « Envoyer ma demande »

Éviter :

- « Commencer gratuitement »
- « Réserver une démo »
- « Booster mon business »
- « Passer au niveau supérieur »
- « Découvrir la puissance de Bosphoreum »

## Contenu

Ne pas inventer de texte définitif lorsque le contenu n’a pas encore été
validé.

Lorsqu’un texte validé existe, le conserver sans le reformuler silencieusement.

Toute reformulation significative doit être signalée.

Les textes temporaires doivent être clairement identifiables dans le code ou
dans la documentation.

Ne pas inventer :

- de clients ;
- de témoignages ;
- de partenaires ;
- de résultats commerciaux ;
- d’années d’expérience ;
- d’adresse ;
- de numéro d’entreprise ;
- de tarifs ;
- de certifications ;
- de zones d’intervention ;
- de délais ;
- de garanties ;
- de statistiques.

Les projets conceptuels doivent être présentés explicitement comme tels.

Les textes doivent être structurés pour une lecture web :

- titres explicites ;
- paragraphes relativement courts ;
- une idée principale par bloc ;
- vocabulaire compréhensible par un non-technicien ;
- bénéfice concret avant explication technique ;
- aucun remplissage destiné uniquement au SEO.

Ne pas ajouter automatiquement de mots-clés géographiques comme Bruxelles,
Wallonie, Belgique ou une ville précise sans validation du positionnement
local.

## Principes de contribution

- Lire les fichiers concernés avant de modifier le projet.
- Limiter chaque changement au besoin traité et conserver le style existant.
- Signaler les décisions visuelles ou architecturales importantes avant de les figer.
- Éviter les réécritures et abstractions qui ne répondent pas à un besoin concret.
- Vérifier TypeScript et exécuter le linter ; lancer le build lorsque l’ampleur du changement le justifie.
- Résumer les fichiers modifiés et les vérifications effectuées.

## Commandes de validation

Avant de considérer une tâche comme terminée, exécuter selon le besoin :

```bash
npm run lint
npm run build
