import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseEditPageComponent } from './course-edit-page.component';


const routes: Routes = [{ path: '', component: CourseEditPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CourseEditPageRoutingModule {}