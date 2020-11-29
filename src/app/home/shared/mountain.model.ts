import {IHut} from '../../huts/shared/hut.model';

export interface IMountain {
  id: string;
  name: string;
  info: string;
  huts: IHut[];
}
