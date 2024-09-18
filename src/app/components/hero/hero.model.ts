import type { TEquipment } from "@app/lib/types-model";

export interface IHero {
  armor: number;
  damage: number; 
  experience: number;
  experienceToNextLevel: number;
  health: number; // health = health + armor
  level: number;
  name: string;
}

export interface IEquippedItems {
  equippedArmor?: TEquipment;
  equippedWeapon?: TEquipment;
}

export interface IHeroStorage {
  inventory: TEquipment[];
  equippedItems: IEquippedItems;
}

export enum EEquipVariants {
  Armor = 'ARMOR',
  Weapon = 'WEAPON',
}

export type TToggleMenu = Record<EEquipVariants, boolean>;
