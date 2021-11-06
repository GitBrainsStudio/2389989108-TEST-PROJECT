import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from '../../../models/course.model'
import { DataService } from '../../../services/data/data.service';

@Injectable()
export class CourseEditPageService
{

    constructor(
        private dataService:DataService,
        private router:Router
        ) 
    { 
        
    }

    getCourseById(id:string)
    {
        this.dataService.courses$
        .subscribe(courses => 
            {
                let findCourse = courses.filter(c => c.id == id)[0]
                
                if (findCourse)
                {
                    this.course = findCourse

                }
                    
                else 
                {
                    this.router.navigate(['/'])
                }
            })
    }

    courseFormUpdated(course:Course)
    {
        if (course.id)
        {
            this.dataService.updateCourse(course?.id, course).then((v) => 'Course updated & saved!')
        } 
    }

    course:Course | undefined = undefined
}