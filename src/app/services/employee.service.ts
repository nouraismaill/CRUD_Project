import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employee', data);
  }
  getEmployeesList(): Observable<any> {
    return this.http.get('http://localhost:3000/employee');
  }
}
