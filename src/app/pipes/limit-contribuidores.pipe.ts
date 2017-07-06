import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitContribuidores'
})
export class LimitContribuidoresPipe implements PipeTransform {

  transform(items: Array<any>, img: String): Array<any> {

    let lista = items.slice(0,3);

    return lista.filter(x => x.img === img);
  }

}
