import {IReservation} from '../../reservations/shared/reservation.model';

export interface IUser {
  username: string;
  email: string;
  tel: string;
  names: string;
  reservations: IReservation[];
  role: string;
}
