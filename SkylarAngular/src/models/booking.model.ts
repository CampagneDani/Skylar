import {Project} from "./project.model";
import {User} from "./user.model";
import {BankAccount} from "./bankaccount.model";
import {Budget} from "./budget.model";

export interface Booking{
  id:number,
  date:Date,
  value:number,
  assignedBudgetId:Budget['id'],
  assignedUserId:User['id'],
  assignedProjectId:Project['id']
  assignedBankAccountId:BankAccount['id'],

}
