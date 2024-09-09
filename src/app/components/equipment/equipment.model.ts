export type TEquipment = {
  damage?: number;
  health?: number
  id: number;
  name: string;
  src?: string;
  type: 'armor' | 'elixir' | 'weapon';
}

export type TArmor = TEquipment & { type: 'armor' };

export type TWeapon = TEquipment & { type: 'weapon' };
