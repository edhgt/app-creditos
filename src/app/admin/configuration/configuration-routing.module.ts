import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'regions',
    loadChildren: () => import('./regions/regions.module').then(m => m.RegionsModule)
  },
  {
    path: 'branchs',
    loadChildren: () => import('./branchs/branchs.module').then(m => m.BranchsModule)
  },
  {
    path: 'catalogs',
    loadChildren: () => import('./catalogs/catalogs.module').then(m => m.CatalogsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
