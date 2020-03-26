import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Wash and dry dishes', 'Complete LaunchCode prep work', 'Stay home during pandemic'];

   constructor() { }

   ngOnInit() {
   }

}