import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Injectable()
export class SidenavService {
  public sideNavState$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {//private media: MediaObserver) {
    //todo: an
    // media.media$.subscribe((change: MediaChange) => {
    //   if (change.mqAlias === 'xs') {
    //     this.sideNavState$.next(false);
    //   }
    //   else{
    //     this.sideNavState$.next(true);
    //   }
    // });

    // media.asObservable()
    // .subscribe((changes: MediaChange[]) => {
    //     if (changes.some(x => x.mqAlias === 'xs')) {
    //       this.sideNavState$.next(false);
    //     }
    //     else{
    //       this.sideNavState$.next(true);
    //     }
    //   });
   }

}
