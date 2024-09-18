
/* #region Equipment */

export type TEquipment = {
  armor?: number;
  damage?: number;
  health?: number
  id: string;
  name: string;
  src?: string;
  type: 'armor' | 'elixir' | 'weapon';
}

/* #endregion */

/* #region utils */

export interface IRandomNumbers {
  number1: number;
  number2: number;
}

/* #endregion */
