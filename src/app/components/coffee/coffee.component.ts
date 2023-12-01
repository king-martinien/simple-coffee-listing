import {Component, Input} from '@angular/core';
import {Coffee} from "../../interfaces/coffee";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss'
})
export class CoffeeComponent {
  @Input() coffee!: Coffee;
}
