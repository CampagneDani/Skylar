import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project} from "../models/project.model";
import {Budget} from "../models/budget.model";
import {Booking} from "../models/booking.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }
  budgetURL = 'http://localhost:8080/budget';
  getAllBudget(){
    return this.http.get<Budget[]>(this.budgetURL);
  }

  createBudget(budget: { assignedBooking: Budget[]; endDate: string; assignedProject: Project[]; authorized: boolean; value: number; startDate: string }): Observable<Budget> {
    return this.http.post<Budget>(this.budgetURL, budget);
  }

  deleteBudget(id: number): Observable<unknown> {
    const url = `${this.budgetURL}/${id}`
    return this.http.delete(url)
  }

  findByProject(project: string): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.budgetURL}?project=${project}`);
  }

  updateBudget(budget: { assignedBooking: Booking[]; endDate: string; assignedProject: Project[]; authorized: boolean; value: number; startDate: string },
               id: number):Observable<Budget>{
    const url = `${this.budgetURL}/${id}`
    return this.http.put<Budget>(url,budget)
  }
}
