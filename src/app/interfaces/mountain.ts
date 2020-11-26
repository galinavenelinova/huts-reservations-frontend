import {IHut} from './hut';

export interface IMountain {
  id: string;
  name: string;
  info: string;
  huts: IHut[];
}
