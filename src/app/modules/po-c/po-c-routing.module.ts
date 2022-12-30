import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoCComponent } from './containers/po-c/po-c.component';

const routes: Routes = [
  {
    path:'',
    component: PoCComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoCRoutingModule { }
