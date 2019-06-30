import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'Component Interaction';

  // Here we are declaring the name variable to be used in the child component(test).
  // In the html, where we used the test component, we can pass the name to the test component using binding.
  // In test component.ts file we can use that name using @Input() decorator.
  public sentName = 'Shivam';
  public sentColor =' Black';

  public receivedMessage="";

}


