import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideProjectsComponent } from './side-projects.component';

const routes: Routes = [
  {
    path: '',
    component: SideProjectsComponent
  }       
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideProjectsRoutingModule { }
