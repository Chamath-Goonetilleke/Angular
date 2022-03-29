import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  title = 'List of courses';
  name = 'chamath';
  courses;
  isActive = false;
  text='added 2 packages, removed 1 package, and audited 907 packages in 8s 96 packages are looking for funding run `npm fund` for details'

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getName() {
    return this.name;
  }
  onSave($event: any) {
    $event.stopPropagation();
    console.log('Button clicked', $event);
  }
  onDivClick() {
    console.log('div clicked');
  }
  onKeyUp(email: any) {
    console.log(email);
  }
  onKeyUp2() {
    console.log(this.name);
  }

  ngOnInit(): void {}
}
