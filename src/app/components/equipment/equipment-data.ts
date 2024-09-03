import type { TEquipment } from "./equipment.model";

const weapons: TEquipment[] = [
  {
    damage: 30,
    name: 'Relentless Pursuit Blasters',
    src: 'images/relentless_pursuit_blasters.png',
    type: 'weapon',
  },
  {
    damage: 50,
    name: 'Piercing Light Rifle',
    src: 'images/piercing_light_rifle.png',
    type: 'weapon',
  },
  {
    damage: 40,
    name: 'Ardent Censer Pistols',
    src: 'images/ardent_censer_pistols.png',
    type: 'weapon',
  },
  {
    damage: 45,
    name: 'Sentinel’s Judgement',
    src: 'images/sentinels_judgement.png',
    type: 'weapon',
  },
  {
    damage: 35,
    name: 'Twin Shadows Guns',
    src: 'images/twin_shadows_guns.png',
    type: 'weapon',
  }
];

const armors: TEquipment[] = [
  {
    name: 'Shadow of the Dawn Armor',
    type: 'armor',
    health: 20,
    src: 'images/shadow_of_the_dawn_armor.png'
  },
  {
    name: 'Radiant Guard Armor',
    type: 'armor',
    health: 35,
    src: 'images/radiant_guard_armor.png'
  },
  {
    name: 'Vanguard’s Vow',
    type: 'armor',
    health: 50,
    src: 'images/vanguards_vow.png'
  },
  {
    name: 'Protector’s Bulwark',
    type: 'armor',
    health: 60,
    src: 'images/protectors_bulwark.png'
  },
  {
    health: 75,
    name: 'Aegis of the Sentinel',
    src: 'images/aegis_of_the_sentinel.png',
    type: 'armor',
  }
];

const elixirs: TEquipment[] = [
  {
    name: 'Elixir of Wrath',
    type: 'elixir',
    health: 50,
    src: 'images/elixir_of_wrath.png'
  },
  {
    name: 'Elixir of Iron',
    type: 'elixir',
    health: 100,
    src: 'images/elixir_of_iron.png'
  },
  {
    name: 'Elixir of Life',
    type: 'elixir',
    health: 200,
    src: 'images/elixir_of_life.png'
  },
  {
    name: 'Elixir of Resilience',
    type: 'elixir',
    health: 150,
    src: 'images/elixir_of_resilience.png'
  },
  {
    name: 'Elixir of Fortitude',
    type: 'elixir',
    health: 250,
    src: 'images/elixir_of_fortitude.png'
  }
];

const equipment: TEquipment[] = [...weapons, ...armors, ...elixirs];

export default equipment;
