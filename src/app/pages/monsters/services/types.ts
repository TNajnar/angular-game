
/* #region Monster Detail */

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
  index: string;
  name: string;
  size: string;
  type: string;
  alignment: string;
  armor_class: IArmorClass[];
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: ISpeed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: IProficiency[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses: ISenses;
  languages: string;
  challenge_rating: number;
  proficiency_bonus: number;
  xp: number;
  special_abilities: ISpecialAbility[];
  actions: IAction[];
  legendary_actions: ILegendaryAction[];
  image: string;
  url: string;
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
