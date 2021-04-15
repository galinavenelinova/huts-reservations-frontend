import {IUser} from '../../user/shared/user.model';

export interface IReservation {
  id: string;
  checkinDate: Date;
  checkoutDate: Date;
  peopleCount: number;
  user: IUser;
}
