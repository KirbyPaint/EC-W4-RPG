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
  let charResult = RPG.archetypeSelection(archetype);
  $('#characterResult').append(`Strength is: ${RPG.strength}
  Dex is: ${RPG.dexterity}
  Con is: ${RPG.constitution}
  Int is: ${RPG.intellect}
  Wis is: ${RPG.wisdom}
  Cha is: ${RPG.charisma}`);
  console.log(RPG.wisdom);
  // console.log(`${} ${} ${}`);
});