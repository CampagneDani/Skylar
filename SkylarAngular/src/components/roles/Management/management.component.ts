import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../models/project.model";
import {Budget} from "../../../models/budget.model";
import {BudgetService} from "../../../services/budget.service";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit{
  constructor(private projectService:ProjectService,
              private budgetService:BudgetService) {

  }
 // Projects
  projectname=""
  description=""
  budget:Budget[]=[]
  project:Project[]=[]
 //Budgets
  budgetBudget=0
  projectBudget:Project[]=[]


  hidden = [false]

  ngOnInit() {
    this.getAllProjects()
  }
//--------------------------Projects------------------------------------
  getAllProjects(){
    this.projectService.getAllProjects().subscribe((dto:Project[])=>{
      this.project = dto;
    })
  }
  updateProject(id:number){
    this.projectService.updateProject({

      projectname:this.projectname,
      description:this.description,
      budget: this.budget,
      project: this.project,
    },id).subscribe(project =>{

        this.getAllProjects()

    })

  }
  deleteUser(id:number){
    this.projectService.deleteProject(id).subscribe(()=>{this.getAllProjects()})
  }

  //--------------------------Budgets------------------------------------

  getAllBudgets(){
    this.budgetService.getAllUser().subscribe((dto:Budget[])=>{
      this.budget = dto;
    })
  }
  updateBudgets(id:number){
    this.budgetService.updateBudget({
      budget:this.budgetBudget,
      project:this.projectBudget,
    },id).subscribe(project =>{

      this.getAllBudgets()

    })

  }
  deleteBudget(id:number){
    this.budgetService.deleteBudget(id).subscribe(()=>{this.getAllBudgets()})
  }


}

