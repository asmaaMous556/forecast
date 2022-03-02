import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(dt:number) {
    return  moment.unix(dt).format('MM/DD/YYYY hh:mm')
  }

}
