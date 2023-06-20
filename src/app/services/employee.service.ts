import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 

  }



  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>("employees/");
  }

  
  getEmployeeByID(id:string):Observable<Employee>{
    return this.http.get<Employee>("employees/"+id);
  }
}
