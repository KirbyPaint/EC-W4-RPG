import BaseClassStats from '../src/archetypes.js';
import Character from '../src/RPG.js';

describe('Character', () => {

  let newCharacter;

  beforeEach(() => {
    newCharacter = new Character("JohnBoy", "warrior", 1);
  });

  test('it should create a character with properties for their character name, archetype, and level', () => {
    expect(newCharacter.name).toEqual("JohnBoy");
    expect(newCharacter.archetype).toEqual("warrior");
    expect(newCharacter.level).toEqual(1);
  });

  test('Display the properties for chosen archetype, whatever it may be', () => {
    const newArchetype = new BaseClassStats("warrior");
    expect(newArchetype.constitution).toEqual(10);
  });

  test('choosing warrior will take the BaseClassStats and run it through archetypeSelection function to add stats for Warrior selection', () => {
    const newArchetype = new BaseClassStats("warrior");
    newArchetype.archetypeSelection("warrior");
    expect(newArchetype.strength).toEqual(20);
    expect(newArchetype.dexterity).toEqual(10);
    expect(newArchetype.constitution).toEqual(10);
    expect(newArchetype.intellect).toEqual(0);
    expect(newArchetype.wisdom).toEqual(0);
    expect(newArchetype.charisma).toEqual(0);
  });


});