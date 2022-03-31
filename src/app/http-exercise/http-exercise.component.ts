import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer, combineLatest, map, switchMap } from 'rxjs';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['./http-exercise.component.css'],
})
export class HttpExerciseComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
  ) {}

  ngOnInit() {
    let obs = combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          return this.service.getAll();
        })
      )
      .subscribe((followers) => {
        this.followers = followers;
      });

    // this.route.paramMap.subscribe((params) => {
    //   let id= params.get('id')
    // });                                                      //Above is how to subscribe these two at once.

    // this.route.queryParamMap.subscribe((params) => {

    // })

    // let id = this.route.snapshot.queryParamMap.get('id');     //similer to .subscribe
  }
}
