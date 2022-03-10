import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if (value.length===0){
      return value
    }
    return value.filter(function(search){
      return search.Version.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1
    });
  }

}
