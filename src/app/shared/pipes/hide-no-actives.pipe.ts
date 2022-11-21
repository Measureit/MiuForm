import { Pipe, PipeTransform } from '@angular/core';
import { DbModel } from 'src/app/core/models';

@Pipe({
  name: 'hideNoActives',
})
export class HideNoActivesPipe implements PipeTransform {
  transform<T extends DbModel>(val: T[], hide: boolean): T[] {
    return hide ? val.filter(x => x.isActive === true) : val;
  }
}
