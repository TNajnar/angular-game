export function handleWinText(heroHealth: number, heroName: string): string {
  return heroHealth > 0 ? `${heroName} won` : 'Monster won';
}
