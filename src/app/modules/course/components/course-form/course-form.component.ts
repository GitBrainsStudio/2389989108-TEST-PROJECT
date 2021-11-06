import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContentsItemType } from 'src/app/models/contents-item-type.enum';
import { ContentsItem } from 'src/app/models/contents-item.model';
import { Course } from 'src/app/models/course.model';
import { DurationUnit } from 'src/app/models/duration-unit.enum';
import { Duration } from 'src/app/models/duration.model';
import { PlanAdvantage } from 'src/app/models/plan-advantage.model';
import { Plan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {


  @Input() course:Course | undefined
  @Output() courseFormUpdated = new EventEmitter<Course>();

  modelChanged()
  {
      this.courseFormUpdated.next(this.course)
  }

  contentsItemTypes = Object.values(ContentsItemType);
  durationUnits = Object.values(DurationUnit);

  newContent:ContentsItem = { name : '', type: ContentsItemType.lesson }
  newDuration:Duration = { value: 0, unit: DurationUnit.hour}

  newPlan:Plan = { name : '', price : 0, advantages : [], newAdvantage : { available: false, title: '' }  }


  addContentsItem()
  {
    this.course?.contents.push(this.newContent)

    this.newContent = { name : '', type: ContentsItemType.lesson }
  }

  removeContentsItem(index:number)
  {
    this.course?.contents.splice(index, 1);
  }

  addAdvantageInPlan(plan:Plan)
  {
    if (plan.newAdvantage)
    {
      plan.advantages?.push(plan.newAdvantage)
      plan.newAdvantage = { available: false, title: '' }
    }
    this.modelChanged()
  }

  addAdvantageInNewPlan(plan:Plan)
  {
    if (plan.newAdvantage)
    {
      this.newPlan.advantages?.push(plan.newAdvantage)
      this.newPlan.newAdvantage = { available: false, title: '' }
    }
    this.modelChanged()
  }
  

  removeAdvantageFromPlan(plan:Plan, advantageIndex:number)
  {
    plan.advantages?.splice(advantageIndex, 1)
    this.modelChanged()
  }


  removePlane(planIndex:number)
  {
    this.course?.plans.splice(planIndex, 1)
    this.modelChanged()
  }

  addPlane()
  {
    this.course?.plans.push(this.newPlan)
    this.newPlan = { name : '', price : 0, advantages : [], newAdvantage : { available: false, title: '' }  }
    this.modelChanged()
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.valueOf() === c2.valueOf() : c1 === c2;
  }
}
