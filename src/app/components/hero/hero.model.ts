import { TEquipment } from "../equipment/equipment.model";

export interface IHeroAttributes {
  armor: number;
  damage: number; 
  health: number; // health = health + armor
  level: number;
  name: string;
}

export interface IEquippedItems {
  equippedArmor?: TEquipment;
  equippedWeapon?: TEquipment;
}
