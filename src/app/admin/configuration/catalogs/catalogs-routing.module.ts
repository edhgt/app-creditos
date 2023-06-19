import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogsComponent } from './catalogs.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogsComponent
  },
  {
    path: ':table',
    component: TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }
