import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { EmployeeNameListComponent } from './employee-name-list/employee-name-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeNameListComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // Here we are registering the service at AppModule level so that all it's child can access it.
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
