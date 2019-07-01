import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [{ id: 1 , name: "Shivam", age:21 },
            {id:2, name: "Tim" , age: 45},
            {id:3, name:"Colt", age:26}];
  }
}
