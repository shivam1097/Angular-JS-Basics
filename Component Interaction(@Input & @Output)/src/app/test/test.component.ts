import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

// To specify that this data is coming from the parent component, we have to use @Input() decorator.
  @Input()  colorFromParent;

  // We can also use custom name by using following syntax
  @Input('nameFromParent') receivedName;
  // Here we are telling that the name of property sent by the app component is still 'dataFromParent', but we are using it as 'receivedName' here. 


  // We can't directly send the data from child component to parent component.
  // We have to use the @Output() decorator and the Events to send the data from the child to the parent component.
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Now to send a event, we can create a method.
  fireEvent(){
    this.childEvent.emit("This message is sent by the child component.");
  }
}
