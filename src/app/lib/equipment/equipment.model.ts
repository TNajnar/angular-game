export type TEquipment = {
  armor?: number;
  damage?: number;
  health?: number
  id: number;
  name: string;
  src?: string;
  type: 'armor' | 'elixir' | 'weapon';
}
