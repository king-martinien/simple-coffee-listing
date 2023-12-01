import {Pipe, PipeTransform} from '@angular/core';
import {Coffee} from "../../interfaces/coffee";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(coffeeList: Coffee[] | null, ...args: string[]): Coffee[] {
    if (!coffeeList) return [];
    args.forEach(arg => {
      if (Object.keys(coffeeList![0]).includes(arg)) {
        if (typeof coffeeList![0][arg as keyof Coffee] === 'boolean') {
          coffeeList = coffeeList!.filter(coffee => coffee[arg as keyof Coffee] === true);
        }
      }
    })
    return coffeeList!;
  }

}
