import {IUser} from '../../user/shared/user.model';

export interface IReservation {
  checkinDate: Date;
  checkoutDate: Date;
  peopleCount: number;
  user: IUser;
}
