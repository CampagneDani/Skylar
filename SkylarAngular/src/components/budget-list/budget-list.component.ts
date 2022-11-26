import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";

import {BudgetService} from "../../services/budget.service";
import {Budget} from "../../models/budget.model";
import {Booking} from "../../models/booking.model";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  constructor(private budgetService: BudgetService,
              private projectService:ProjectService) {

  }

  //-------------------Global Variables--------------------------
  hidden = [false]
  truefalse=[true,false]

  budgets:Budget[]=[]
  projects:Project[]=[]
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.projects = dto;
    })
  }
  getProjectName(id:number){
    return this.projects.find((project) => project.id === id)?.projectName  }
  //-------------------Budget Variables--------------------------
  // Create Budgets
  startDate = Date()
  endDate = Date()
  valueB = 0

  assignedProjectBudget:number|undefined


  //Update Budgets
  updStartDate = Date()
  updEndDate = Date()
  updValueB = 0
  updAssignedProjectBudget: number|undefined



  ngOnInit() {
  this.getAllBudgets()
    this.getAllProjects()
  }

  //--------------------------Budgets------------------------------------

  getAllBudgets() {
    this.budgetService.getAllBudget().subscribe((dto: Budget[]) => {
      this.budgets = dto;
    })
  }

  createBudget() {
    this.budgetService.createBudget({
      startDate: this.startDate,
      endDate: this.endDate,
      value: this.valueB,
      assignedProjectId: this.assignedProjectBudget!,

    }).subscribe(user => {
      this.getAllBudgets()
    })
  }

  updateBudget(id: number) {
    this.budgetService.updateBudget({
      startDate: this.updStartDate,
      endDate: this.updEndDate,
      value: this.updValueB,
      assignedProjectId:this.updAssignedProjectBudget!
    }, id).subscribe(project => {

      this.getAllBudgets()

    })

  }

  deleteBudget(id: number) {
    this.budgetService.deleteBudget(id).subscribe(() => {
      this.getAllBudgets()
    })
  }

}

