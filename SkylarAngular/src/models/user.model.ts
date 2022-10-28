import {Booking} from "./booking.model";
import {BankAccount} from "./bankaccount.model";
import {Project} from "./project.model";

export interface User{
   id:number
   username:string
   password:string
   email:string
   role:string
   assignedBookings:Booking[],
   assignedProjects:Project[],
   assignedBankAccounts:BankAccount[]

 }
