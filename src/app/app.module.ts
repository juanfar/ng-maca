import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './showcase/example/example.component';
import { MacaExampleModule } from 'maca-example';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MacaExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
