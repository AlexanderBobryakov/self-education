import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform{

  transform(value: number, pow: number = 2): number {
    return value * pow;
  }

}
