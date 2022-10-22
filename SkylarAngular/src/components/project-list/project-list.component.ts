import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project.model";
import {Budget} from "../../models/budget.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  constructor(private projectService: ProjectService,) {

  }

  updProjectname = ""
  updDescription=""
  updUser:User[]=[];
  updBudget:Budget[]=[]
  project:Project[]=[]
  hidden = [false]

  ngOnInit() {
    this.getAllProjects()
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.project = dto;
    })
  }

  updateProject(id: number) {
    this.projectService.updateProject({

      projectname: this.updProjectname,
      user: this.updUser,
      budget: this.updBudget,
      description:this.updDescription
    }, id).subscribe(user => {
      console.log(user),
        this.getAllProjects()

    })

  }

  deleteUser(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getAllProjects()
    })
  }
}
