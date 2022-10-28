import {User} from "./user.model";

import {Booking} from "./booking.model";
import {Budget} from "./budget.model";

export interface Project{
  id:number
  name:string
  description:string
  assignedBudget:Budget
  assignedUser:User[]
  assignedBooking:Booking[]

}
