import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SinginComponent} from './components/singin/singin.component';

const routes: Routes = [
  {path: 'sing-in', component: SinginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
