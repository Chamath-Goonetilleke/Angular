import { Component } from '@angular/core';

interface FavChangedEventArgs{
  newValue: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'Title',
    isFav: true,
  };
  like = {
    isLiked: false,
    likeCount:10
    
  }
  onFavChanged(eventArge: FavChangedEventArgs) {
    console.log('Favorite Changed', eventArge);
  }
}
