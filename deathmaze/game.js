"use strict";

const $ = id => document.getElementById(id);
const key = (x, y) => x + "," + y;
const clone = value => JSON.parse(JSON.stringify(value));
const storageKey = "deathmaze-table-v1";
const partyStorageKey = "deathmaze-party-roster-v1";
const names = [
  "Hero A|Hero B|Wizard A|Wizard B|Randomizer 1|Randomizer 2|Randomizer 3|Alligator|Cronk|Cronk",
  "Thief A|Thief B|Party|Randomizer 4|Randomizer 5|Randomizer 6|Evil Hero|Evil Thief|Evil Wizard|Gargoyle",
  "Giant Ant|Giant Spider|Goblin|Goblin|Goblin|Hellhound|Medusa|Mummy|Ogre|Ogre",
  "Orc|Orc|Orc|Skeleton|Skeleton|Skeleton|Troll|Vampire|Vampire Bat|Vampire Bat"
].flatMap(row => row.split("|"));
const counters = Array.from({ length: 200 }, (_, id) => {
  const index = id % 100;
  const row = Math.floor(index / 10);
  const column = index % 10;
  const cup = index >= 86 ? "Corridor" : index >= 42 ? "Room" : null;
  const name = names[index] || (index === 40 ? "Vampire Bat" : index === 41 ? "Werewolf" :
    index < 50 ? "Corridor redirect" : cup + " " + (index + 1));
  return { id, row, column, cup, name };
});
const gateId = 200;
counters.push({ id: gateId, cup: "Corridor", name: "Entrance gate" });
const starterIds = [201, 202, 203];
for (const id of starterIds) counters.push({ id, cup: "Corridor", name: "Approach corridor" });
const directions = [[0,-1], [1,0], [0,1], [-1,0]];
// Counter edges in north, east, south, west order. D is a narrow doorway, H a wide hallway.
const segmentEdges = [
  "DHDH","DH-H","DH-H","DH-H","HD-H","HH-D","-H-H","-H-H",
  "--D-","--D-","D-D-","--D-","--D-","--D-","--D-","--D-","--D-","--D-",
  "D---","D---","D---","D---","D---","DDD-","-D-D","D--D","DD--","D--D",
  "-D--","-D-D","-D-D","-D-D","-D-D","DD-D","-DDD","-DDD","-D-D","--DD",
  "DD-D","DD-D","DDDD","DDDD","DDDD","-DDD","HHDD","--HH","DHH-","D-HH",
  "-HDH","-HDH","DHDH","DHDH","DH-H","DH-H","DHDH","-HDH","-H-H","-H-H"
];

function segmentAt(position) {
  return state.tiles[position]?.find(piece => counters[piece.id].cup);
}
function edge(piece, direction) {
  if (!piece) return "";
  const side = (direction - piece.rotation + 4) % 4;
  if (piece.id === gateId) return side === 1 ? "open" : "";
  if (piece.id > gateId) return side % 2 ? "open" : "";
  const connector = segmentEdges[piece.id % 100 - 42]?.[side];
  return connector === "D" ? "door" : connector === "H" ? "open" : "";
}
function doorKey(from, to) {
  return [from, to].sort().join("|");
}
const sheetRows = [183, 231, 305, 353, 422, 475, 550, 599, 671, 720];

function fresh() {
  return { available: counters.slice(0, gateId).map(counter => counter.id), held: null, tiles: {}, party: null,
    entrance: null, camera: [0, 0], selected: null, heroes: [], log: [] };
}

function load() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : fresh();
  } catch {
    return fresh();
  }
}

let state = load();
state.log = state.log.filter(line => !line.startsWith("Wandering encounter check · ") &&
  !/^(Room|Corridor|Corridor redirect) (?:\d+ )?· Sheet [12] placed via (?:an open corridor|a doorway)\.$/.test(line));
let history = [];
let message = "";
function renderAndSave() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
  render();
}
function checkpoint() {
  history.push(clone(state));
  if (history.length > 40) history.shift();
}
function status(text) {
  message = text;
  renderAndSave();
}
function addLog(text) {
  state.log.unshift(text);
  if (state.log.length > 100) state.log.pop();
}
function label(id) {
  if (id === gateId) return counters[id].name;
  return counters[id].name + " · Sheet " + (id < 100 ? 1 : 2);
}
function art(piece) {
  const counter = counters[piece.id];
  const tile = document.createElement("span");
  tile.className = "chit";
  if (counter.cup) tile.classList.add("segment");
  tile.title = label(piece.id);
  if (piece.id >= gateId) {
    tile.classList.add(piece.id === gateId ? "gate" : "approach");
    tile.style.transform = `rotate(${piece.rotation * 90}deg)`;
    return tile;
  }
  tile.style.setProperty("--sprite-x", (23 + counter.column * 48.2) / (1050 - 44) * 100 + "%");
  tile.style.setProperty("--sprite-y", (sheetRows[counter.row] - 22) / (812 - 44) * 100 + "%");
  tile.style.transform = `rotate(${piece.rotation * 90}deg)`;
  tile.style.filter = counter.cup ? "sepia(.6)" : counter.row < 2 && counter.column < 5 ? "sepia(.2)" : "sepia(.8)";
  return tile;
}
function take(id) {
  if (!state.entrance || state.held || !state.available.includes(id)) return;
  checkpoint();
  state.available = state.available.filter(piece => piece !== id);
  state.held = { id, rotation: 0 };
  status(counters[id].name === "Corridor redirect" && state.available.some(piece => counters[piece].cup === "Corridor")
    ? "Corridor redirect. Return this chit to the Room cup and draw from the Corridor cup (§5.23)."
    : "Rotate the held counter, then click a square to place it.");
}

function moveType(x, y) {
  if (!state.party || state.held || state.scene || state.ended || !living().length) return "";
  const [px, py] = state.party.split(",").map(Number);
  const direction = directions.findIndex(([dx, dy]) => px + dx === x && py + dy === y);
  if (direction < 0) return "";
  const exit = edge(segmentAt(state.party), direction);
  if (!exit) return "";
  const position = key(x, y);
  if (exit === "door" && state.lockedDoors?.includes(doorKey(state.party, position))) return "locked";
  const neighbor = segmentAt(position);
  if (!neighbor) return fittingSegments(x, y, direction, exit).length ? exit : "";
  const entry = edge(neighbor, (direction + 2) % 4);
  return entry === exit ? exit : "";
}

function fittingSegments(x, y, direction, exit) {
  const entry = (direction + 2) % 4;
  const neighbors = directions.map(([dx, dy]) => segmentAt(key(x + dx, y + dy)));
  const used = new Set(Object.values(state.tiles).flatMap(stack => stack.map(piece => piece.id)));
  const starter = exit === "open" && segmentAt(state.entrance)?.id === gateId &&
    starterIds.find(id => !used.has(id));
  const pool = starter ? [starter] : state.available.filter(id => {
    const index = id % 100;
    return exit === "door" ? index >= 50 && index < 86 : counters[id].cup === "Corridor";
  });
  return pool.flatMap(id => {
    for (let rotation = 0; rotation < 4; rotation++) {
      const piece = { id, rotation };
      if (edge(piece, entry) === exit && neighbors.every((neighbor, side) =>
        !neighbor || edge(piece, side) === edge(neighbor, (side + 2) % 4))) return [piece];
    }
    return [];
  });
}

function explore(position, x, y, exit) {
  const existing = segmentAt(position);
  const [px, py] = state.party.split(",").map(Number);
  const direction = directions.findIndex(([dx, dy]) => px + dx === x && py + dy === y);
  if (!existing) {
    const candidates = fittingSegments(x, y, direction, exit);
    if (!candidates.length) return status("No remaining segment can connect here.");
    const piece = candidates[Math.floor(Math.random() * candidates.length)];
    const { id } = piece;
    checkpoint();
    state.available = state.available.filter(availableId => availableId !== id);
    state.tiles[position] = [...(state.tiles[position] || []), piece];
  } else {
    checkpoint();
  }
  state.party = state.selected = position;
  addLog("Party moved to " + position + ".");
  history = [];
  if (position === state.entrance) state.scene = { phase: "exit" };
  else openScene(position, !existing, exit);
  status("Green: hallway · Yellow: doorway · Red: locked door.");
}

function cellClick(position, x, y) {
  const stack = state.tiles[position];
  if (state.held) {
    if (counters[state.held.id].cup && stack?.some(piece => counters[piece.id].cup)) {
      return status("That square already has a maze segment.");
    }
    checkpoint();
    state.tiles[position] = [...(stack || []), state.held];
    if (state.entrance === null && counters[state.held.id].cup === "Corridor") {
      state.entrance = state.party = position;
    }
    state.held = null;
    state.selected = position;
    return status("Counter placed. Click a neighboring segment to move the party.");
  }
  const exit = moveType(x, y);
  if (exit === "locked") return status("That door is locked.");
  if (exit) return explore(position, x, y, exit);
  state.selected = position;
  status(stack?.length ? label(stack.at(-1).id) : "Choose a draw cup or take a counter from the supply.");
}
function rotate() {
  const piece = state.held || state.tiles[state.selected]?.at(-1);
  if (!piece || (!state.held && counters[piece.id].cup)) return;
  checkpoint();
  piece.rotation = (piece.rotation + 1) % 4;
  renderAndSave();
}
function returnCounter() {
  const stack = state.tiles[state.selected];
  if (!state.held && !stack?.length) return;
  if (!state.held && (state.selected === state.party || state.selected === state.entrance)
      && counters[stack.at(-1).id].cup) return status("Move the party off this segment before removing it. The entrance stays in play.");
  checkpoint();
  if (state.held) {
    if (state.held.id !== gateId) state.available.push(state.held.id);
    state.held = null;
  } else {
    const removed = stack.pop();
    if (removed.id < gateId) state.available.push(removed.id);
    if (!stack.length) delete state.tiles[state.selected];
  }
  status("Counter returned to its cup or supply.");
}
function renderBoard() {
  const cells = [];
  for (let dy = -5; dy <= 5; dy++) {
    for (let dx = -5; dx <= 5; dx++) {
      const x = state.camera[0] + dx;
      const y = state.camera[1] + dy;
      const position = key(x, y);
      const stack = state.tiles[position] || [];
      const cell = document.createElement("button");
      const exit = moveType(x, y);
      cell.className = "cell";
      if (exit) cell.classList.add("move", exit);
      cell.classList.toggle("entrance", position === state.entrance);
      cell.classList.toggle("party", position === state.party);
      cell.setAttribute("aria-pressed", String(position === state.selected));
      cell.setAttribute("aria-label", [position, ...stack.map(piece => label(piece.id)),
        exit ? ({ door: "Move through doorway", open: "Move through hallway", locked: "Locked door" }[exit]) : "", position === state.party ? "Party" : "", position === state.entrance ? "Entrance" : ""].filter(Boolean).join(" · "));
      cell.onclick = () => cellClick(position, x, y);
      cell.append(...stack.map(art));
      cells.push(cell);
    }
  }
  $("board").replaceChildren(...cells);
}
const fields = [
  ["name", "Name"], ["class", "Class"], ["wounds", "Wound points", "number"],
  ["resistance", "Magic resistance", "number"], ["weapon1", "Weapon 1"], ["weapon2", "Weapon 2"],
  ["skill", "Weapon 1 Skill"], ["skill2", "Weapon 2 Skill"], ["xp", "Experience", "number"], ["gold", "Bezants / gem value", "number"],
  ["spells", "Detrap skill / spell"], ["items", "Magic items & notes", "wide"]
];
const roles = ["Hero", "Thief", "Wizard"];
const weapons = ["Sword", "Axe", "Hammer", "Bow", "Dagger", "Throwing Dagger"];
const wizardWeapons = ["Throwing Dagger", "Dagger"];
const wizardSpells = ["Blast", "Charm", "Explosion", "Heal", "Lightning", "Lock",
  "Mage Armor", "Neutralize Poison", "Oratory", "Sleep", "Strength", "Stone-to-Flesh"];
const literaryNames = {
  Hero: ["Aragorn", "Éowyn", "Faramir", "Beowulf", "Roland", "Lancelot", "Conan", "Red Sonja"],
  Thief: ["Bilbo Baggins", "Locke Lamora", "Jean Tannen", "Artful Dodger", "Ali Baba", "The Gray Mouser", "Cugel", "Moll Flanders"],
  Wizard: ["Gandalf", "Merlin", "Ged", "Ogion", "Pug", "Belgarath", "Raistlin", "Elminster"]
};

function pickName(role, hero) {
  const used = new Set(state.heroes.filter(other => other !== hero).map(other => other.name));
  const choices = literaryNames[role].filter(name => !used.has(name));
  return choices[Math.floor(Math.random() * choices.length)];
}

const allowedRanks = { Hero: [1], Thief: [1, 2], Wizard: [2] };

function rankOptions(role, hero) {
  return allowedRanks[role].filter(rank =>
    state.heroes.filter(other => other !== hero && other.rank === rank).length < 3);
}

function applyClass(hero, role) {
  const primary = { Hero: weapons[Math.floor(Math.random() * 3)], Thief: "Bow", Wizard: "Throwing Dagger" };
  const secondary = { Hero: "Bow", Thief: "Dagger", Wizard: "Dagger" };
  if (!hero.name || hero.name === hero.suggestedName) {
    hero.name = hero.suggestedName = pickName(role, hero);
  }
  Object.assign(hero, { class: role, wounds: { Hero: 8, Thief: 6, Wizard: 4 }[role],
    resistance: role === "Wizard" ? 2 : 1, weapon1: primary[role], weapon2: secondary[role],
    skill: role === "Wizard" ? "" : "+1 " + primary[role],
    skill2: "", extraSkills: [], extraSpells: role === "Wizard" ? ["Heal"] : [], spells: { Hero: "", Thief: "1 Detrap", Wizard: "Blast" }[role] });
}

for (const hero of state.heroes) {
  if (!hero.name) hero.name = hero.suggestedName = pickName(hero.class, hero);
  if (hero.rank) continue;
  hero.rank = rankOptions(hero.class, hero)[0] || null;
  if (!hero.weapon1) {
    const wounds = hero.wounds;
    applyClass(hero, hero.class);
    if (wounds !== "" && wounds != null) hero.wounds = wounds;
  } else if (hero.class === "Wizard" && (hero.wounds === "" || hero.wounds == null)) {
    hero.wounds = 4;
    hero.resistance = 2;
  }
}

function skillChoices(weapon) {
  return weapon ? ["", ...Array.from({ length: 6 }, (_, index) => "+" + (index + 1) + " " + weapon)] : [""];
}

function addTraining(container, hero, property, label, options, primary) {
  const entries = hero[property] || [];
  const used = new Set([primary, ...entries]);
  const available = options.filter(option => !used.has(option));
  const group = document.createElement("div");
  group.className = "actions";
  for (const [index, entry] of entries.entries()) {
    const remove = document.createElement("button");
    remove.textContent = entry + " ×";
    remove.setAttribute("aria-label", "Remove " + entry);
    remove.onclick = () => {
      entries.splice(index, 1);
      renderAndSave();
    };
    group.append(remove);
  }
  const select = document.createElement("select");
  select.setAttribute("aria-label", label + " to add");
  for (const option of available) select.add(new Option(option, option));
  select.disabled = !available.length;
  const add = document.createElement("button");
  add.textContent = "Add " + label.toLowerCase();
  add.disabled = !available.length;
  add.onclick = () => {
    if (!available.includes(select.value)) return;
    hero[property] = [...entries, select.value];
    renderAndSave();
  };
  group.append(select, add);
  container.append(group);
}

function renderHeroes() {
  $("add").disabled = state.heroes.length >= 6 || !rankOptions($("add-class").value).length;
  const cards = state.heroes.map((hero, index) => {
    const card = document.createElement("article");
    card.className = "hero";
    const title = document.createElement("h3");
    title.textContent = hero.name || hero.class;
    const rank = document.createElement("select");
    rank.setAttribute("aria-label", "Marching rank");
    if (!hero.rank) rank.add(new Option("Unassigned", ""));
    for (const value of rankOptions(hero.class, hero)) rank.add(new Option("Rank " + value, value));
    rank.value = hero.rank || "";
    rank.onchange = () => {
      hero.rank = Number(rank.value);
      renderAndSave();
    };
    const inputs = document.createElement("div");
    inputs.className = "fields";
    for (const [property, title, type] of fields) {
      if (property === "spells" && hero.class === "Hero") continue;
      const label = document.createElement("label");
      label.textContent = property === "spells" ? (hero.class === "Wizard" ? "Starting spell" : "Detrap skill") : title;
      const permittedWeapons = hero.class === "Wizard" ? wizardWeapons : weapons;
      const choices = {
        class: roles.filter(role => role === hero.class || rankOptions(role, hero).length),
        weapon1: permittedWeapons,
        weapon2: permittedWeapons,
        skill: skillChoices(hero.weapon1),
        skill2: skillChoices(hero.weapon2),
        spells: hero.class === "Wizard" ? wizardSpells.filter(spell => !hero.extraSpells?.includes(spell)) : hero.class === "Thief"
          ? ["1 Detrap", "2 Detrap", "3 Detrap", "4 Detrap", "5 Detrap", "6 Detrap"] : [""]
      }[property];
      const field = document.createElement(choices ? "select" : type === "wide" ? "textarea" : "input");
      if (choices) {
        for (const choice of new Set([...choices, hero[property]].filter(choice => choice != null))) {
          field.add(new Option(choice || "None", choice));
        }
      } else if (type === "number") field.type = "number";
      if (type === "wide") label.className = "wide";
      field.value = hero[property] ?? "";
      field.onchange = () => {
        if (property === "class") {
          const ranks = rankOptions(field.value, hero);
          if (!ranks.length) return;
          applyClass(hero, field.value);
          if (!ranks.includes(hero.rank)) hero.rank = ranks[0];
          renderAndSave();
        } else if (property === "weapon1" || property === "weapon2") {
          const skillKey = property === "weapon1" ? "skill" : "skill2";
          const previous = hero[skillKey] || "";
          const bonus = /^\+\d+/.exec(previous)?.[0];
          hero[property] = field.value;
          hero[skillKey] = bonus ? bonus + " " + field.value : ""; 
          renderAndSave();
        } else {
          hero[property] = field.value;
          if (property === "wounds" && !state.entrance) hero.maxWounds = Number(field.value);
          if (property === "skill" || property === "skill2" || property === "spells") return renderAndSave();
          if (property === "name") title.textContent = field.value || hero.class;
          try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
        }
      };
      label.append(field);
      inputs.append(label);
    }
    const actions = document.createElement("div");
    actions.className = "actions";
    for (const [text, delta] of [["Move earlier", -1], ["Move later", 1], ["Remove", 0]]) {
      const button = document.createElement("button");
      button.textContent = text;
      const peers = state.heroes.filter(other => other.rank === hero.rank);
      const neighbor = peers[peers.indexOf(hero) + delta];
      button.disabled = delta !== 0 && !neighbor;
      button.onclick = () => {
        if (delta) {
          const target = state.heroes.indexOf(neighbor);
          [state.heroes[index], state.heroes[target]] = [state.heroes[target], state.heroes[index]];
        } else {
          state.heroes.splice(index, 1);
        }
        renderAndSave();
      };
      actions.append(button);
    }
    card.append(title, rank, inputs);
    if (hero.class === "Wizard") {
      const training = document.createElement("div");
      training.className = "training";
      const heading = document.createElement("h4");
      heading.textContent = "Spells";
      training.append(heading);
      addTraining(training, hero, "extraSpells", "Spell", wizardSpells, hero.spells);
      card.append(training);
    }
    card.append(actions);
    return card;
  });
  const ranks = [1, 2];
  if (state.heroes.some(hero => !hero.rank)) ranks.push(null);
  $("heroes").replaceChildren(...ranks.map(rank => {
    const group = document.createElement("div");
    group.className = "rank";
    const heading = document.createElement("h3");
    const count = state.heroes.filter(hero => hero.rank === rank).length;
    heading.textContent = rank ? "Rank " + rank + " · " + count + "/3" : "Unassigned from saved game";
    group.append(heading, ...cards.filter((card, index) => state.heroes[index].rank === rank));
    return group;
  }));
}
function readParties() {
  try {
    const entries = JSON.parse(localStorage.getItem(partyStorageKey) || "[]");
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function renderPartyRoster() {
  const select = $("saved-parties");
  const previous = select.value;
  const parties = readParties();
  select.replaceChildren(new Option(parties.length ? "Choose a party" : "No saved parties", ""),
    ...parties.map(party => new Option(party.name, party.name)));
  if (parties.some(party => party.name === previous)) select.value = previous;
  $("party-name").value = state.partyName || "";
  $("load-party").disabled = !select.value;
  $("save-party").disabled = !living().length || !$("party-name").value.trim();
}

$("party-name").oninput = () => {
  state.partyName = $("party-name").value;
  $("save-party").disabled = !living().length || !state.partyName.trim();
  try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
};
$("saved-parties").onchange = () => {
  $("load-party").disabled = !$("saved-parties").value;
};
$("save-party").onclick = () => {
  const name = $("party-name").value.trim();
  const survivors = living();
  if (!name || !survivors.length) return;
  const parties = readParties();
  const index = parties.findIndex(party => party.name === name);
  const heroes = clone(survivors);
  const party = { name, heroes };
  if (index < 0) parties.push(party); else parties[index] = party;
  try {
    localStorage.setItem(partyStorageKey, JSON.stringify(parties));
  } catch {
    $("party-status").textContent = "Browser storage is unavailable. The party could not be saved.";
    return;
  }
  state.partyName = name;
  renderAndSave();
  $("saved-parties").value = name;
  $("load-party").disabled = false;
  $("party-status").textContent = name + " saved with " + heroes.length + " surviving adventurer(s).";
};
$("load-party").onclick = () => {
  const party = readParties().find(entry => entry.name === $("saved-parties").value);
  if (!party) return;
  if ((state.entrance || state.held || state.heroes.length) &&
      !confirm("Start a fresh expedition with " + party.name + "? This replaces the current maze and active party.")) return;
  state = fresh();
  state.partyName = party.name;
  state.heroes = clone(party.heroes).map(hero => {
    hero.wounds = Math.max(Number(hero.maxWounds || { Hero:8, Thief:6, Wizard:4 }[hero.class]), Number(hero.wounds));
    delete hero.spellWounds;
    delete hero.combatModifier;
    delete hero.strengthBonus;
    return hero;
  });
  history = [];
  $("party-status").textContent = party.name + " is ready for a new expedition.";
  status("");
};

function render() {
  renderPartyRoster();
  renderBoard();
  $("status").textContent = message || (state.entrance === null
    ? "Add your adventurers, then place the entrance gate."
    : "Green: hallway · Yellow: doorway · Red: locked door.");
  $("start").disabled = Boolean(state.entrance || state.held);
  $("undo").disabled = !history.length || Boolean(state.scene);
  $("party-treasure").textContent = state.treasure || 0;
  $("magic").disabled = state.ended || Boolean(state.scene) || !magicActions().length;
  $("decision").oncancel = event => event.preventDefault();
  $("cups").replaceChildren(...["Corridor", "Room"].map(cup => {
    const count = state.available.filter(id => counters[id].cup === cup).length;
    const counter = document.createElement("span");
    counter.textContent = cup + " · " + count;
    return counter;
  }));
  const heldText = document.createElement("span");
  heldText.textContent = state.held ? label(state.held.id) : "No counter held";
  $("held").replaceChildren(...(state.held ? [art(state.held), heldText] : [heldText]));
  const selected = $("supply").value;
  const supply = state.available.filter(id => !counters[id].cup).sort((a,b) => a-b);
  $("supply").replaceChildren(...supply.map(id => new Option(label(id), id)));
  if (supply.includes(Number(selected)) && selected !== "") $("supply").value = selected;
  $("take").disabled = !state.entrance || Boolean(state.held) || !supply.length;
  $("log").replaceChildren(...state.log.map(line => {
    const item = document.createElement("li");
    item.textContent = line;
    return item;
  }));
  renderHeroes();
  renderScene();
}
$("start").onclick = () => {
  if (state.entrance || state.held) return;
  if (!living().length) return status("Add at least one adventurer before entering the maze.");
  checkpoint();
  state.held = { id: gateId, rotation: 0 };
  status("Place the gate corridor to begin the adventure.");
};
$("rotate").onclick = rotate;
$("return").onclick = returnCounter;
$("take").onclick = () => take(Number($("supply").value));
$("undo").onclick = () => {
  if (!history.length) return;
  const previous = history.pop();
  state = { ...previous, heroes: state.heroes, log: state.log };
  status("Board action undone.");
};
for (const [id, dx, dy] of [["left",-3,0],["right",3,0],["up",0,-3],["down",0,3]]) {
  $(id).onclick = () => {
    state.camera[0] += dx;
    state.camera[1] += dy;
    renderAndSave();
  };
}
$("center").onclick = () => {
  state.camera = state.party ? state.party.split(",").map(Number) : [0,0];
  renderAndSave();
};
$("add-class").onchange = renderHeroes;
$("add").onclick = () => {
  const role = $("add-class").value;
  const rank = rankOptions(role)[0];
  if (!rank || state.heroes.length >= 6) return;
  const hero = { name: "", rank, xp: 0, gold: 0, items: "" };
  applyClass(hero, role);
  state.heroes.push(hero);
  renderAndSave();
};
$("reset").onclick = () => {
  if (!confirm("Clear this maze, party, and adventure log?")) return;
  state = fresh();
  history = [];
  $("party-status").textContent = "";
  status("");
};
$("journal").onsubmit = event => {
  event.preventDefault();
  const text = $("note").value.trim();
  if (text) addLog(text);
  $("note").value = "";
  renderAndSave();
};
$("magic").onclick = () => {
  if (state.scene || state.ended || !magicActions().length) return;
  history = [];
  state.scene = { phase: "magic" };
  renderAndSave();
};
render();



