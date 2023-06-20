import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employees';
  employeeIdForm:FormGroup;
  employeesList:Employee[] | undefined;
  employeeId:string;
  employee:Employee|undefined;

  constructor( private fb:FormBuilder,private employeeService:EmployeeService){

  }
  ngOnInit(): void {
    this.employeeIdForm = this.fb.group({
      id:['']
    })
    this.getEmployeesList()
  }

  SearchEmployee(){

     let id = this.employeeIdForm.get("id")?.value;
    if(id == "" || id == null){
      this.employee = undefined;
      this.employeeId= ""

    this.getEmployeesList()
    }else{
      this.employeesList= undefined;
      this.employeeId= id
      this.getEmployeeById()
    }
    
  }

  getEmployeesList(){
    this.employeeService.getEmployeesList().subscribe(res=>{
      
      this.employeesList = res;
      
    },
    error=>{

    })
  }
  getEmployeeById(){
    this.employeeService.getEmployeeByID(this.employeeId).subscribe(res=>{
      
      this.employee = res;
    },
    error=>{
    })
    

    
  }
}
