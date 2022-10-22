import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";
import {Budget} from "../../models/budget.model";
import {BudgetService} from "../../services/budget.service";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  constructor(private budgetService: BudgetService,) {

  }

  updBudget=0
  updProject:Project[]=[]
  budget:Budget[]=[]

  hidden = [false]

  ngOnInit() {
    this.getAllProjects()
  }

  getAllProjects() {
    this.budgetService.getAllBudget().subscribe((dto: Budget[]) => {
      this.budget = dto;
    })
  }

  updateProject(id: number) {
    this.budgetService.updateBudget({

      budget:this.updBudget,
      project:this.updProject,
    }, id).subscribe(user => {
      console.log(user),
        this.getAllProjects()

    })

  }

  deleteUser(id: number) {
    this.budgetService.deleteBudget(id).subscribe(() => {
      this.getAllProjects()
    })
  }
}
