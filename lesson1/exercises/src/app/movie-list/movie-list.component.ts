import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Marriage Story', 'The Grudge', 'Jurassic Park', 'District 9'];

   constructor() { }

   ngOnInit() {
   }

}
