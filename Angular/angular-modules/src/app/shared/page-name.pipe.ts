import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'pageName'
})
export class PageNamePipe implements PipeTransform {
  transform(value: string): string {
    return value + '!!!'
  }
}
