import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfProducts:any[] , searchWord:string): any[] {
    return arrayOfProducts.filter( (item)=> item.title.includes(searchWord) );
  }

}
