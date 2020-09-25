import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './showcase/example/example.component';
import { MacaExampleModule } from 'maca-example';
import { MacaJoinPipeModule } from 'maca-join-pipe';
import { JoinPipeComponent } from './showcase/join-pipe/join-pipe.component';
import { SpinnerComponent } from './showcase/spinner/spinner.component';
import { MacaSpinnerModule } from 'maca-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    JoinPipeComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MacaExampleModule,
    MacaJoinPipeModule,
    MacaSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
