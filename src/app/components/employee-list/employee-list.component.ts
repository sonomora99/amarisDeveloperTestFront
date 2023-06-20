import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input("employeesList")
  employeesList:Employee[];
  displayedColumns: string[] = [];
  isLoadingResults:boolean = false;
  resultsLength:number =0;

  constructor() { }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  getEmployeeList(){
    let keys = this.employeesList[0];

      this.displayedColumns = Object.keys(keys)
    
      this.resultsLength= this.employeesList.length
    
    

    
  }
}
