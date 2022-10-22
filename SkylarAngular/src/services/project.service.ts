import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {Project} from "../models/project.model";
import {Budget} from "../models/budget.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  userURL = 'http://localhost:8080/project';
  getAllProjects(){
    return this.http.get<Project[]>(this.userURL);
  }

  createProject(project: {projectname:string
    description:string
    user:User[];
    budget:Budget }): Observable<Project> {
    return this.http.post<Project>(this.userURL, project);
  }

  deleteProject(id: number): Observable<unknown> {
    const url = `${this.userURL}/${id}`
    return this.http.delete(url)
  }

  findByTitle(projectname: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.userURL}?projectname=${projectname}`);
  }
  updateProject(project: { projectname: string, description:string; user: User[]; budget: Budget[] },
                id: number):Observable<Project>{
    const url = `${this.userURL}/${id}`
    return this.http.put<Project>(url,project)
  }
}
