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
  getUserName(id:number){
    return this.users.find((user)=>user.id === id)?.username
  }
  users:User[]=[]
  projects:Project[]=[]
  hidden = [false]
// ------------------Project Variables-----------------------------------
  // Create Projects
  name = ""
  description = "";
  userP: number | undefined;


  // Update Project
  updName = ""
  updDescription = "";
  updUserP: number|undefined


  ngOnInit() {
    this.getAllProjects()
  }


//--------------------------Projects------------------------------------
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.projects = dto;
    })
  }

  createProject() {
    this.projectService.createProject({
      projectName: this.name,
      projectDescription: this.description,
      assignedUserId: this.userP!,

    }).subscribe(project => {
      this.getAllProjects()
      console.log(project)
    })
  }

  updateProject(id: number) {
    this.projectService.updateProject({
      projectName: this.updName,
      projectDescription: this.updDescription,
      assignedUserId: this.updUserP!,
    }, id).subscribe(project => {

      this.getAllProjects()
      console.log(project)
    })

  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getAllProjects()
    })
  }


}
