import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  links = ['https://www.reddit.com/r/Breadit/', 'https://learn.unity.com/', 'https://www.launchcode.org/', 'https://www.google.com/'];

  constructor() { }

  ngOnInit() {
  }

}
