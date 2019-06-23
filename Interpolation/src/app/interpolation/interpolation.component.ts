import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl:'./interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {


  public name="Shivam"
  constructor() { }

  ngOnInit() {
  }

  greet(name) {
    return this.name + "welcomes you "+name +" !";
  }



}
