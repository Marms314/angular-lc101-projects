import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://media0.giphy.com/media/VvXg0yjJQgfEQ/giphy.gif';
  image2 = 'https://i.imgur.com/23ZACYm.gif';
  image3 = 'https://media0.giphy.com/media/qgbM75zkPIPDO/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}