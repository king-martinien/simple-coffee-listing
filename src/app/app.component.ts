import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {CoffeeService} from "./services/coofee/coffee.service";
import {Observable} from "rxjs";
import {Coffee} from "./interfaces/coffee";
import {CoffeeListComponent} from "./components/coffee-list/coffee-list.component";
import {FilterPipe} from "./pipes/filter-coffee/filter.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, CoffeeListComponent, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  headerImageUrl = "assets/images/bg-cafe.jpg";
  availableTabActive = false;
  coffeeList$!: Observable<Coffee[]>;
  private readonly _coffeeService = inject(CoffeeService);

  ngOnInit() {
    this.coffeeList$ = this._coffeeService.getCoffeeList();
  }

  toggleTab() {
    this.availableTabActive = !this.availableTabActive;
  }


}
