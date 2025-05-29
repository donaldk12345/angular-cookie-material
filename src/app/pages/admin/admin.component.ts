import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit, OnDestroy {


    sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  private readonly mediaWatcher: Subscription | undefined;
  constructor() {
    // this.mediaWatcher = media.media$.subscribe((change: any) => {
    //   if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
    //     if (this.sideNavOpened) {
    //       this.sideNavOpened = false;
    //     }
    //     this.sideNavMode = 'over';
    //   } else {
    //     this.sideNavOpened = true;
    //     this.sideNavMode = 'side';
    //   }
    //   if (change.mqAlias === 'xs') {
    //     this.toolBarHeight = 56;
    //   } else {
    //     this.toolBarHeight = 64;
    //   }
    // });
  }
  ngOnInit() { }

  ngOnDestroy(): void {
    // this.mediaWatcher.unsubscribe();
  }

}
