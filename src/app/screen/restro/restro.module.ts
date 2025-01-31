import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestroRoutingModule } from './restro-routing.module';
import { RestrocardComponent } from './component/restrocard/restrocard.component';


@NgModule({
  declarations: [
    RestrocardComponent
  ],
  imports: [
    CommonModule,
    RestroRoutingModule
  ]
})
export class RestroModule { }
