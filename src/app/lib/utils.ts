import type { TMonstersData } from "@app/pages/monsters/monster.model";
import type { IRandomNumbers } from "./types-model";

export function generateId(): number {
  return Math.floor(Math.random() * 1000);
}

export function getRandomEnemyKey(staticMonstersData: TMonstersData): string {
  const keys = Object.keys(staticMonstersData);
  const randomIndex = randomNumber(keys.length);

  return keys[randomIndex];
}

export function handleWinText(enemyHealth: number, heroHealth: number, heroName: string): string {
  return heroHealth > enemyHealth ? `${heroName} won` : 'Monster won';
}

export function randomNumber(number: number): number {
  return Math.floor(Math.random() * number);
}

export function randomNumbers(lenght: number): IRandomNumbers {
  const randomEquipNumber1 = randomNumber(lenght);
  const randomEquipNumber2 = randomNumber(lenght);
  
  return { number1: randomEquipNumber1, number2: randomEquipNumber2 };
}
