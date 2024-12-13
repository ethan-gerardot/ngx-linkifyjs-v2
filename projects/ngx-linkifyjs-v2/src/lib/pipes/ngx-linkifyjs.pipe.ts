import {Pipe, PipeTransform} from '@angular/core';
import {NgxLinkifyOptions} from '../interfaces/ngx-linkifyjs.interface';
import linkifyStr from 'linkify-string';

@Pipe({
    name: 'linkify',
    standalone: false
})
export class NgxLinkifyjsPipe implements PipeTransform {

  transform(value: string, options?: NgxLinkifyOptions): string {
    return value ? linkifyStr(value, options) : value;
  }

}
