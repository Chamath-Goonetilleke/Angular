import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css'],
})
export class FormExerciseComponent implements OnInit {
  categories = [
    {id:1, name:'Development'},
    {id:2, name:'Testing'}
  ]

  constructor() {}

  ngOnInit(): void {}
}
