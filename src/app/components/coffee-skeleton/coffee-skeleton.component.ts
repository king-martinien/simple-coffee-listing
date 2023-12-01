import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-coffee-skeleton',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './coffee-skeleton.component.html',
  styleUrl: './coffee-skeleton.component.scss'
})
export class CoffeeSkeletonComponent {
  coffeePlaceholderImageUrl = "/assets/images/coffee-placeholder.png";
}
