import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './RPG.js';
import Item from './items.js';


$('form').submit(function(event) {
  event.preventDefault();
  $('#attack').show();
  const name = $('#name').val();
  const archetype = $('input:radio[name=classes]:checked').val();
  const RPG = new Character(name, archetype);
  const Boss = new Character(name, archetype);
  const newSword = new Item(0, "Broadsword");
  RPG.archetypeSelection(archetype); // Necessary function to assign the stats' values
  // Similar function here once the weapon is created, apply the stat modifier
  Boss.archetypeSelection(archetype);

  newSword.createEquipment(RPG, archetype);
  $('#characterResult').text(`
  Strength is: ${RPG.strength}
  Dex is: ${RPG.dexterity}
  Con is: ${RPG.constitution}
  Int is: ${RPG.intellect}
  Wis is: ${RPG.wisdom}
  Cha is: ${RPG.charisma}`);

  console.log(RPG);

  $("button#attack").click(function(event) {
    event.preventDefault();
    let s = RPG.attack(Boss);
    console.log(s);
    if (Boss.health === 0) {
      $('#characterResult').text(`You are dead!`);
      $('button#attack').hide();
    }
    console.log(`Boss health is ${Boss.health}`);
    console.log(`Player health is ${RPG.health}`);
  });
});