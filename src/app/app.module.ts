import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './showcase/example/example.component';
import { MacaExampleModule } from 'maca-example';
import { MacaJoinPipeModule } from 'maca-join-pipe';
import { JoinPipeComponent } from './showcase/join-pipe/join-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    JoinPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MacaExampleModule,
    MacaJoinPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
