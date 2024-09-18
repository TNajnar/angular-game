import type { TMonstersData } from "@app/pages/monsters/monster.model";
import type { IRandomNumbers } from "./types-model";

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
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

export function increaseMonstersAttributes(
  staticMonstersData: TMonstersData, damageIncr: number, experienceIncr: number, healthIncr: number,
): void {
  Object.keys(staticMonstersData).forEach(monsterKey => {
    staticMonstersData[monsterKey].damage += damageIncr;
    staticMonstersData[monsterKey].experience += experienceIncr;
    staticMonstersData[monsterKey].health += healthIncr;
  });
}
