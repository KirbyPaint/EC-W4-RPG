export default class Character {
  constructor(name, archetype) {
    this.name = name;
    this.archetype = archetype;
    this.level = 1;
    this.inventory = new Map(
      [
        [0, "weapon"],
        [1, "helmet"],
        [2, "chest"],
        [3, "gloves"],
        [4, "belt"],
        [5, "shoes"]
      ]
    );
  }

  archetypeSelection(archetype) {
    this.constitution = 10;
    this.strength = 10;
    this.dexterity = 10;
    this.intellect = 10;
    this.wisdom = 10;
    this.charisma = 10;

    if (archetype === "warrior") {
      this.strength += 10;
      this.dexterity += 0;
      this.constitution += 0;
      this.intellect -= 10;
      this.wisdom -= 10;
      this.charisma -= 10;
    } else if (archetype === "ranger") {
      this.strength += 0;
      this.constitution += 10;
      this.dexterity += 10;
      this.intellect -= 10;
      this.wisdom -= 10;
      this.charisma += 20;
    }
  }
}