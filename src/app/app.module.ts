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
import { MacaToastModule } from 'maca-toast';
import { ToastComponent } from './showcase/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    JoinPipeComponent,
    SpinnerComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MacaExampleModule,
    MacaJoinPipeModule,
    MacaSpinnerModule,
    MacaToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
