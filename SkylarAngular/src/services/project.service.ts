import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {Project} from "../models/project.model";
import {Booking} from "../models/booking.model";
import {Budget} from "../models/budget.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  projectURL = 'http://localhost:8080/project';
  getAllProjects(){
    return this.http.get<Project[]>(this.projectURL);
  }

  createProject(project: {  projectName: string; projectDescription: string; assignedUserId: User['id'] }): Observable<Project> {
    return this.http.post<Project>(this.projectURL, project);
  }

  deleteProject(id: number): Observable<unknown> {
    const url = `${this.projectURL}/${id}`
    return this.http.delete(url)
  }

  findByTitle(name: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.projectURL}?name=${name}`);
  }

  updateProject(project: {  projectName: string; projectDescription: string; assignedUserId: User['id']; },
                id: number):Observable<Project>{
    const url = `${this.projectURL}/${id}`
    return this.http.put<Project>(url,project)
  }
}
