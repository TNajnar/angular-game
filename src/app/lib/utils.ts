import type { TMonstersData } from "@app/pages/monsters/monster.model";
import type { IRandomNumbers } from "./types-model";

function generateId(): number {
  return Math.floor(Math.random() * 1000);
}

function getRandomEnemyKey(staticMonstersData: TMonstersData): string {
  const keys = Object.keys(staticMonstersData);
  const randomIndex = randomNumber(keys.length);

  return keys[randomIndex];
}

function handleWinText(enemyHealth: number, heroHealth: number, heroName: string): string {
  return heroHealth > enemyHealth ? `${heroName} won` : 'Monster won';
}

function randomNumber(number: number): number {
  return Math.floor(Math.random() * number);
}

function randomNumbers(lenght: number): IRandomNumbers {
  const randomEquipNumber1 = randomNumber(lenght);
  const randomEquipNumber2 = randomNumber(lenght);
  
  return { number1: randomEquipNumber1, number2: randomEquipNumber2 };
}

export { generateId, getRandomEnemyKey, handleWinText, randomNumber, randomNumbers }
