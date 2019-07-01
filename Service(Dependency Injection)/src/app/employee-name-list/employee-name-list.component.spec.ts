import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNameListComponent } from './employee-name-list.component';

describe('EmployeeNameListComponent', () => {
  let component: EmployeeNameListComponent;
  let fixture: ComponentFixture<EmployeeNameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
