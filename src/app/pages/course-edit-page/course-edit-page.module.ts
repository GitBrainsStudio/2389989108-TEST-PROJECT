import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditPageRoutingModule } from './course-edit-page-routing.module';
import { CourseEditPageComponent } from './course-edit-page.component';
import { CourseEditPageService } from '../../modules/course/services/course-edit-page.service'
import { CourseModule } from '../../modules/course/course.module';
import { FooterModule } from '../../modules/footer/footer.module';


@NgModule({
  declarations: [CourseEditPageComponent],
  imports: [
    CommonModule,
    CourseEditPageRoutingModule,
    CourseModule,
    FooterModule
  ],
  providers: [CourseEditPageService]
})
export class CourseEditPageModule { }
