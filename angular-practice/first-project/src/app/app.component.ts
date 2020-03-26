import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my super awesome first.....Angular Page!!!!';
  name = 'Mary A';
  itemList = ['Tacos', 'Burritos', 'Soy Sauce', 'Eggs'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
  };
}
