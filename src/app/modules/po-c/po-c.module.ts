import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoCRoutingModule } from './po-c-routing.module';
import { PoCComponent } from './containers/po-c/po-c.component';


@NgModule({
  declarations: [
    PoCComponent
  ],
  imports: [
    CommonModule,
    PoCRoutingModule
  ]
})
export class PoCModule { }
