import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAllPageComponent } from './course-all-page.component';


const routes: Routes = [{ path: '', component: CourseAllPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CourseAllPageRoutingModule {}