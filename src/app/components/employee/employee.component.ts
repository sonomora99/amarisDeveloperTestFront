import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input("employee")
  employee:Employee;
  constructor() { }

  ngOnInit(): void {
    
  }

  
}
