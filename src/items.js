export default class Item {
  constructor(itemID, itemName) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.bonus = 0;
  }

  createWeapon(itemID) {
    if (itemID === 0) {
      this.bonus += 10;
    } else if (itemID === 1) {
      this.bonus += 10;
    }
  }
}

// export default class ItemList {
//   constructor(itemId, itemType) {
//     this.itemID = itemID;
//     this.itemType = itemType;
//     this.itemName = itemName;
//   }
// }


// if (item ID === 0 && ItemType === "weapon"

//   then push itemID to matching index number and item type



//   functions weaponList(); Longsword[1
//     itemID = 0; itemType = "weapon"; itemName = "LongSword";
//   ]

//   Dagger[
//     itemID = 1; itemType = "weapon"; itemName = "Dagger";
//   ]

//   armorList();

//   Helmet itemID = 4 itemType = "armor"
//   itemName = "Helmet of JESUS CHRIST MAKE IT STOP"



//   for (i = 0, i <= inventory.length; i++)
//     if (this.itemType = "weapon") {
//       inventory.push[0](itemID, itemName);
//       // inventory.set(0, "longsword");
//     }
//   if (this.itemType = "helmet") {
//     itemType.push[1];
//   }