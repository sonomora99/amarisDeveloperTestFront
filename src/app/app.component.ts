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
  showAlert:boolean;
  statusCode:string;
  message:string;
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
    this.showAlert= false;
    this.employeeService.getEmployeesList().subscribe(res=>{
      if(res.status == "200"){
        this.employeesList = res.data;
      }else{
        this.showAlert= true;
        this.statusCode= res.status
        this.message = res.message
      }
    },
    error=>{
      this.showAlert= true;
      this.statusCode= "500"
        this.message = "Internal server error"
    })
  }
  getEmployeeById(){
    this.showAlert= false;
    this.employeeService.getEmployeeByID(this.employeeId).subscribe(res=>{
      
      if(res.status == "200"){
        this.employee = res.data[0];
        // this.employeesList = res.data;
      }else{
        this.showAlert= true;
        this.statusCode= res.status
        this.message = res.message
      }
    },
    error=>{
      this.showAlert= true;
      this.statusCode= "500"
        this.message = "Internal server error"

    })
    

    
  }
}
