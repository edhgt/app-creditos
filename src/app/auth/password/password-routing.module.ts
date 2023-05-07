import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent
  },
  {
    path: ':token',
    loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
