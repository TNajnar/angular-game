
/* #region Equipment */

export type TEquipment = {
  armor?: number;
  damage?: number;
  health?: number
  id: number;
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
