import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAllPageComponent } from './course-all-page.component';
import { CourseAllPageRoutingModule } from './course-all-page-routing.module';
import { FooterModule } from 'src/app/modules/footer/footer.module';

@NgModule({
  declarations: [CourseAllPageComponent],
  imports: [
    CommonModule,
    CourseAllPageRoutingModule,
    FooterModule
  ],
})
export class CourseAllPageModule { }
