import {IMountain} from './mountain';

export interface IHut {
  id: string;
  name: string;
  shortInfo: string;
  longInfo: string;
  mountain: IMountain;
}
