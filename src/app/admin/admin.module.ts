import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    ControlSidebarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class AdminModule { }
