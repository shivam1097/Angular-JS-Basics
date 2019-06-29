import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  name="Shivam";

  changeInputText(input){
    console.log(input);
    input.value=this.name;
  }


  constructor() { }

  ngOnInit() {
  }
}
