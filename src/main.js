import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './RPG.js';
import Item from './items.js';

$('form').submit(function(event) {
  event.preventDefault();
  const name = $('#name').val();
  const archetype = $('input:radio[name=classes]:checked').val();
  const RPG = new Character(name, archetype);
  const newSword = new Item(0, "Broadsword");
  console.log(RPG);
  RPG.archetypeSelection(archetype); // Necessary function to assign the stats' values
  // Similar function here once the weapon is created, apply the stat modifier
  RPG.inventory.set(newSword.itemID, newSword.itemName);
  newSword.createWeapon(newSword.itemID);
  console.log(newSword.bonus);
  RPG.strength += newSword.bonus;
  $('#characterResult').text(`
  Strength is: ${RPG.strength}
  Dex is: ${RPG.dexterity}
  Con is: ${RPG.constitution}
  Int is: ${RPG.intellect}
  Wis is: ${RPG.wisdom}
  Cha is: ${RPG.charisma}`);
});

// $('form').submit(function(event) {
//   event.preventDefault();
//   const name = $('#name').val();
//   const archetype = $('input:radio[name=classes]:checked').val();
//   const RPG = new Character(name, archetype);
//   const newSword = new Item(0, "Broadsword");
//   console.log(RPG);
//   RPG.archetypeSelection(archetype); // Necessary function to assign the stats' values
//   $('#characterResult').text(`
//   Strength is: ${RPG.strength}
//   Dex is: ${RPG.dexterity}
//   Con is: ${RPG.constitution}
//   Int is: ${RPG.intellect}
//   Wis is: ${RPG.wisdom}
//   Cha is: ${RPG.charisma}`);

//   RPG.inventory.set(newSword.itemID, newSword.itemName);
//   console.log(`Inventory 0 is: ${RPG.inventory.get(0)}`);
//   console.log(RPG.inventory);
// });



// function itemList()

// if value = 1 then iten is 
// Longsword();
// Let item val = 1  
// this.strength += 5;


// Staff(){
//   let item val =2;
//   this.iintellect +=10;
//   this.wisdom+= 20;
// }

// helmet(){
//   let item var = 3
//   this.armor +=10;
// }



// play Inventory(){

//   Inventory array = [0, 1, 3]
// }

// Player has on a Longsword and Helmet . Stats are modified to +5 str and +10 arm while in inventory array