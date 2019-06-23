import { Component, OnInit } from '@angular/core';
import { TemplatePropertyComponent } from '../template-property/template-property.component';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent  implements OnInit  {

  constructor() {
   }

  ngOnInit() {
  }

}
