import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent implements OnInit {
  @Input('is-Fav') isFav: boolean = true;
  @Output('change') change = new EventEmitter();

  constructor() {}

  onClick() {
    this.isFav = !this.isFav;
    this.change.emit({ newValue: this.isFav });
  }

  ngOnInit(): void {}
}
