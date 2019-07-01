import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {



  // Instead of creating employee array in both(employee-detail and employee-name-list) components, we are making use of Services to provide the employees.
  // We also use Dependency Injection by registering the service with appModule(in provider).
  public employee=[];

  // Here we are injecting the service to the constructor.
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {

    // Now we can get that array of employee.
    this.employee=this._employeeService.getEmployees();

  }

}
