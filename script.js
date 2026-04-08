const STORAGE_KEY = "leraconteur.v1.3";

const FIELD_CONFIG = [
  {
    id: "age",
    group: "preferences",
    label: "Âge de l'enfant",
    options: [
      { label: "6 ans (CP)", explain: "Idéal pour des phrases courtes, de l'action et des mots très simples." },
      { label: "7-8 ans (CE1/CE2)", explain: "Bon équilibre entre aventure, émotions et réflexion légère." },
      { label: "9-10 ans (CM1/CM2)", explain: "Permet une intrigue plus riche avec davantage de nuances." },
    ],
  },
  {
    id: "longueur",
    group: "preferences",
    label: "Longueur du récit",
    options: [
      { label: "500 mots", explain: "Format court, dynamique et facile à lire d'une traite." },
      { label: "1000 mots", explain: "Format moyen, idéal pour une aventure bien développée." },
      { label: "2000 mots", explain: "Format long, plus immersif et détaillé." },
    ],
  },
  {
    id: "style",
    group: "setup",
    label: "Style d'écriture",
    options: [
      { label: "Actif et percutant", explain: "Des phrases courtes qui vont droit au but." },
      { label: "Hybride visuel", explain: "Un style très imagé, comme un récit presque dessiné." },
      { label: "Documentaire pétillant", explain: "Un ton vivant qui glisse des infos utiles dans l'aventure." },
      { label: "Descriptif immersif", explain: "Des descriptions riches pour ressentir les lieux et les émotions." },
    ],
  },
  {
    id: "monde",
    group: "setup",
    label: "Monde / décor",
    options: [
      { label: "Monde caché en pleine vue", explain: "Un monde secret existe juste à côté du quotidien." },
      { label: "Nature sauvage à forts enjeux", explain: "La nature devient un terrain d'aventure exigeant." },
      { label: "École ou colonie augmentée", explain: "L'école ou la colo cache des règles extraordinaires." },
      { label: "Univers fantaisiste casse-règles", explain: "Un monde joyeusement imprévisible où tout peut arriver." },
      { label: "Cadre doux et nostalgique", explain: "Une ambiance cocon, rassurante et chaleureuse." },
    ],
  },
  {
    id: "theme",
    group: "setup",
    label: "Thème de transformation",
    options: [
      { label: "Amitié", explain: "L'histoire montre la force des liens et de l'entraide." },
      { label: "Confiance en soi", explain: "Le héros apprend à croire en sa voix et ses capacités." },
      { label: "Courage", explain: "Le héros agit même quand il a peur." },
      { label: "Persistance", explain: "Le héros continue malgré les erreurs et les obstacles." },
      { label: "Justice et équité", explain: "Le héros défend ce qui est juste pour tous." },
    ],
  },
  {
    id: "ton",
    group: "setup",
    label: "Ton de fin",
    options: [
      { label: "Fière et motivante", explain: "La fin donne de la fierté et l'envie d'oser." },
      { label: "Calme et rassurante", explain: "La fin offre un retour doux et sécurisant." },
      { label: "Mystère persistant", explain: "La fin laisse une pointe de magie à imaginer." },
      { label: "Sourire final", explain: "La fin se ferme avec une touche drôle et légère." },
      { label: "Cercle d'amis", explain: "La fin valorise le groupe et l'entraide." },
      { label: "Optimisme et confiance", explain: "La fin ouvre l'avenir avec une énergie positive." },
      { label: "Résilience face à l'adversité", explain: "La fin montre qu'on peut se relever plus fort." },
      { label: "Apprentissage continu", explain: "La fin célèbre la curiosité et le progrès." },
    ],
  },
  {
    id: "hero",
    group: "characters",
    label: "Type de héros",
    options: [
      { label: "Le penseur malin", explain: "Il gagne surtout grâce à ses idées et sa logique." },
      { label: "Le trouble-fête joueur", explain: "Il ose sortir des sentiers battus." },
      { label: "Le rêveur timide", explain: "Il avance grâce à son imagination." },
      { label: "Le brave aventurier", explain: "Il agit avec courage même dans l'inconnu." },
      { label: "L'explorateur curieux", explain: "Il progresse en observant et en expérimentant." },
    ],
  },
  {
    id: "allie",
    group: "characters",
    label: "Type d'allié",
    options: [
      { label: "L'allié du quotidien", explain: "Un ami très proche dans lequel on se reconnaît." },
      { label: "L'allié protecteur", explain: "Un ami loyal qui protège quand ça se complique." },
      { label: "Le clown de service", explain: "Un ami drôle qui détend l'atmosphère." },
      { label: "Le farceur piquant", explain: "Un ami vif, ironique et amusant." },
      { label: "L'allié spécialiste", explain: "Un ami expert d'une compétence clé." },
    ],
  },
  {
    id: "mentor",
    group: "characters",
    label: "Type de mentor",
    options: [
      { label: "Animal sage et piquant", explain: "Un animal malin donne des conseils utiles." },
      { label: "Objet parlant expert", explain: "Un objet vivant partage un savoir précis." },
      { label: "Grand ami inspirant", explain: "Un plus grand aide sans moraliser." },
      { label: "Créature magique", explain: "Une présence merveilleuse ouvre l'imaginaire." },
      { label: "Pas de mentor", explain: "Le héros avance seul et puise en lui-même." },
    ],
  },
  {
    id: "trickster",
    group: "characters",
    label: "Type de trickster",
    options: [
      { label: "Chaos inattendu", explain: "Il déclenche des événements surprenants et drôles." },
      { label: "Magie joueuse", explain: "Il crée des surprises ludiques et imprévisibles." },
      { label: "Personnage loufoque", explain: "Il apporte un vrai souffle comique." },
      { label: "Malentendus hilarants", explain: "Il provoque des quiproquos amusants." },
      { label: "Aucun trickster", explain: "L'histoire garde un ton plus sobre." },
    ],
  },
  {
    id: "opposant",
    group: "characters",
    label: "Type d'opposant",
    options: [
      { label: "Le rival ambitieux", explain: "Il veut gagner à tout prix, même injustement." },
      { label: "Le gardien des règles", explain: "Il bloque le héros au nom de règles trop rigides." },
      { label: "Le manipulateur charmeur", explain: "Il séduit pour mieux tromper." },
      { label: "La force incontrôlable", explain: "Il représente un danger puissant et difficile à prévoir." },
      { label: "L'ombre intérieure", explain: "L'opposant principal est la peur ou le doute du héros." },
    ],
  },
];

const TASTE_FIELDS = [
  {
    id: "ceQueJaimerais",
    label: "Ce que j'aimerais",
    placeholder: "Exemple: une quête dans la forêt, une énigme, un dragon gentil, beaucoup d'amitié.",
  },
  {
    id: "ceQueJeVeuxEviter",
    label: "Ce que je veux éviter",
    placeholder: "Exemple: trop de disputes, des scènes effrayantes, des histoires tristes.",
  },
];

const CHARACTER_ARCHETYPES = ["Héros", "Allié", "Mentor", "Trickster", "Antagoniste"];

const STRUCTURE_COMPACT = [
  "Acte 1: Monde ordinaire, appel, refus, mentor, franchissement du seuil.",
  "Acte 2: Épreuves/alliés/ennemis, approche, ordalie, récompense, chemin du retour.",
  "Acte 3: Résurrection, retour avec l'élixir.",
];

const BEST_PRACTICES_COMPACT = [
  "Structure = outil de diagnostic, pas formule rigide.",
  "Priorité à la transformation interne du héros.",
  "Chaque étape produit un basculement émotionnel.",
  "Ordalie forte (perte/peur/crise identitaire).",
  "Enjeux croissants jusqu'à la résurrection.",
  "Miroir entre conflit externe et conflit interne.",
  "Rôles clairs: qui pousse, qui teste, qui guide.",
  "Retour final utile: l'élixir doit servir aux autres.",
  "Compression possible des étapes sans casser l'arc.",
  "Le lecteur doit ressentir peur, soulagement et fermeture.",
];

const BASE_NAMES = ["Camille", "Émilie", "Nicolas", "Marina", "Isabelle", "Aurélie", "Raphaël", "Mathéo", "Océane", "Adrian"];
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

function generateSuggestedNames() {
  const shuffled = [...BASE_NAMES].sort(() => Math.random() - 0.5);
  return CHARACTER_ARCHETYPES.map((archetype, idx) => ({
    archetype,
    name: normalizeNameToCVCVCV(shuffled[idx % shuffled.length]),
  }));
}

function buildSelectField(field, state) {
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
    if (state[field.id] === option.label || (!state[field.id] && idx === 0)) opt.selected = true;
    select.appendChild(opt);
  });
  const hint = document.createElement("p");
  hint.className = "hint";
  hint.id = `${field.id}-hint`;
  hint.textContent = (field.options.find((o) => o.label === select.value) || field.options[0]).explain;
  select.addEventListener("change", () => {
    const current = field.options.find((o) => o.label === select.value);
    hint.textContent = current ? current.explain : "";
  });
  wrapper.append(label, select, hint);
  return wrapper;
}

function buildTextField(field, state) {
  const wrapper = document.createElement("div");
  wrapper.className = "field";
  wrapper.style.gridColumn = "1 / -1";
  const label = document.createElement("label");
  label.setAttribute("for", field.id);
  label.textContent = field.label;
  const textarea = document.createElement("textarea");
  textarea.id = field.id;
  textarea.name = field.id;
  textarea.rows = 4;
  textarea.placeholder = field.placeholder;
  textarea.value = state[field.id] || "";
  const hint = document.createElement("p");
  hint.className = "hint";
  hint.textContent = "Tu peux écrire plusieurs lignes. Sois simple et précis.";
  wrapper.append(label, textarea, hint);
  return wrapper;
}

function buildSectionFields(container, group, state) {
  container.innerHTML = "";
  FIELD_CONFIG.filter((field) => field.group === group).forEach((field) => {
    container.appendChild(buildSelectField(field, state));
  });
}

function buildTasteFields(container, state) {
  TASTE_FIELDS.forEach((field) => container.appendChild(buildTextField(field, state)));
}

function buildCharacterEditor(container, characters) {
  container.innerHTML = "";
  const title = document.createElement("p");
  title.className = "characters-title";
  title.textContent = "Noms suggérés (modifiables) :";
  container.appendChild(title);
  characters.forEach((char, idx) => {
    const row = document.createElement("div");
    row.className = "character-row";

    const archetypeSelect = document.createElement("select");
    archetypeSelect.name = `charArchetype${idx}`;
    CHARACTER_ARCHETYPES.forEach((a) => {
      const opt = document.createElement("option");
      opt.value = a;
      opt.textContent = a;
      if (a === char.archetype) opt.selected = true;
      archetypeSelect.appendChild(opt);
    });

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = `charName${idx}`;
    nameInput.value = char.name;
    nameInput.placeholder = "Nom du personnage";

    row.append(archetypeSelect, nameInput);
    container.appendChild(row);
  });
}

function randomSelections() {
  const state = {};
  FIELD_CONFIG.forEach((field) => {
    state[field.id] = pickRandom(field.options).label;
  });
  TASTE_FIELDS.forEach((field) => {
    state[field.id] = "";
  });
  return state;
}

function currentSelections(form) {
  const data = {};
  FIELD_CONFIG.forEach((field) => {
    data[field.id] = form.elements[field.id].value;
  });
  TASTE_FIELDS.forEach((field) => {
    data[field.id] = form.elements[field.id].value.trim();
  });
  return data;
}

function currentCharacters(editor) {
  const rows = editor.querySelectorAll(".character-row");
  return [...rows].map((row) => ({
    archetype: row.querySelector("select").value,
    name: row.querySelector("input").value.trim(),
  }));
}

function buildPrompt(selections, characters) {
  const selectedLines = FIELD_CONFIG.map((field) => {
    const choice = field.options.find((opt) => opt.label === selections[field.id]);
    return `- ${field.label}: ${selections[field.id]} (${choice ? choice.explain : ""})`;
  }).join("\n");

  const tasteLines = [
    `- Ce que j'aimerais: ${selections.ceQueJaimerais || "Aucune préférence précisée."}`,
    `- Ce que je veux éviter: ${selections.ceQueJeVeuxEviter || "Aucun évitement précisé."}`,
  ].join("\n");

  const characterLines = characters
    .map((c) => `- ${c.archetype}: ${c.name || "Nom à inventer (forme simple CVCVCV)"}`)
    .join("\n");

  return [
    "Tu es un auteur jeunesse expert. Écris en français uniquement.",
    "Objectif: créer une histoire enfant (primaire) imaginative, non répétitive et jamais ridicule.",
    "",
    "Paramètres choisis:",
    selectedLines,
    "",
    "Goûts de l'enfant:",
    tasteLines,
    "",
    "Personnages (archétype + nom):",
    characterLines,
    "",
    "Structure imposée (compacte):",
    ...STRUCTURE_COMPACT.map((item) => `- ${item}`),
    "",
    "Bonnes pratiques imposées (compactes):",
    ...BEST_PRACTICES_COMPACT.map((item) => `- ${item}`),
    "",
    "À supprimer (ne pas ajouter):",
    "- Intro interdite: ouverture, préambule, accroche, reformulation de la demande.",
    "- Outro interdite: conclusion méta, post-scriptum, résumé explicatif, justification.",
    "",
    "Consignes de sortie:",
    "- Donne uniquement l'histoire finale (pas d'explication de méthode).",
    "- Découpe clairement en Acte 1, Acte 2, Acte 3.",
    "- Respecte une longueur proche du nombre de mots demandé.",
    "- Fais monter les enjeux jusqu'à l'ordalie et la résurrection.",
    "- Termine sur le ton de fin choisi, avec un élixir utile.",
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
  document.getElementById("status").textContent = text;
}

function applyRandomButtonGradients() {
  document.querySelectorAll(".btn").forEach((button) => {
    button.style.backgroundImage = `linear-gradient(${randomGradientDirection()}, var(--grad-a), var(--grad-b), var(--grad-c))`;
  });
}

function init() {
  const form = document.getElementById("story-form");
  const output = document.getElementById("prompt-output");
  const copyBtn = document.getElementById("copy-btn");
  const preferencesFields = document.getElementById("preferences-fields");
  const setupFields = document.getElementById("setup-fields");
  const charactersFields = document.getElementById("characters-fields");
  const charactersEditor = document.getElementById("characters-editor");

  const state = randomSelections();
  const names = generateSuggestedNames();

  buildSectionFields(preferencesFields, "preferences", state);
  buildTasteFields(preferencesFields, state);
  buildSectionFields(setupFields, "setup", state);
  buildSectionFields(charactersFields, "characters", state);
  buildCharacterEditor(charactersEditor, names);

  const previous = readState();
  if (previous && previous.prompt) {
    output.value = previous.prompt;
    TASTE_FIELDS.forEach((field) => {
      if (previous.selections?.[field.id] && form.elements[field.id]) {
        form.elements[field.id].value = previous.selections[field.id];
      }
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selections = currentSelections(form);
    const characters = currentCharacters(charactersEditor);
    const prompt = buildPrompt(selections, characters);
    output.value = prompt;
    persist({ selections, characters, prompt, updatedAt: Date.now() });
    setStatus("Prompt généré. Tu peux le copier.");
  });

  copyBtn.addEventListener("click", async () => {
    if (!output.value.trim()) {
      setStatus("Génère d'abord un prompt.");
      return;
    }
    try {
      await navigator.clipboard.writeText(output.value);
      setStatus("Prompt copié dans le presse-papiers.");
    } catch {
      output.select();
      document.execCommand("copy");
      setStatus("Prompt copié.");
    }
  });

  applyRandomButtonGradients();
}

init();
