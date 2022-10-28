import {Project} from "./project.model";
import {Booking} from "./booking.model";

export interface Budget {
  id:number
  startDate:Date,
  endDate:Date,
  value:number,
  authorized:boolean,
  assignedProject:Project,
  assignedBooking:Booking[]

}
