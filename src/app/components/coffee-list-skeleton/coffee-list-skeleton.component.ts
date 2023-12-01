import {Component, Input} from '@angular/core';
import {CoffeeSkeletonComponent} from "../coffee-skeleton/coffee-skeleton.component";

@Component({
  selector: 'app-coffee-list-skeleton',
  standalone: true,
  imports: [
    CoffeeSkeletonComponent
  ],
  templateUrl: './coffee-list-skeleton.component.html',
  styleUrl: './coffee-list-skeleton.component.scss'
})
export class CoffeeListSkeletonComponent {
  @Input() size = 6;

  get arraySize() {
    return new Array(this.size);
  }
}
