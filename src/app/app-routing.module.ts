import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './showcase/example/example.component';
import { JoinPipeComponent } from './showcase/join-pipe/join-pipe.component';


const routes: Routes = [

  { path: 'maca-example', component: ExampleComponent },
  { path: 'maca-join-pipe', component: JoinPipeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
