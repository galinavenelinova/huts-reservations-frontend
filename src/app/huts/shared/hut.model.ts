import {IMountain} from '../../home/shared/mountain.model';

export interface IHut {
  id: string;
  name: string;
  bedCapacity: number;
  shortInfo: string;
  longInfo: string;
  mountain: IMountain;
}
