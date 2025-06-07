import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit, OnDestroy {


    sideNavOpened = true;
      name: string | undefined;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  private readonly mediaWatcher: Subscription | undefined;
  constructor(private auth:AuthService,private _router:Router) {
  }
  ngOnInit() { 

    this.getMe();
  }

  ngOnDestroy(): void {
    // this.mediaWatcher.unsubscribe();
  }


  getMe(){
    this.auth.isAuthenticated().subscribe({
     next: data =>{
      console.log("me",data);
     }
    })
  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
   
        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {

          target = target.find((page: { path: string | any[]; }) => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,

            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });
          
          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log("menu",this.breadcrumbList);
      }
    });
  }

}
