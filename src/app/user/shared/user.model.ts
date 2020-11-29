import {IReservation} from '../../reservations/shared/reservation.model';

export interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  reservations: IReservation[];
}
