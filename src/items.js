export default class Item {
  constructor(itemID, itemName) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.constitutionBonus = 0;
    this.strengthBonus = 0;
    this.dexterityBonus = 0;
    this.intellectBonus = 0;
    this.wisdomBonus = 0;
    this.charismaBonus = 0;
    //this.bonus = 0;
  }

  createEquipment(character, archetype) {
    if (archetype === "warrior") {
      character.inventory.set(0, "broadsword")
      this.strengthBonus = 10;
      let result = (character.strength += this.strengthBonus);
      console.log(result);
      console.log(character.strength);
    } else if (archetype === "ranger") {
      character.inventory.set(0, "Bow")
    }
    character.inventory.set(1, "rags")
      .set(2, "rags")
      .set(3, "rags")
      .set(4, "rags")
      .set(5, "rags");
    return character.inventory;
  }
}

// itemList {
//   new Item(1, "Broadsword", 0, 10, 0, 0, 0, 0)
//   new Item(1, "Broadsword", 0, 10, 0, 0, 0, 0)
// }