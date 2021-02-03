import BaseClassStats from '../src/archetypes.js';
import Character from '../src/RPG.js';

describe('Character', () => {

  test('it should create a character with properties for their character name, archetype, and level', () => {
    const newCharacter = new Character("JohnBoy", "Warrior", 1);
    expect(newCharacter.name).toEqual("JohnBoy");
    expect(newCharacter.archetype).toEqual("Warrior");
    expect(newCharacter.level).toEqual(1);
  });

  test('choosing warrior will take the BaseClassStats and run it through archetypeSelection function to add stats for Warrior selection', () => {
    const newCharacter = new Character("JohnBoy", "warrior", 1);
    // const newWarrior = new BaseClassStats.archetypeSelection("warrior");
    expect(newCharacter.name).toEqual("JohnBoy");
    expect(newCharacter.archetype).toEqual("warrior");
    expect(newCharacter.level).toEqual(1);
  });

  test('Display the properties for chosen archetype, whatever it may be', () => {
    const newArchetype = new BaseClassStats("warrior");
    expect(newArchetype.constitution).toEqual(10);
  });

});