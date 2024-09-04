function handleWinText(heroHealth: number, heroName: string): string {
  return heroHealth > 0 ? `${heroName} won` : 'Monster won';
}

function randomNumber(number: number): number {
  return Math.floor(Math.random() * number);
}

export { handleWinText, randomNumber }
