import { Injectable } from '@angular/core';
import { ITask } from '../types/modules'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { baseUrl } from '../api/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = baseUrl

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl)
  }

  onDeleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  updateTask(task: ITask): Observable<any> {
    return this.http.put<ITask>(`${this.apiUrl}/${task.id}`, task, httpOptions)
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions)
  }

}
