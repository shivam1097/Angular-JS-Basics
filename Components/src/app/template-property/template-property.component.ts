import { Component, OnInit } from '@angular/core';

@Component({

  // Using . so that it can be used as a class.
  selector: '.app-template-property',

  // Instead of using templateUrl, we are using template property.
  template:`<h1>
            Hello {{name}} !
            </h1>
            <p> 
            How are you?
            </p>`,
  
  // Similarly we can also use Style tag to specify styling
  styles: [` 
          h1{
            text-transform:uppercase;
            color: red;
          }`]
})
export class TemplatePropertyComponent implements OnInit {

  name="Shivam"

  constructor() { }

  ngOnInit() {
  }

}
