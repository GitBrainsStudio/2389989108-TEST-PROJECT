import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'courses/:id/edit', 
    loadChildren: () => import('./pages/course-edit-page/course-edit-page.module').then((m) => m.CourseEditPageModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/course-all-page/course-all-page.module').then((m) => m.CourseAllPageModule),
  },
  {
    path: '**', redirectTo: 'courses'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
