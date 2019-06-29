import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  isError=false;
  
  orangeStyle='orange';

  styleObject={
    color: 'blue',
    fontStyle: 'italic',        // As we can't use font-style, so write in camel case.
    textTransform: 'uppercase'
  }

  constructor() { }

  ngOnInit() {
  }

}
