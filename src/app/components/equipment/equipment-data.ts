import type { TEquipment } from "./equipment.model";

const weapons: TEquipment[] = [
  {
    damage: 30,
    id: 1,
    name: 'Relentless Pursuit Blasters',
    src: 'equipment/blaster.jpg',
    type: 'weapon',
  },
  {
    damage: 50,
    id: 2,
    name: 'Piercing Light Rifle',
    src: 'equipment/blaster.jpg',
    type: 'weapon',
  },
  {
    damage: 40,
    id: 3,
    name: 'Ardent Censer Pistols',
    src: 'equipment/blaster.jpg',
    type: 'weapon',
  },
  {
    damage: 45,
    id: 4,
    name: 'Sentinel’s Judgement',
    src: 'equipment/blaster.jpg',
    type: 'weapon',
  },
  {
    damage: 35,
    id: 5,
    name: 'Twin Shadows Guns',
    src: 'equipment/blaster.jpg',
    type: 'weapon',
  }
];

const armors: TEquipment[] = [
  {
    health: 20,
    id: 6,
    name: 'Shadow of the Dawn Armor',
    src: 'equipment/armor.png',
    type: 'armor',
  },
  {
    health: 35,
    id: 7,
    name: 'Radiant Guard Armor',
    src: 'equipment/armor.png',
    type: 'armor',
  },
  {
    health: 50,
    id: 8,
    name: 'Vanguard’s Vow',
    src: 'equipment/armor.png',
    type: 'armor',
  },
  {
    health: 60,
    id: 9,
    name: 'Protector’s Bulwark',
    src: 'equipment/armor.png',
    type: 'armor',
  },
  {
    health: 75,
    id: 10,
    name: 'Aegis of the Sentinel',
    src: 'equipment/armor.png',
    type: 'armor',
  }
];

const elixirs: TEquipment[] = [
  {
    health: 50,
    id: 11,
    name: 'Elixir of Wrath',
    src: 'equipment/elixir.jpg',
    type: 'elixir',
  },
  {
    health: 100,
    id: 12,
    name: 'Elixir of Iron',
    src: 'equipment/elixir.jpg',
    type: 'elixir',
  },
  {
    health: 200,
    id: 13,
    name: 'Elixir of Life',
    src: 'equipment/elixir.jpg',
    type: 'elixir',
  },
  {
    health: 150,
    id: 14,
    name: 'Elixir of Resilience',
    src: 'equipment/elixir.jpg',
    type: 'elixir',
  },
  {
    health: 250,
    id: 15,
    name: 'Elixir of Fortitude',
    src: 'equipment/elixir.jpg',
    type: 'elixir',
  }
];

const equipment: TEquipment[] = [...weapons, ...armors, ...elixirs];

export default equipment;
