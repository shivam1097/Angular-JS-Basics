import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  name="Shivam";

  handleClick(){
    alert("Hello "+this.name);
  }

  handleClick1(event){
    alert("Event type : "+event.type);
    console.log(event);
  }


  constructor() { }

  ngOnInit() {
  }
}
