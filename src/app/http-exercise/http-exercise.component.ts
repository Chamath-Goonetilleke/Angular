import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['./http-exercise.component.css']
})
export class HttpExerciseComponent implements OnInit {

  followers:any;

  constructor(private service:FollowersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (response) => { 
        this.followers = response;
      }

    )
  }

}
