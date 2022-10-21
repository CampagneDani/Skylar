import {User} from "./user.model";
import {Budget} from "./budget.model";

export interface Project{
  id:number
  projectname:string
  description:string
  user:User[];
  budget:Budget
}
