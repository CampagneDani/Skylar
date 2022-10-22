import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project} from "../models/project.model";
import {Budget} from "../models/budget.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }
  userURL = 'http://localhost:8080/budget';
  getAllBudget(){
    return this.http.get<Budget[]>(this.userURL);
  }

  createBudget(budget: {id:number
    budget:number
    project:Project}): Observable<Budget> {
    return this.http.post<Budget>(this.userURL, budget);
  }

  deleteBudget(id: number): Observable<unknown> {
    const url = `${this.userURL}/${id}`
    return this.http.delete(url)
  }

  findByProject(project: string): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.userURL}?project=${project}`);
  }

  updateBudget(budget: { project: Project[]; budget: number },
               id: number):Observable<Budget>{
    const url = `${this.userURL}/${id}`
    return this.http.put<Budget>(url,budget)
  }
}
