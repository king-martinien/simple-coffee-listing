import {Component, Input} from '@angular/core';
import {Coffee} from "../../interfaces/coffee";
import {CoffeeComponent} from "../coffee/coffee.component";
import {CoffeeListSkeletonComponent} from "../coffee-list-skeleton/coffee-list-skeleton.component";

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [
    CoffeeComponent,
    CoffeeListSkeletonComponent
  ],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent {
  @Input({
    transform: (value: Coffee[] | null): Coffee[] => {
      return value ?? []
    }
  }) coffeeList!: Coffee[];
}
