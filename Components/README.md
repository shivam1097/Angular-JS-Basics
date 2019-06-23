# @Component
--- 
* @Component is a decorator which have the info about the ->
* selector -> which can be considered as the HTML tag.
* templateUrl-> which is the view or the HTML that will be loaded in the place of that tag placed in the root component template file.
* The root component tag is placed inside the index.html file in src folder.
* The application starts with the main.js file which calls the appModule(Root Module), which inturn calls the appComponent(Root component)
* All the other components created by the user must be used inside the Root Component templateUrl file(app.component.html)

---

## How to create Component?
---

* We can create a component using Angular CLI by Typing following command->

* `ng g c component_name`
    Here g is for generate
    c is for component.

* component_name folder will be created after executing this command.
* Now we can include the component_name tag inside the app.component.html file.
* We also have to specify the class name inside the app.module.ts file inside declaration section to tell about that component.

---

# selector property

---
We can use selector in 3 types ->
  * As an html tag ->
          Eg.  `selector: 'app-root'`
          In html file, use this as Tag  `<app-root>`
  * As a class ->
          Eg.   `selector: '.app-root'`
          In html, use as class  `<div class="app-root"></div>`
  * As an attribute ->
          Eg.    `selector: [app-root]`
          In html, use this as attribute `<div app-root ></div>`

---

# template property
---
* We can also use 'template' property for inline HTML instead of using templateUrl for the link to the HTML.
  If we have to write multiple lines, we can make use of backtick.
  Eg. 
  ```javascript
  template: "<div>Inline HTML</div>"
  template: `<div>  Multiple Lines <div>
              <p>Hey</p>`

---

# style property

---

* We can use style to specify the the styling
```javascript
    style: [`
            h1{
                color:red;
            }`]
---