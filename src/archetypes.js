export default class BaseClassStats {
  constructor(archetype) {
    this.archetype = archetype;
    this.constitution = 10;
    this.strength = 10;
    this.dexterity = 10;
    this.intellect = 10;
    this.wisdom = 10;
    this.charisma = 10;
  }

  archetypeSelection(archetype) {
    if (archetype === "warrior") {
      this.strength += 10;
      this.dexterity += 0;
      this.constitution += 0;
      this.intellect -= 10;
      this.wisdom -= 10;
      this.charisma -= 10;
      return;

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
// export default class Archetype{
// constructor(archetype, strength, dexterity, constitution, intellect, wisdom, charisma)
// this.archetype= archetype;
// this.constitution= constitution;
// this.strength= strength;
// this.dexterity= dexterity;
// this.intellect= intellect;
// this.wisdom= wisdom;
// this.charisma= charisma;

// baseStat(){
//   constitution=10;
//   strength = 10;
//   dexterity= 10;
//   intellect=10;
//   wisdom= 10;
//   charisma=10;
// }
// warrior() {
//   archetype = "Warrior";
//   strength = 15;
//   dexterity= 0;
//   wisdom= 0;
//   intellect=0;
//   charisma=0;
// }