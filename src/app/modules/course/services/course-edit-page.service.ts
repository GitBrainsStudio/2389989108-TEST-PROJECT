import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "src/app/models/course.model";
import { DataService } from "src/app/services/data/data.service";

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
            console.log('course updated')
            /* this.dataService.updateCourse(course?.id, course);
            console.log('course updated') */
        } 
    }

    course:Course | undefined = undefined
}