import { IRandomNumbers } from "./types";

function generateId(): number {
  return Math.floor(Math.random() * 1000);
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

export { generateId, handleWinText, randomNumber, randomNumbers }
