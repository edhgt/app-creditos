import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchsRoutingModule } from './branchs-routing.module';
import { BranchsComponent } from './branchs.component';


@NgModule({
  declarations: [
    BranchsComponent
  ],
  imports: [
    CommonModule,
    BranchsRoutingModule
  ]
})
export class BranchsModule { }
