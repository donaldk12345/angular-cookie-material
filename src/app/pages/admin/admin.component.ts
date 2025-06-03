import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

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
  constructor(private auth:AuthService) {
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

}
