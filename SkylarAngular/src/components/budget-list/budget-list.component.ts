import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";

import {BudgetService} from "../../services/budget.service";
import {Budget} from "../../models/budget.model";
import {Booking} from "../../models/booking.model";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  constructor(private budgetService: BudgetService,) {

  }
  //-------------------Budget Variables--------------------------
  // Create Budgets
  startDate = Date()
  endDate = Date()
  value = 0
  authorized = false
  assignedProjectBudget: Project[] = []
  assignedBookingBudget:Budget[]=[]
  budget: Budget[] = []

  //Update Budgets
  updStartDate = Date()
  updEndDate = Date()
  updValue = 0
  updAuthorized = false
  updAssignedProjectBudget: Project[] = []
  updAssignedBookingBudget: Booking[] = []

  //-------------------Other Variables--------------------------
  hidden = [false]
  truefalse=[true,false]

  ngOnInit() {
//    this.getAllBudgets()
  }
/*
  //--------------------------Budgets------------------------------------

  getAllBudgets() {
    this.budgetService.getAllBudget().subscribe((dto: Budget[]) => {
      this.budget = dto;
    })
  }

  createBudget() {
    this.budgetService.createBudget({
      startDate: this.startDate,
      endDate: this.endDate,
      value: this.value,
      authorized: this.authorized,
      assignedProject: this.assignedProjectBudget,
      assignedBooking: this.assignedBookingBudget,


    }).subscribe(user => {
      this.getAllBudgets()
    })
  }

  updateBudget(id: number) {
    this.budgetService.updateBudget({
      startDate: this.updStartDate,
      endDate: this.updEndDate,
      value: this.updValue,
      authorized: this.updAuthorized,
      assignedProject: this.updAssignedProjectBudget,
      assignedBooking: this.updAssignedBookingBudget,
    }, id).subscribe(project => {

      this.getAllBudgets()

    })

  }

  deleteBudget(id: number) {
    this.budgetService.deleteBudget(id).subscribe(() => {
      this.getAllBudgets()
    })
  }
*/
}

