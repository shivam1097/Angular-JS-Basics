import { Injectable } from '@angular/core';
// It is used, if in case Employee Service might have another dependency.
// Without this decorator, this class is a simple class.
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
