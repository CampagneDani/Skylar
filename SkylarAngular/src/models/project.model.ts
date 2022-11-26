import {User} from "./user.model";

import {Booking} from "./booking.model";
import {Budget} from "./budget.model";

export interface Project{
  id:number
  projectName:string
  projectDescription:string
  assignedBudget:Budget
  assignedUserId:User['id']
  assignedBooking:Booking[]

}
