import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../models/EmployeeResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 

  }



  getEmployeesList():Observable<EmployeeResponse>{
    return this.http.get<EmployeeResponse>("employees/");
  }

  
  getEmployeeByID(id:string):Observable<EmployeeResponse>{
    return this.http.get<EmployeeResponse>("employees/"+id);
  }
}
