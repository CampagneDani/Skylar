import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../models/project.model";
import {BudgetService} from "../../../services/budget.service";
import {Booking} from "../../../models/booking.model";
import {Budget} from "../../../models/budget.model";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  constructor(private projectService: ProjectService,
              private budgetService: BudgetService) {

  }
  // ------------------Project Variables-----------------------------------
  // Create Projects
  name = ""
  description = "";
  assignedBudgetProject: Budget[] = [];
  assignedUserProject: User[] = [];
  assignedBookingProject: Booking[] = []
  project: Project[] = []

  // Update Project
  updName = ""
  updDescription = "";
  updAssignedBudgetProject: Budget[] = [];
  updAssignedUserProject: User[] = [];
  updAssignedBookingProject: Booking[] = []
  updProject: Project[] = []

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
    this.getAllProjects()
    this.getAllBudgets()
  }

//--------------------------Projects------------------------------------
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.project = dto;
    })
  }

  createProject() {
    this.projectService.createProject({
      name: this.name,
      description: this.description,
      assignedBudget: this.assignedBudgetProject,
      assignedBooking: this.assignedBookingProject,
      assignedUser: this.assignedUserProject,

    }).subscribe(user => {
      this.getAllProjects()
    })
  }

  updateProject(id: number) {
    this.projectService.updateProject({
      name: this.updName,
      description: this.updDescription,
      assignedBudget: this.updAssignedBudgetProject,
      assignedBooking: this.updAssignedBookingProject,
      assignedUser: this.updAssignedUserProject,
    }, id).subscribe(project => {

      this.getAllProjects()

    })

  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getAllProjects()
    })
  }

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


}

