import { Pipe, PipeTransform } from "@angular/core";
import { City } from "src/app/services/data.service";

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform{
  transform(values: City[], args: string): City[] {

    let result: City[] = [];

    for(const value of values){
      if(value.name.indexOf(args) > -1){
        result = [...result, value];
      }
    }
    return result;
  }

}
