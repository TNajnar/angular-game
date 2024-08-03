export type TMonsterDataItem = {
  src: string,
  health: number;
  damage: number;
}

export type TMonstersData = Record<string, TMonsterDataItem>;


/* #region Monster List */

export interface IMonsters {
  count: number;
  results: IMonster[];
}

export interface IMonster {
  index: string;
  name: string;
  url: string;
}

/* #endregion */

/* #region Monster Detail */

export interface IMonsterDetail {
  actions: IAction[];
  alignment: string;
  armor_class: IArmorClass[];
  challenge_rating: number;
  charisma: number;
  condition_immunities: string[];
  constitution: number;
  damage_immunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  desc?: string;
  dexterity: number;
  hit_dice: string;
  hit_points_roll: string;
  hit_points: number;
  image: string;
  index: string;
  intelligence: number;
  languages: string;
  legendary_actions: ILegendaryAction[];
  name: string;
  proficiencies: IProficiency[];
  proficiency_bonus: number;
  senses: ISenses;
  size: string;
  special_abilities: ISpecialAbility[];
  speed: ISpeed;
  strength: number;
  type: string;
  url: string;
  wisdom: number;
  xp: number;
}

interface IArmorClass {
  type: string;
  value: number;
}

interface ISpeed {
  walk: string;
  swim: string;
}

interface IProficiency {
  value: number;
  proficiency: {
    index: string;
    name: string;
    url: string;
  };
}

interface ISenses {
  darkvision: string;
  passive_perception: number;
}

interface ISpecialAbility {
  name: string;
  desc: string;
  dc?: IDC;
}

interface IDC {
  dc_type: {
    index: string;
    name: string;
    url: string;
  };
  dc_value: number;
  success_type: string;
}

interface IAction {
  name: string;
  multiattack_type?: string;
  desc: string;
  actions?: ISubAction[];
  attack_bonus?: number;
  dc?: IDC;
  damage?: IDamage[];
}

interface ISubAction {
  action_name: string;
  count: number;
  type: string;
}

interface IDamage {
  damage_type: {
    index: string;
    name: string;
    url: string;
  };
  damage_dice: string;
}

interface ILegendaryAction {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage?: IDamage[];
}

/* #endregion */
