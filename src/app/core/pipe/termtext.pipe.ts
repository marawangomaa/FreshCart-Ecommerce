import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext',
  standalone: true
})
export class TermtextPipe implements PipeTransform {

  transform(text:string , limt:number): string {
    return text.split(" ", limt).join(" ");
  }

}
