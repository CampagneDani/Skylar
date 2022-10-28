import {Project} from "./project.model";
import {User} from "./user.model";
import {BankAccount} from "./bankaccount.model";
import {Budget} from "./budget.model";

export interface Booking{
  id:number
  date:Date,
  value:number,
  assignedBudget:Budget,
  assignedUser:User,
  assignedProject:Project
  assignedBankAccount:BankAccount,

}
