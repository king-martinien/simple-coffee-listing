import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Coffee} from "../../interfaces/coffee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private readonly apiUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);

  /**
   * Get coffee list
   * @returns {Observable<Coffee[]>} - an observable of coffee list
   */
  getCoffeeList(): Observable<Coffee[]> {
    return this._http.get<Coffee[]>(this.apiUrl);
  }

}
