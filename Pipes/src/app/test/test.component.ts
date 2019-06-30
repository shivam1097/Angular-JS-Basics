import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  name="Shivam";
  titleCaseWord="hello shiVAm ! what's up ?"

  person={
    f_name:"Shivam",
    l_name:"Shukla"
  }

  date= new Date();

  constructor() { }

  ngOnInit() {
  }
}
