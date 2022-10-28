import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project.model";

import {Booking} from "../../models/booking.model";
import {Budget} from "../../models/budget.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  constructor(private projectService: ProjectService,) {

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

  hidden = [false]

  ngOnInit() {
    this.getAllProjects()
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


}
