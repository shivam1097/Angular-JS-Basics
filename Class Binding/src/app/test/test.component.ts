import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  successClass="success";
  dangerClass="danger";
  specialClass="special";

  // We can also use boolean values to decide whether a class will be assigned or not.
  isError=false;
  isSpecial=true;  //There is special syntax to use this, refer to html file.

  // Creating object of class which can be assigned directly using ngClass.
  messageClasses={
    "success": !this.isError,
    "danger": this.isError,
    "special":this.isSpecial
  }
  constructor() { }
  
  ngOnInit() {
  }

}
