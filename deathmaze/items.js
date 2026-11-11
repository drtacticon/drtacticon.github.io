const itemEffects = {
  Mustard: "Restore 1D6 Wound Points, including spell wounds.",
  Sesame: "Safely disarm the next trapped door or chest.",
  Spinach: "Gain a 1D6 attack bonus for this fight.",
  "Red Pepper": "Front rank only. Deal 1D6 fire wounds instead of attacking.",
  Cloves: "Peg a door shut and retreat from the monsters.",
  Cannabis: "Make two weapon attacks against the same target each round this fight.",
  "Resistance +1 ring": "+1 Magic Resistance, up to 5.",
  "Resistance +2 ring": "+2 Magic Resistance, up to 5.",
  "Sleep ring": "Wizard only. Cast Sleep free once per expedition.",
  "Neutralize Poison ring": "Wizard only. Cancel poison free once per expedition.",
  "Heal ring": "Wizard only. Restore 1D6 Wound Points free once per expedition.",
  "Blast ring": "Wizard only. Deal 2 wounds if the target fails to resist. Once per expedition.",
  "Healing potion": "Restore 1D6 Wound Points, including spell wounds.",
  "Strength potion": "Gain a 1D6 attack bonus for the next fight.",
  "Poison potion": "Deal 1D3 wounds to the tester.",
  "Charm Person potion": "Charm one humanoid opponent.",
  "Charm Monster potion": "Charm one non-humanoid opponent.",
  "Oratory medallion": "+2 to negotiation.",
  "Dexterity medallion": "+2 to bow and throwing dagger attacks.",
  "Neutralize Poison medallion": "Grants immunity to poison.",
  "Potion Appraisal medallion": "Identify potions without drinking a dose.",
  "Strangling medallion": "Deal 2D6 wounds to the tester."
};
function carried(hero) {
  return String(hero.items || "").split("\n").filter(Boolean);
}
function hasItem(hero, name) {
  return carried(hero).includes(name);
}
function consumeItem(hero, name) {
  const items = carried(hero);
  const index = items.indexOf(name);
  if (index < 0) return false;
  items.splice(index, 1);
  hero.items = items.join("\n");
  addLog(heroName(hero) + " uses " + name + ".");
  return true;
}
function itemText(item) {
  if (typeof item !== "string") return "Unknown " + item.type;
  return itemEffects[item] ? item + " — " + itemEffects[item] : item;
}
function unknownItem(type, name) {
  return { type, name };
}
function unknownItems() {
  return living().flatMap(hero => (hero.unknownItems || []).map(item => ({ hero, item })));
}
function testItem(holder, item, tester) {
  holder.unknownItems.splice(holder.unknownItems.indexOf(item), 1);
  const appraise = item.type === "potion" && hasItem(tester, "Potion Appraisal medallion");
  if (item.name === "Strangling medallion") {
    addLog(heroName(tester) + " tests a Strangling medallion.");
    hurt(tester, rollDice("Strangling", 2));
    return;
  }
  tester.items = [...carried(tester), item.name, ...(appraise ? [item.name] : [])].join("\n");
  addLog("Identified · " + itemText(item.name));
  if (item.type === "potion" && !appraise) applyPotion(tester, item.name.replace(/ potion$/, ""));
}
function askAboutItem(item) {
  const scene = state.scene;
  const roll = rollDice("Wandering monster identifies item");
  (scene.askedItems ||= []).push(item.id);
  if (roll <= 3) {
    const dangerous = ["Poison potion","Strangling medallion"].includes(item.name);
    const lie = dangerous ? (item.type === "potion" ? "Healing potion" : "Neutralize Poison medallion") :
      item.type === "potion" ? "Poison potion" : "Strangling medallion";
    addLog('The monster says, “It is a ' + (roll === 1 ? lie : item.name) + '.”');
  } else addLog("The monster does not recognize the item.");
}
function ringReady(hero, ring) {
  return hero.class === "Wizard" && carried(hero).filter(item => item === ring).length >
    Number(hero.usedRings?.[ring] || 0);
}
function useRing(hero, ring) {
  (hero.usedRings ||= {})[ring] = Number(hero.usedRings[ring] || 0) + 1;
  addLog(heroName(hero) + " uses " + ring + ".");
}
function poison(hero, label) {
  if (hasItem(hero,"Neutralize Poison medallion")) {
    addLog(heroName(hero) + " is protected by a medallion.");
    return 0;
  }
  const protector = living().find(member => ringReady(member,"Neutralize Poison ring"));
  if (protector) {
    useRing(protector,"Neutralize Poison ring");
    return 0;
  }
  return rollDice(label, 1, 3);
}
