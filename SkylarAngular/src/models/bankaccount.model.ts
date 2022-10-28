import {Booking} from "./booking.model";
import {User} from "./user.model";

export interface BankAccount{
  id:number
  saldo:number,
  assignedBookings:Booking[]
  assignedUser:User[]

}
