
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CourseFormComponent } from './components/course-form/course-form.component';

@NgModule({
  declarations: [
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseFormComponent
  ],
})
export class CourseModule { }
