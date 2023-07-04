import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs.component';


@NgModule({
  declarations: [
    CatalogsComponent
  ],
  imports: [
    CommonModule,
    CatalogsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogsModule { }
