import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideProjectsComponent } from './side-projects.component';
import { SideProjectsRoutingModule } from './side-projects-routing.module';
import { SharedModule } from '../../lib/shared/shared.module';


@NgModule({
  declarations: [
    SideProjectsComponent
  ],
  imports: [
    CommonModule,
    SideProjectsRoutingModule,
    SharedModule
  ]
})
export class SideProjectsModule { }
