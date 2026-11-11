"use strict";

const creatures = {
  Alligator:[4,"E",5,3,0], Cronk:[9,"H",4,1,0], "Evil Hero":[5,"JC","Sword",1,6],
  "Evil Thief":[2,"IC","Sword",1,4], "Evil Wizard":[3,"JC","Dagger",1,3],
  Gargoyle:[4,"G",9,3,1], "Giant Ant":[4,"DA",3,2,0], "Giant Spider":[4,"EA",8,2,0],
  Goblin:[0,"HB","Dagger",1,-1], Hellhound:[4,"EC",4,2,0], Medusa:[5,"G",2,2,0],
  Mummy:[7,"G",7,1,2], Ogre:[2,"IC",4,1,2], Orc:[0,"HB","Sword",1,0],
  Skeleton:[9,"FA",2,1,0], Troll:[4,"J",6,2,1], Vampire:[4,"J",11,3,0],
  "Vampire Bat":[4,"A",0,0.5,0], Werewolf:[9,"IC",4,1,6]
};
const rooms = [
  "Evil Hero|Evil Wizard|Evil Thief|Gargoyle|Hellhound|Giant Spider",
  "d6:Orc|d3:Ogre|d6:Skeleton|d6:Goblin|d3:Cronk|d6:Vampire Bat",
  "2:Troll|Werewolf|Mummy|Skeleton|Medusa|Giant Ant",
  "Werewolf|Alligator|Ogre|Vampire|Troll|Goblin",
  "Orc|Cronk|Evil Hero|Evil Wizard|Mummy|Vampire",
  "Hellhound|Gargoyle|Evil Thief|2:Giant Ant|Medusa|Giant Spider"
].map(row => row.split("|"));
const wanderers = [
  "Evil Hero|2:Ogre|Giant Spider", "Evil Wizard|Werewolf|d3:Goblin",
  "Evil Thief|Hellhound|Goblin", "Orc|Skeleton|Troll",
  "d3:Orc|d3:Skeleton|Giant Ant", "Ogre|Giant Ant|Hellhound"
].map(row => row.split("|"));
const damageRows = [
  [3,0,0,0,0,0],[4,0,0,0,1,0],[5,1,0,1,1,0],[9,1,1,1,1,1],
  [10,1,1,1,2,1],[11,2,1,2,2,1],[12,2,2,2,2,2],[13,2,2,2,3,2],
  [14,3,2,3,3,2],[15,3,3,3,4,3],[16,4,3,4,4,3],[Infinity,4,4,4,4,4]
];
const treasureTable = {
  A:[[0],[0],[0]], B:[[6,1,6],[0],[0]], C:[[6,3,6],[0],[1,1,1]],
  D:[[1,3,6],[1,1,3],[0]], E:[[2,1,6,10],[2,1,6],[2,1,1]],
  F:[[6,1,6,4],[3,1,3],[1,1,1]], G:[[6,3,6,5],[3,1,6],[2,1,1]],
  H:[[6,2,6],[1,1,3],[1,1,1]], I:[[6,1,6,5],[2,1,6],[2,1,1]],
  J:[[6,1,6,20],[2,1,6],[3,1,3]]
};
const potionNames = ["Healing","Healing","Poison","Strength","Charm Person","Charm Monster"];
const spellCost = { Blast:1, Charm:3, Explosion:1, Heal:2, Lightning:2, Lock:1,
  "Mage Armor":1, "Neutralize Poison":1, Oratory:1, Sleep:2, Strength:2, "Stone-to-Flesh":3 };

function rollDice(label, count = 1, sides = 6) {
  const dice = Array.from({ length: count }, () => 1 + Math.floor(Math.random() * sides));
  const total = dice.reduce((sum, result) => sum + result, 0);
  if (label) addLog(label + " · " + count + "D" + sides + " → " + dice.join(" + "));
  return total;
}
function living() {
  return state.heroes.filter(hero => Number(hero.wounds) > 0);
}
function heroName(hero) {
  return hero.name || hero.class;
}
function hurt(hero, amount) {
  hero.wounds = Math.max(0, Number(hero.wounds) - amount);
  if (amount) addLog(heroName(hero) + " takes " + amount + " wound(s)" + (hero.wounds ? "." : " and falls."));
}
function combatDamage(weapon, total) {
  const index = ["Dagger", "Throwing Dagger", "Bow", "Sword", "Monster"].indexOf(
    ["Hammer", "Axe"].includes(weapon) ? "Sword" : weapon);
  return damageRows.find(row => total <= row[0])[Math.max(1, index + 1)];
}
function continueScene(phase) {
  state.scene.phase = phase;
}
function openScene(position, isNew, exit) {
  const segment = segmentAt(position);
  const index = segment.id % 100;
  const room = segment.id < gateId && index >= 50 && index < 86;
  state.scene = { phase: "check", position, room: room && isNew, monsters: [] };
  if (isNew && exit === "door" && rollDice("Door trap check") === 1) {
    state.scene.afterTrap = "check";
    return continueScene("trap");
  }
  checkEncounter();
}
function checkEncounter() {
  const scene = state.scene;
  const inRoom = scene.room;
  if (rollDice(inRoom ? "Room encounter check" : null) <= (inRoom ? 3 : 1)) {
    const row = rollDice("Monster table row") - 1;
    const column = rollDice("Monster table column") - 1;
    const entry = inRoom ? rooms[row][column] : wanderers[row][Math.floor(column / 2)];
    const [quantity, name] = entry.includes(":") ? entry.split(":") : ["1", entry];
    const count = quantity.startsWith("d") ? rollDice("Monster count", 1, Number(quantity[1])) : Number(quantity);
    encounter(name, count, inRoom);
  } else {
    addLog("The passage is clear.");
    finishEncounter();
  }
}
function encounter(name, count, room) {
  const scene = state.scene;
  const [, types, attack, dice, bonus] = creatures[name];
  const kind = types[room ? 0 : 1] || types[0];
  scene.monsters = Array.from({ length: count }, (_, index) => {
    const max = Math.max(0, rollDice(name + " wound points", dice === 0.5 ? 1 : dice, dice === 0.5 ? 3 : 6) + bonus);
    return { name, max, hp: max, id: index, attack, kind, sword: name === "Evil Hero" ? rollDice("Evil Hero sword skill") : 0 };
  }).sort((a,b) => b.hp - a.hp);
  scene.bribe = 0;
  scene.negotiated = false;
  addLog("Encounter · " + count + " × " + name);
  continueScene("encounter");
}
function featureAt(position) {
  const id = segmentAt(position)?.id;
  if (id == null || id >= gateId || state.investigated?.includes(position)) return "";
  const index = id % 100;
  if ([50,52,84].includes(index)) return "fountain";
  if ([59,69].includes(index)) return "statue";
  if ([70,79].includes(index)) return "trapdoor";
  return "";
}
function finishEncounter() {
  if (!living().length) return continueScene("defeat");
  if (featureAt(state.scene.position)) return continueScene("feature");
  state.scene = null;
}
function negotiate(orator) {
  const scene = state.scene;
  if (orator) spendSpell(orator, "Oratory");
  const name = scene.monsters[0].name;
  const total = rollDice("Negotiation", 2) - creatures[name][0] + (orator ? 4 : 0);
  addLog("Negotiation total · " + total);
  if (total <= 5) {
    addLog("Negotiations fail.");
    return startCombat();
  }
  if (total >= 9 && ["Evil Hero","Evil Thief","Evil Wizard","Goblin","Orc"].includes(name)) {
    scene.loot = scene.monsters.map(monster => treasure(monster.kind));
    scene.bribe = Math.floor(scene.loot.reduce((sum, loot) => sum + loot.gold, 0) / 4);
  }
  scene.negotiated = true;
  continueScene("agreement");
}
function trap(hero, detrap) {
  const scene = state.scene;
  const rating = Number.parseInt(hero.spells, 10) || 0;
  if (detrap && rollDice("Detrap · " + heroName(hero)) <= rating) {
    hero.xp = Number(hero.xp || 0) + 10;
    addLog("Trap disarmed. " + heroName(hero) + " gains 10 XP.");
  } else {
    const trigger = () => {
      switch (rollDice("Trap type")) {
        case 1: hurt(hero, combatDamage("Bow", rollDice("Arrow attack"))); break;
        case 2: {
          const damage = combatDamage("Bow", rollDice("Poison arrow attack"));
          hurt(hero, damage + (damage ? rollDice("Arrow poison", 1, 3) : 0));
          break;
        }
        case 3: hurt(hero, rollDice("Poison gas", 1, 3)); break;
        case 4: living().forEach(target => hurt(target, 1)); break;
        case 5: hurt(hero, 1); break;
        case 6: trigger(); trigger(); break;
      }
    };
    trigger();
  }
  if (!living().length) return continueScene("defeat");
  if (scene.afterTrap === "check") return checkEncounter();
  if (scene.afterTrap === "treasure") return nextChest();
  finishEncounter();
}
function investigate(hero) {
  const scene = state.scene;
  const feature = featureAt(scene.position);
  (state.investigated ||= []).push(scene.position);
  const result = rollDice("Investigate " + feature);
  if (feature === "statue") {
    if (result <= 2) return encounter("Gargoyle", 1, true);
    if (result === 3) return beginLoot([{ gold:0, items:[potionNames[rollDice("Potion") - 1] + " potion"], chest:false }]);
    if (result <= 5) awardGold(rollGem() + rollGem());
  } else if (feature === "fountain") {
    if (result === 1) hurt(hero, rollDice("Fountain poison", 1, 3));
    if (result >= 2 && result <= 4) {
      const potion = potionNames[rollDice("Fountain potion") - 1];
      applyPotion(hero, potion);
      return beginLoot([{ gold:0, items:[potion + " potion"], chest:false }]);
    }
    if (result === 5) {
      hero.combatModifier = -2;
      addLog(heroName(hero) + " is drunk and takes a −2 combat penalty.");
    }
  } else if (feature === "trapdoor") {
    if (result <= 2) {
      scene.room = true;
      return checkEncounter();
    }
    if (result === 3) return beginLoot([treasure("J")]);
    if (result <= 5) {
      scene.afterTrap = "feature";
      return continueScene("trap");
    }
  }
  finishEncounter();
}
function rollGem() {
  return [1,5,10,15,20,25,35,50,75,100,150][rollDice("Gem value", 2) - 2];
}
function bonusRoll(label) {
  const result = rollDice(label);
  return result === 6 ? bonusRoll(label) + bonusRoll(label) : result <= 3 ? 1 : 2;
}
function magicItem() {
  const lists = [
    () => "+" + bonusRoll("Magic weapon bonus") + " " +
      ["Sword","Hammer","Axe","Bow","Dagger","Throwing Dagger"][rollDice("Magic weapon type") - 1],
    () => "+" + bonusRoll("Armor bonus") + " armor",
    () => potionNames[rollDice("Potion type") - 1] + " potion",
    () => ["Mustard","Sesame","Spinach","Red Pepper","Cloves","Cannabis"][rollDice("Spice type") - 1],
    () => ["Neutralize Poison","Neutralize Poison","Potion Appraisal","Oratory","Dexterity","Strangling"][rollDice("Medallion type") - 1] + " medallion",
    () => ["Resistance +1","Resistance +2","Sleep","Neutralize Poison","Heal","Blast"][rollDice("Ring type") - 1] + " ring"
  ];
  return lists[rollDice("Magic item category") - 1]();
}
function treasure(kind) {
  const categories = ["Bezants", "Gems", "Magic items"];
  const [coins, gems, items] = treasureTable[kind].map(([chance,count,sides,multiplier = 1], index) =>
    chance && rollDice(categories[index] + " check") <= chance
      ? (sides === 1 ? count : rollDice(categories[index] + " quantity", count, sides)) * multiplier : 0);
  return { gold: coins + Array.from({length:gems}, rollGem).reduce((a,b) => a+b, 0),
    items: Array.from({length:items}, magicItem), chest: ["I","J"].includes(kind) };
}
function awardGold(amount) {
  if (!amount) return;
  state.treasure = Number(state.treasure || 0) + amount;
  addLog("Party gains " + amount + " bezants in coin and gems.");
}
function beginLoot(loot) {
  const scene = state.scene;
  if (!living().length) return continueScene("defeat");
  scene.loot = loot;
  scene.items = [];
  scene.chestIndex = 0;
  nextChest();
}
function nextChest() {
  const scene = state.scene;
  while (scene.chestIndex < scene.loot.length) {
    const loot = scene.loot[scene.chestIndex++];
    if (loot.chest && rollDice("Treasure chest trap check") <= 3) {
      scene.afterTrap = "treasure";
      return continueScene("trap");
    }
  }
  awardGold(scene.loot.reduce((sum, loot) => sum + loot.gold, 0) - scene.bribe || 0);
  scene.items = scene.loot.flatMap(loot => loot.items);
  if (scene.items.length) return continueScene("loot");
  finishEncounter();
}
function giveItem(hero) {
  const item = state.scene.items.shift();
  hero.items = [hero.items, item].filter(Boolean).join("\n");
  const armor = /^\+(\d+) armor$/.exec(item);
  if (armor && Number(armor[1]) > Number(hero.armorBonus || 0)) {
    const gain = Number(armor[1]) - Number(hero.armorBonus || 0);
    hero.maxWounds = Number(hero.maxWounds || { Hero:8, Thief:6, Wizard:4 }[hero.class]) + gain;
    hero.wounds = Number(hero.wounds) + gain;
    hero.armorBonus = Number(armor[1]);
  }
  addLog(heroName(hero) + " takes " + item + ".");
  if (!state.scene.items.length) finishEncounter();
}
function applyPotion(hero, potion) {
  if (potion === "Poison") hurt(hero, rollDice("Potion poison", 1, 3));
  else if (potion === "Healing") heal(hero, rollDice("Potion healing"));
  else if (potion === "Strength") hero.strengthBonus = rollDice("Strength bonus");
  addLog(heroName(hero) + " drinks a " + potion + " potion.");
}
function heal(hero, amount) {
  const max = Number(hero.maxWounds || { Hero:8, Thief:6, Wizard:4 }[hero.class]);
  hero.wounds = Math.max(Number(hero.wounds), Math.min(max - Number(hero.spellWounds || 0), Number(hero.wounds) + amount));
}
function knownSpells(hero) {
  return [hero.spells, ...(hero.extraSpells || [])].filter(spell => spell in spellCost);
}
function canCast(hero, spell) {
  return knownSpells(hero).includes(spell) && Number(hero.wounds) > spellCost[spell];
}
function spendSpell(hero, spell) {
  hero.spellWounds = Number(hero.spellWounds || 0) + spellCost[spell];
  hurt(hero, spellCost[spell]);
}
function startCombat() {
  const scene = state.scene;
  scene.round = 1;
  scene.acted = [];
  scene.weapons = {};
  scene.thrown = {};
  scene.front = scene.monsters.filter(monster => monster.hp > 0).slice(0, 3).map(monster => monster.id);
  if (!scene.front.length) return advanceCombat();
  continueScene("arm");
}
function activeHero() {
  return living().find(hero => !state.scene.acted.includes(state.heroes.indexOf(hero)));
}
function monsterFront() {
  return state.scene.monsters.filter(monster => monster.hp > 0 && state.scene.front.includes(monster.id));
}
function opponents(index, attackers, targets) {
  if (attackers === targets.length) return targets.slice(index, index + 1);
  if (attackers === 1) return targets;
  const offset = (targets.length - attackers) / 2;
  const distances = targets.map((_, target) => Math.abs(index + offset - target));
  const nearest = Math.min(...distances);
  return targets.filter((_, target) => distances[target] === nearest);
}
function targetName(target) {
  return target.name + " " + (target.id + 1) + " (" + target.hp + " WP)";
}
function heroAttack(hero, target, slot) {
  const scene = state.scene;
  const index = state.heroes.indexOf(hero);
  const weapon = hero["weapon" + slot];
  const skills = [hero.skill, hero.skill2, ...(hero.extraSkills || [])].filter(Boolean);
  const bonus = Math.max(0, ...skills.filter(skill => skill.replace(/^\+\d+ /, "") === weapon)
    .map(skill => Number.parseInt(skill, 10) || 0));
  const magicBonus = Math.max(0, ...String(hero.items || "").split("\n").filter(item =>
    /^\+\d+ /.test(item) && item.replace(/^\+\d+ /, "") === weapon).map(item => Number.parseInt(item, 10)));
  const damage = combatDamage(weapon, rollDice(heroName(hero) + " attacks") + bonus + magicBonus + Number(hero.combatModifier || 0) + Number(hero.strengthBonus || 0));
  target.hp = Math.max(0, target.hp - damage);
  addLog(target.name + " takes " + damage + " wound(s).");
  if (weapon === "Throwing Dagger" && hero.rank === 2) {
    (scene.thrown[index] ||= []).push(slot);
    scene.weapons[index] = slot === 1 ? 2 : 1;
  }
  advanceCombat(hero);
}
function spellAttack(hero, spell, target) {
  spendSpell(hero, spell);
  if (spell === "Heal") heal(target, rollDice("Heal", 1, 3));
  else {
    const resistance = { "Evil Wizard":5, Vampire:4, Troll:3, Werewolf:3, Gargoyle:3, Mummy:3,
      "Evil Hero":2, Ogre:2, Medusa:2, Hellhound:2 }[target.name] || 1;
    if (rollDice(target.name + " magic resistance") <= resistance) addLog(target.name + " resists " + spell + ".");
    else if (spell === "Sleep") target.hp = 0;
    else target.hp = Math.max(0, target.hp - (spell === "Blast" ? 2 : rollDice("Lightning") + 2));
  }
  advanceCombat(hero);
}
function advanceCombat(hero) {
  const scene = state.scene;
  if (hero) scene.acted.push(state.heroes.indexOf(hero));
  if (!scene.monsters.some(monster => monster.hp > 0)) {
    const survivors = living();
    const xp = Math.floor(scene.monsters.reduce((sum, monster) => sum + monster.max, 0) * 6 / survivors.length);
    survivors.forEach(member => { member.xp = Number(member.xp || 0) + xp; delete member.strengthBonus; });
    addLog("The party wins. Each survivor gains " + xp + " XP.");
    return beginLoot(scene.loot || scene.monsters.map(monster => treasure(monster.kind)));
  }
  if (activeHero() && monsterFront().length) return;
  let front = living().filter(member => member.rank === 1);
  const targets = () => front.filter(member => member.wounds > 0);
  const attackers = monsterFront();
  for (const [index, monster] of attackers.entries()) {
    const eligible = targets();
    if (!eligible.length) break;
    const nearby = opponents(index, attackers.length, front).filter(hero => hero.wounds > 0);
    const choices = nearby.length ? nearby : eligible;
    const target = choices.length === 1 ? choices[0] :
      choices[Math.floor((rollDice("Monster target") - 1) * choices.length / 6)];
    const total = rollDice(monster.name + " attacks") + (typeof monster.attack === "number" ? monster.attack : monster.sword);
    hurt(target, combatDamage(typeof monster.attack === "number" ? "Monster" : monster.attack, total));
  }
  for (const monster of scene.monsters.filter(member => member.hp > 0 && !scene.front.includes(member.id) &&
      ["Goblin","Orc"].includes(member.name))) {
    const eligible = targets();
    if (!eligible.length) break;
    const target = eligible[Math.floor((rollDice("Monster bow target") - 1) * eligible.length / 6)];
    hurt(target, combatDamage("Bow", rollDice(monster.name + " shoots")));
  }
  if (!living().length) return continueScene("defeat");
  scene.front = monsterFront().map(monster => monster.id);
  if (scene.front.length < 3) {
    const next = scene.monsters.find(monster => monster.hp > 0 && !scene.front.includes(monster.id));
    if (next) scene.front.push(next.id);
  }
  front = living().filter(member => member.rank === 1);
  if (front.length < 2 && living().some(member => member.rank === 2)) return continueScene("rally");
  newRound();
}
function newRound() {
  state.scene.round++;
  state.scene.acted = [];
  continueScene("combat");
}
function exitMaze() {
  const survivors = living();
  const share = survivors.length ? Math.floor(Number(state.treasure || 0) / survivors.length) : 0;
  const victory = survivors.length >= Math.ceil(state.heroes.length / 2) &&
    survivors.every(hero => Number(hero.xp) >= 75 && Number(hero.gold || 0) + share >= 100);
  survivors.forEach(hero => hero.gold = Number(hero.gold || 0) + share);
  state.scene = { phase: "exitResult", victory };
}
function magicActions() {
  return living().flatMap(hero => {
    const actions = [];
    if (state.party && canCast(hero, "Lock")) {
      const [x, y] = state.party.split(",").map(Number);
      for (const [direction, [dx, dy]] of directions.entries()) {
        const position = key(x + dx, y + dy);
        const next = segmentAt(position);
        if (edge(segmentAt(state.party), direction) !== "door" ||
            (next && edge(next, (direction + 2) % 4) !== "door")) continue;
        const lock = doorKey(state.party, position);
        if (state.lockedDoors?.includes(lock)) continue;
        const heading = ["north", "east", "south", "west"][direction];
        actions.push({ label: heroName(hero) + " locks the " + heading + " door", run: () => {
          spendSpell(hero, "Lock");
          (state.lockedDoors ||= []).push(lock);
          addLog("The " + heading + " door is locked.");
          state.scene = null;
        } });
      }
    }
    if (canCast(hero, "Heal")) {
      for (const target of living()) actions.push({ label: heroName(hero) + " casts Heal on " + heroName(target),
        run: () => { spendSpell(hero,"Heal"); heal(target, rollDice("Heal")); state.scene = null; } });
    }
    for (const item of ["Healing potion","Mustard","Strength potion","Spinach"]) {
      const items = String(hero.items || "").split("\n");
      if (!items.includes(item)) continue;
      actions.push({ label: heroName(hero) + " uses " + item, run: () => {
        items.splice(items.indexOf(item), 1);
        hero.items = items.join("\n");
        applyPotion(hero, ["Mustard","Healing potion"].includes(item) ? "Healing" : "Strength");
        state.scene = null;
      } });
    }
    return actions;
  });
}
function sceneView() {
  const scene = state.scene;
  const action = (label, run) => ({ label, run });
  const people = (prefix, fn, heroes = living()) => heroes.map(hero =>
    action(prefix + heroName(hero), () => fn(hero)));
  if (!scene) return null;
  switch (scene.phase) {
    case "magic":
      return ["Use magic", "Choose a spell or item.", [...magicActions(), action("Cancel", () => { state.scene = null; })]];
    case "trap":
      return ["A trap is armed", "Choose an adventurer to deal with it.", [
        ...people("Detrap with ", hero => trap(hero, true), living().filter(hero => hero.class === "Thief")),
        ...people("Open with ", hero => trap(hero, false))
      ]];
    case "encounter":
      return ["Monsters ahead", scene.monsters.length + " × " + scene.monsters[0].name, [
        action("Fight", startCombat), action("Negotiate", () => negotiate()),
        ...people("Cast Oratory with ", hero => negotiate(hero), living().filter(hero => canCast(hero,"Oratory")))
      ]];
    case "agreement":
      return ["An agreement", scene.bribe ? "The monsters offer " + scene.bribe + " bezants." : "The monsters agree to let you pass.", [
        action(scene.bribe ? "Take the offer and pass" : "Pass", () => { awardGold(scene.bribe); finishEncounter(); }),
        action("Fight", () => { scene.bribe = 0; startCombat(); }),
        ...(scene.bribe ? [action("Take the offer, then fight", () => { awardGold(scene.bribe); startCombat(); })] : [])
      ]];
    case "feature":
      return ["Investigate the " + featureAt(scene.position) + "?", "Pick who investigates or move on.", [
        ...people("Investigate with ", investigate),
        action("Move on", () => { state.scene = null; })
      ]];
    case "loot":
      return ["Assign treasure", "Who carries the " + scene.items[0] + "?", people("Give to ", giveItem)];
    case "arm": {
      const hero = activeHero();
      const index = state.heroes.indexOf(hero);
      return ["Prepare for combat", heroName(hero) + " · Choose a starting weapon.", [1,2]
        .filter(slot => hero["weapon" + slot] || slot === 1)
        .map(slot => action(hero["weapon" + slot] || "Ready", () => {
          scene.weapons[index] = slot;
          scene.acted.push(index);
          if (!activeHero()) {
            scene.acted = [];
            continueScene(living().some(member => member.rank === 1) ? "combat" : "rally");
          }
        }))];
    }
    case "combat": {
      const hero = activeHero();
      const index = state.heroes.indexOf(hero);
      const slot = scene.weapons[index] || 1;
      const weapon = hero["weapon" + slot];
      const front = monsterFront();
      const ranged = ["Bow","Throwing Dagger"].includes(weapon);
      const partyFront = living().filter(member => member.rank === 1);
      const position = partyFront.indexOf(hero);
      const targets = hero.rank === 2 ? front : opponents(position, partyFront.length, front);
      const attacks = weapon && (hero.rank === 1 || ranged) && !scene.thrown[index]?.includes(slot)
        ? targets.map(target => action(weapon + " → " + targetName(target), () => heroAttack(hero,target,slot))) : [];
      const spells = ["Blast","Lightning","Sleep"].filter(spell => canCast(hero,spell)).flatMap(spell =>
        front.map(target => action(spell + " → " + targetName(target), () => spellAttack(hero,spell,target))));
      const other = slot === 1 ? 2 : 1;
      if (hero["weapon" + other] && !scene.thrown[index]?.includes(other)) attacks.push(
        action("Switch to " + hero["weapon" + other], () => { scene.weapons[index] = other; advanceCombat(hero); }));
      return ["Combat · Round " + scene.round, heroName(hero) + " · " + hero.wounds + " WP", [
        ...attacks, ...spells, action("Pass", () => advanceCombat(hero))
      ]];
    }
    case "rally":
      return ["Reform the front rank", "Choose a survivor to step forward.", people("Advance ", hero => {
        hero.rank = 1;
        if (scene.round === 1 && !scene.acted.length) continueScene("combat"); else newRound();
      }, living().filter(hero => hero.rank === 2))];
    case "exit":
      return ["Return through the gate?", "Leaving ends this expedition and splits the party’s treasure.", [
        action("Leave the maze", exitMaze), action("Keep exploring", () => { state.scene = null; })
      ]];
    case "defeat":
      return ["The party has fallen", "No adventurers survive this expedition.", [action("View the maze", () => { state.scene = null; state.ended = true; })]];
    case "exitResult":
      return [scene.victory ? "You escaped with riches" : "The expedition is over",
        scene.victory ? "The survivors meet the SPI victory conditions." : "The party fell short of the SPI victory conditions.",
        [action("View the maze", () => { state.scene = null; state.ended = true; })]];
    default:
      return null;
  }
}
function renderScene() {
  const dialog = $("decision");
  const view = sceneView();
  if (!view) {
    if (dialog.open) dialog.close();
    return;
  }
  const [title, detail, choices] = view;
  $("decision-title").textContent = title;
  $("decision-detail").textContent = detail;
  $("decision-roll").textContent = state.log[0] || "";
  $("decision-actions").replaceChildren(...choices.map(choice => {
    const button = document.createElement("button");
    button.textContent = choice.label;
    button.onclick = () => {
      choice.run();
      renderAndSave();
    };
    return button;
  }));
  if (!dialog.open) dialog.showModal();
  $("decision-actions").querySelector("button")?.focus();
}
