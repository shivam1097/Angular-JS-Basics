import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TemplatePropertyComponent } from './template-property/template-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TemplatePropertyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
