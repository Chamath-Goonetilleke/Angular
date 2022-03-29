import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input('isActive') isActive: boolean = false;
  @Input('likeCount') likeCount: number = 0;

  onClick() {
    this.likeCount += (this.isActive) ? -1 : 1;
    this.isActive = !(this.isActive);
  }

  constructor() {}

  ngOnInit(): void {}
}
