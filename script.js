const STORAGE_KEY = "leraconteur.v1";

const FIELD_CONFIG = [
  {
    id: "age",
    label: "Age de l'enfant",
    options: [
      {
        label: "6 ans CP",
        explain: "Ideal pour des phrases courtes, beaucoup d'action et un vocabulaire simple.",
      },
      {
        label: "7-8 CE1/CE2",
        explain: "Bon equilibre entre aventure, emotions et petites reflexions.",
      },
      {
        label: "9-10 CM1/CM2",
        explain: "Permet une intrigue un peu plus riche avec davantage de nuances.",
      },
    ],
  },
  {
    id: "duree",
    label: "Longueur du recit",
    options: [
      { label: "500 mots", explain: "Format court, parfait pour lire vite avec beaucoup de rythme." },
      { label: "1000 mots", explain: "Format moyen, ideal pour une aventure bien developpee." },
      { label: "2000 mots", explain: "Format long, pour une histoire plus detaillee et immersive." },
    ],
  },
  {
    id: "style",
    label: "Style d'ecriture",
    options: [
      { label: "Actif et percutant", explain: "Des phrases courtes qui vont droit au but et avancent vite." },
      { label: "Hybride visuel", explain: "Un style qui donne l'impression de voir les scenes comme en BD." },
      { label: "Documentaire petillant", explain: "Un ton vivant qui melange aventure et infos utiles." },
      { label: "Descriptif immersif", explain: "Des descriptions riches pour sentir les lieux et les emotions." },
    ],
  },
  {
    id: "univers",
    label: "Monde / decor",
    options: [
      {
        label: "Monde cache en pleine vue",
        explain: "Un monde secret existe juste a cote du quotidien sans que les adultes voient tout.",
      },
      {
        label: "Nature sauvage a hauts enjeux",
        explain: "La nature devient un terrain d'aventure avec de vrais enjeux.",
      },
      {
        label: "Ecole ou colonie amelioree",
        explain: "L'ecole ou le camp cache des regles et opportunites extraordinaires.",
      },
      {
        label: "Univers fantaisiste casse-regles",
        explain: "Un univers joyeusement absurde ou les regles classiques n'existent plus.",
      },
      {
        label: "Cadre doux et nostalgique",
        explain: "Un cadre doux et reconfortant qui donne envie d'y rester longtemps.",
      },
    ],
  },
  {
    id: "hero",
    label: "Heros",
    options: [
      { label: "Le penseur malin", explain: "Un heros qui gagne surtout grace a ses idees et sa logique." },
      { label: "Le trouble-fete joueur", explain: "Un heros farceur qui ose sortir des sentiers battus." },
      { label: "Le reveur timide", explain: "Un heros discret qui avance grace a son imagination." },
      { label: "Le brave aventurier", explain: "Un heros qui agit avec courage meme quand c'est difficile." },
      { label: "L'explorateur curieux", explain: "Un heros qui progresse en observant, testant et posant des questions." },
      {
        label: "Le brave aventurier + le penseur malin",
        explain: "Duo muscle et cerveau pour agir vite et reflechir juste.",
      },
      {
        label: "Le trouble-fete joueur + le reveur timide",
        explain: "Duo contraste entre audace et sensibilite pour avancer ensemble.",
      },
    ],
  },
  {
    id: "allie",
    label: "Allie (meilleur ami)",
    options: [
      { label: "L'allie du quotidien", explain: "Un ami tres relatable, simple et attachant." },
      { label: "L'allie protecteur", explain: "Un ami loyal qui protege dans les moments tendus." },
      { label: "Le clown de service", explain: "Un ami drole qui detend l'atmosphere quand le stress monte." },
      { label: "Le farceur piquant", explain: "Un ami vif qui lance des repliques ironiques et amusantes." },
      { label: "L'allie specialiste", explain: "Un ami expert qui apporte une competence cle au bon moment." },
    ],
  },
  {
    id: "defi",
    label: "Defi principal",
    options: [
      {
        label: "Les adultes ne me croient pas",
        explain: "Le heros dit la verite mais personne ne le croit au debut.",
      },
      { label: "Enigme logique ou porte verrouillee", explain: "Il faut resoudre un probleme malin pour avancer." },
      { label: "Mission sauver le plus petit", explain: "Quelqu'un de vulnerable doit etre aide avant qu'il ne soit trop tard." },
      { label: "Vaincre la peur interieure", explain: "Le heros doit depasser son doute et ses jambes qui tremblent." },
      { label: "Rivalite a forts enjeux", explain: "Une competition serieuse oblige le heros a donner le meilleur de lui-meme." },
    ],
  },
  {
    id: "mentor",
    label: "Mentor",
    options: [
      { label: "Animal sage et piquant", explain: "Un animal malin donne des conseils utiles avec un peu d'humour." },
      { label: "Objet parlant expert", explain: "Un objet qui parle apporte un savoir tres precis." },
      { label: "Grand ami inspirant", explain: "Un plus grand ami aide sans juger ni faire la morale." },
      { label: "Creature magique", explain: "Une creature incroyable ouvre la porte a l'etonnement." },
      { label: "Pas de mentor", explain: "Le heros avance seul et decouvre ses ressources interieures." },
    ],
  },
  {
    id: "fun",
    label: "Element fun",
    options: [
      { label: "Chaos inattendu", explain: "Un evenement imprévu chamboule tout de facon amusante." },
      { label: "Magie joueuse", explain: "Une magie malicieuse provoque des surprises droles." },
      { label: "Personnage loufoque", explain: "Un personnage farfelu apporte un vrai souffle comique." },
      { label: "Malentendus hilarants", explain: "Des confusions droles entrainent des situations inattendues." },
      { label: "Aucun", explain: "Le ton reste plus sobre, avec seulement de petites touches d'humour." },
    ],
  },
  {
    id: "theme",
    label: "Theme de transformation",
    options: [
      { label: "Amitie", explain: "L'histoire montre la force des liens, de l'entraide et du groupe." },
      { label: "Confiance en soi", explain: "Le heros apprend a croire en sa voix et en ses capacites." },
      { label: "Courage", explain: "Le heros agit meme quand il ressent de la peur." },
      { label: "Persistance", explain: "Le heros continue malgre les erreurs et les obstacles." },
      { label: "Justice et equite", explain: "Le heros defend ce qui est juste pour lui et pour les autres." },
    ],
  },
  {
    id: "fin",
    label: "Ton de fin",
    options: [
      { label: "Fierte et empowerment", explain: "La fin donne de la fierte et l'envie d'oser encore." },
      { label: "Calme et securisante", explain: "La fin rassure avec un retour doux et stable." },
      { label: "Mystere qui dure", explain: "La fin laisse planer une petite merveille a imaginer." },
      { label: "Sourire final", explain: "La fin se termine sur une touche drole et legere." },
      { label: "Cercle d'amis", explain: "La fin souligne l'importance du groupe et de l'entraide." },
      { label: "Optimisme et confiance", explain: "La fin ouvre la suite avec energie positive." },
      { label: "Resilience face a l'adversite", explain: "La fin montre qu'on peut tomber puis se relever plus fort." },
      { label: "Apprentissage sans fin", explain: "La fin celebre la curiosite continue et l'envie de progresser." },
    ],
  },
];

const VOGler_STRUCTURE = [
  "Acte 1 - Installation: Monde ordinaire, appel de l'aventure, refus, rencontre du mentor, passage du premier seuil.",
  "Acte 2 - Transformation: Epreuves/allies/ennemis, approche de la caverne, ordalie, recompense, chemin du retour.",
  "Acte 3 - Resolution: Resurrection, retour avec l'elixir.",
];

const BEST_PRACTICES = [
  "Utilise la structure comme outil de diagnostic, pas comme formule rigide.",
  "Priorise la transformation interne du heros, pas seulement les evenements.",
  "Chaque etape doit provoquer un vrai glissement emotionnel.",
  "Renforce l'Ordalie: perte, crise identitaire ou peur maximale.",
  "Fais monter les enjeux en continu jusqu'a la Resurrection.",
  "Fais miroir entre voyage externe et evolution interne.",
  "Utilise les personnages comme fonctions narratives claires.",
  "Soigne le retour final avec une valeur transmise au lecteur.",
  "Tu peux compresser ou fusionner des etapes, tout en gardant l'arc.",
  "Fais ressentir peur, soulagement et closure de facon nette.",
];

const BASE_NAMES = [
  "Camille",
  "Emilie",
  "Nicolas",
  "Marina",
  "Isabelle",
  "Aurelie",
  "Raphael",
  "Matheo",
  "Oceane",
  "Adrian",
];

const vowels = "aeiouy";

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomGradientDirection() {
  return `${Math.floor(Math.random() * 360)}deg`;
}

function normalizeNameToCVCVCV(name) {
  const letters = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let out = "";
  let needsVowel = false;

  for (const char of letters) {
    if (!/[a-z]/.test(char)) continue;
    const isVowel = vowels.includes(char);
    if (!needsVowel && !isVowel) {
      out += char;
      needsVowel = true;
    } else if (needsVowel && isVowel) {
      out += char;
      needsVowel = false;
    }
    if (out.length === 6) break;
  }

  const fillConsonants = "trnslmdpc";
  const fillVowels = "aeiou";
  while (out.length < 6) {
    const idx = out.length;
    out += idx % 2 === 0 ? fillConsonants[idx % fillConsonants.length] : fillVowels[idx % fillVowels.length];
  }
  return out.slice(0, 6).replace(/^./, (m) => m.toUpperCase());
}

function makeCharacterNames() {
  const shuffled = [...BASE_NAMES].sort(() => Math.random() - 0.5);
  return {
    heroName: normalizeNameToCVCVCV(shuffled[0]),
    allyName: normalizeNameToCVCVCV(shuffled[1]),
    mentorName: normalizeNameToCVCVCV(shuffled[2]),
  };
}

function buildFields(container, state) {
  container.innerHTML = "";
  FIELD_CONFIG.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field";

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;

    const select = document.createElement("select");
    select.id = field.id;
    select.name = field.id;

    field.options.forEach((option, idx) => {
      const opt = document.createElement("option");
      opt.value = option.label;
      opt.textContent = option.label;
      if (state[field.id] === option.label || (!state[field.id] && idx === 0)) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    const hint = document.createElement("p");
    hint.className = "hint";
    hint.id = `${field.id}-hint`;
    const selected = field.options.find((o) => o.label === select.value) || field.options[0];
    hint.textContent = selected.explain;

    select.addEventListener("change", () => {
      const current = field.options.find((o) => o.label === select.value);
      hint.textContent = current ? current.explain : "";
    });

    wrapper.append(label, select, hint);
    container.appendChild(wrapper);
  });
}

function randomSelections() {
  const state = {};
  FIELD_CONFIG.forEach((field) => {
    state[field.id] = pickRandom(field.options).label;
  });
  return state;
}

function currentSelections(form) {
  const data = {};
  FIELD_CONFIG.forEach((field) => {
    data[field.id] = form.elements[field.id].value;
  });
  return data;
}

function buildPrompt(selections, names) {
  const selectedLines = FIELD_CONFIG.map((field) => {
    const choice = field.options.find((opt) => opt.label === selections[field.id]);
    return `- ${field.label}: ${selections[field.id]} (${choice ? choice.explain : ""})`;
  }).join("\n");

  return [
    "Tu es un auteur jeunesse expert. Ecris en francais uniquement.",
    "Objectif: creer une histoire pour enfant primaire, imaginative, non repetitive et jamais ridicule.",
    "",
    "Parametres choisis:",
    selectedLines,
    "",
    "Noms des personnages (formes simples CVCVCV):",
    `- Heros: ${names.heroName}`,
    `- Allie: ${names.allyName}`,
    `- Mentor: ${names.mentorName}`,
    "",
    "Structure narrative obligatoire (Christopher Vogler, 3 actes / 12 etapes):",
    ...VOGler_STRUCTURE.map((item) => `- ${item}`),
    "",
    "Checklist qualitative obligatoire (10 bonnes pratiques):",
    ...BEST_PRACTICES.map((item) => `- ${item}`),
    "",
    "Consignes de sortie:",
    "- Donne un titre marquant.",
    "- Redige l'histoire complete en sections claires (Acte 1, Acte 2, Acte 3).",
    "- Fais sentir les emotions (peur, soulagement, fermeture positive).",
    "- Respecte une longueur cible proche du nombre de mots demande.",
    "- Adapte le vocabulaire et la complexite a l'age choisi.",
    "- Evite les redites et les formulations absurdes.",
    "- Termine avec une morale douce liee au theme choisi et au ton de fin.",
  ].join("\n");
}

function persist(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function readState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setStatus(text) {
  const status = document.getElementById("status");
  status.textContent = text;
}

function applyRandomButtonGradients() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.style.backgroundImage = `linear-gradient(${randomGradientDirection()}, var(--grad-a), var(--grad-b), var(--grad-c))`;
  });
}

function init() {
  const form = document.getElementById("story-form");
  const fields = document.getElementById("fields");
  const output = document.getElementById("prompt-output");
  const copyBtn = document.getElementById("copy-btn");

  const randomState = randomSelections();
  buildFields(fields, randomState);

  const previous = readState();
  if (previous && previous.prompt) {
    output.value = previous.prompt;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selections = currentSelections(form);
    const names = makeCharacterNames();
    const prompt = buildPrompt(selections, names);
    output.value = prompt;
    persist({ selections, prompt, names, updatedAt: Date.now() });
    setStatus("Prompt genere. Tu peux le copier.");
  });

  copyBtn.addEventListener("click", async () => {
    if (!output.value.trim()) {
      setStatus("Genere d'abord un prompt.");
      return;
    }
    try {
      await navigator.clipboard.writeText(output.value);
      setStatus("Prompt copie dans le presse-papiers.");
    } catch {
      output.select();
      document.execCommand("copy");
      setStatus("Prompt copie.");
    }
  });

  applyRandomButtonGradients();
}

init();
