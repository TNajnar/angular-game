import { generateId } from "@app/lib/utils";
import type { TEquipment } from "./equipment.model";

const weapons: TEquipment[] = [
  {
    damage: 30,
    id: generateId(),
    name: 'Relentless Pursuit Blasters',
    src: 'equipment/blasters.jpg',
    type: 'weapon',
  },
  {
    damage: 50,
    id: generateId(),
    name: 'Piercing Light Rifle',
    src: 'equipment/rifle.jpg',
    type: 'weapon',
  },
  {
    damage: 40,
    id: generateId(),
    name: 'Ardent Censer Pistols',
    src: 'equipment/pistols.jpg',
    type: 'weapon',
  },
  {
    damage: 45,
    id: generateId(),
    name: 'Sentinel’s Judgement',
    src: 'equipment/blaster.jpg',
    type: 'weapon',
  },
  {
    damage: 35,
    id: generateId(),
    name: 'Twin Shadows Guns',
    src: 'equipment/twin-guns.jpg',
    type: 'weapon',
  }
];

const armors: TEquipment[] = [
  {
    armor: 15,
    health: 150,
    id: generateId(),
    name: 'Cloak',
    src: 'equipment/armor-cloak.jpg',
    type: 'armor',
  },
  {
    armor: 25,
    health: 200,
    id: generateId(),
    name: 'Shadow of the Dawn Armor',
    src: 'equipment/armor-shadow.jpg',
    type: 'armor',
  },
  {
    armor: 40,
    health: 300,
    id: generateId(),
    name: 'Radiant Guard Armor',
    src: 'equipment/armor.jpg',
    type: 'armor',
  },
  {
    armor: 45,
    health: 400,
    id: generateId(),
    name: 'Vanguard’s Vow',
    src: 'equipment/armor-vanguard.jpg',
    type: 'armor',
  },
  {
    armor: 55,
    health: 500,
    id: generateId(),
    name: 'Protector’s Bulwark',
    src: 'equipment/armor-bulwark.jpg',
    type: 'armor',
  },
  {
    armor: 60,
    health: 600,
    id: generateId(),
    name: 'Aegis of the Sentinel',
    src: 'equipment/armor-gold.jpg',
    type: 'armor',
  },
  {
    armor: 65,
    health: 950,
    id: generateId(),
    name: 'Sentinel’s chest',
    src: 'equipment/armor-sentinel.jpg',
    type: 'armor',
  }
];

const elixirs: TEquipment[] = [
  {
    health: 50,
    id: generateId(),
    name: 'Elixir of Wrath',
    src: 'equipment/elixir-wrath.jpg',
    type: 'elixir',
  },
  {
    health: 100,
    id: generateId(),
    name: 'Elixir of Iron',
    src: 'equipment/elixir-iron.jpg',
    type: 'elixir',
  },
  {
    health: 200,
    id: generateId(),
    name: 'Elixir of Life',
    src: 'equipment/elixir-life.jpg',
    type: 'elixir',
  },
  {
    health: 150,
    id: generateId(),
    name: 'Elixir of Resilience',
    src: 'equipment/elixir-resilience.jpg',
    type: 'elixir',
  },
  {
    health: 250,
    id: generateId(),
    name: 'Elixir of Fortitude',
    src: 'equipment/elixir-fortitude.jpg',
    type: 'elixir',
  }
];

const equipment: TEquipment[] = [...weapons, ...armors, ...elixirs];

export default equipment;
