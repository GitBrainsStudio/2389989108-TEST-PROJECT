import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseEditPageService } from 'src/app/modules/course/services/course-edit-page.service';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss']
})
export class CourseEditPageComponent implements OnInit {

  constructor(public pageService:CourseEditPageService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.pageService.getCourseById(this.activatedRoute.snapshot.params['id'])
  }

}
