import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-course-all-page',
  templateUrl: './course-all-page.component.html',
  styleUrls: ['./course-all-page.component.scss']
})
export class CourseAllPageComponent implements OnInit {

  constructor(
    private readonly dataService:DataService
  ) {}
  courses$ = this.dataService.courses$;

  ngOnInit(): void {
  }

}
