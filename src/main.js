import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './RPG.js';

$('form').submit(function(event) {
  event.preventDefault();
  const name = $('#name').val();
  const archetype = $('input:radio[name=classes]:checked').val();
  const RPG = new Character(name, archetype);
  console.log(RPG);
  RPG.archetypeSelection(archetype); // Necessary function to assign the stats' values
  $('#characterResult').text(`
  Strength is: ${RPG.strength}
  Dex is: ${RPG.dexterity}
  Con is: ${RPG.constitution}
  Int is: ${RPG.intellect}
  Wis is: ${RPG.wisdom}
  Cha is: ${RPG.charisma}`);
});



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