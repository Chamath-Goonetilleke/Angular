import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  courses = ['course1', 'course2'];
  viewMode = 'map';
  course: any;
  isFav = true;
  canSave = false;
  loadCourses() {
    this.course = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }
  onClick() {
    this.isFav = !this.isFav;
    this.canSave = !this.canSave;
  }

  constructor() {}

  ngOnInit(): void {}
}
