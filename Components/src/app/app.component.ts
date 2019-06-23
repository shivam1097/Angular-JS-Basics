import { Component } from '@angular/core';


// It is a decorator which have the info about the ->
// selector - which can be considered as the HTML tag.
// templateUrl- which is the view or the HTML that will be loaded in the place of that tag placed in the root component template file.
// The root component tag is placed inside the index.html file in src folder.
// The application starts with the main.js file which calls the appModule(Root Module), which inturn calls the appComponent(Root component)
// All the other components created by the user must be used inside the template file of Root Component templateUrl file(app.component.html)

// We can create a component using Angular CLI by Typing following command->

// ng g c component_name
// Here g is for generate
// c is for component.

// component_name folder will be created after executing this command.
// Now we can include the component_name tag inside the app.component.html file.
// We also have to specify the class name inside the app.module.ts file to tell about that component.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components';
}
