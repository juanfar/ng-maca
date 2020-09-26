import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickOutsideComponent } from './showcase/click-outside/click-outside.component';
import { ExampleComponent } from './showcase/example/example.component';
import { JoinPipeComponent } from './showcase/join-pipe/join-pipe.component';
import { SpinnerComponent } from './showcase/spinner/spinner.component';
import { ToastComponent } from './showcase/toast/toast.component';


const routes: Routes = [

  { path: 'maca-example', component: ExampleComponent },
  { path: 'maca-join-pipe', component: JoinPipeComponent },
  { path: 'maca-spinner', component: SpinnerComponent },
  { path: 'maca-toast', component: ToastComponent },
  { path: 'maca-click-outside', component: ClickOutsideComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
