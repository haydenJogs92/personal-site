import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('../+routes/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../+routes/contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'side-projects',
        loadChildren: () => import('../+routes/side-projects/side-projects.module').then(m => m.SideProjectsModule),
      }
    ]
  }       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
