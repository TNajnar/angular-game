import type { TEquipment } from "./equipment.model";

const weapons: TEquipment[] = [
  {
    damage: 30,
    id: 1,
    name: 'Relentless Pursuit Blasters',
    src: 'images/relentless_pursuit_blasters.png',
    type: 'weapon',
  },
  {
    damage: 50,
    id: 2,
    name: 'Piercing Light Rifle',
    src: 'images/piercing_light_rifle.png',
    type: 'weapon',
  },
  {
    damage: 40,
    id: 3,
    name: 'Ardent Censer Pistols',
    src: 'images/ardent_censer_pistols.png',
    type: 'weapon',
  },
  {
    damage: 45,
    id: 4,
    name: 'Sentinel’s Judgement',
    src: 'images/sentinels_judgement.png',
    type: 'weapon',
  },
  {
    damage: 35,
    id: 5,
    name: 'Twin Shadows Guns',
    src: 'images/twin_shadows_guns.png',
    type: 'weapon',
  }
];

const armors: TEquipment[] = [
  {
    health: 20,
    id: 6,
    name: 'Shadow of the Dawn Armor',
    src: 'images/shadow_of_the_dawn_armor.png',
    type: 'armor',
  },
  {
    health: 35,
    id: 7,
    name: 'Radiant Guard Armor',
    src: 'images/radiant_guard_armor.png',
    type: 'armor',
  },
  {
    health: 50,
    id: 8,
    name: 'Vanguard’s Vow',
    src: 'images/vanguards_vow.png',
    type: 'armor',
  },
  {
    health: 60,
    id: 9,
    name: 'Protector’s Bulwark',
    src: 'images/protectors_bulwark.png',
    type: 'armor',
  },
  {
    health: 75,
    id: 10,
    name: 'Aegis of the Sentinel',
    src: 'images/aegis_of_the_sentinel.png',
    type: 'armor',
  }
];

const elixirs: TEquipment[] = [
  {
    health: 50,
    id: 11,
    name: 'Elixir of Wrath',
    src: 'images/elixir_of_wrath.png',
    type: 'elixir',
  },
  {
    health: 100,
    id: 12,
    name: 'Elixir of Iron',
    src: 'images/elixir_of_iron.png',
    type: 'elixir',
  },
  {
    health: 200,
    id: 13,
    name: 'Elixir of Life',
    src: 'images/elixir_of_life.png',
    type: 'elixir',
  },
  {
    health: 150,
    id: 14,
    name: 'Elixir of Resilience',
    src: 'images/elixir_of_resilience.png',
    type: 'elixir',
  },
  {
    health: 250,
    id: 15,
    name: 'Elixir of Fortitude',
    src: 'images/elixir_of_fortitude.png',
    type: 'elixir',
  }
];

const equipment: TEquipment[] = [...weapons, ...armors, ...elixirs];

export default equipment;
