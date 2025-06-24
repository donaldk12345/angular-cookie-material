import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit{

  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private readonly router: Router,private dialog: MatDialog,private auth:AuthService) {}

  ngOnInit() {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

      ConfirmLogoutDialog() {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
        data:{
          message: 'Vous allez être déconnecté ?',
          buttonText: {
            ok: 'Oui',
            cancel: 'Nom'
          }
        }
      });
    }

     logout() {
    this.auth.logout().subscribe({
      next: () => {
             window.sessionStorage.clear();
        this.router.navigate(['/auth']);
           /*    setInterval(() => {
               location.reload();
      }, 1000);*/
        
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onLoggedout() {
    console.log("Hi !");
     window.sessionStorage.clear();
    this.auth.logout();
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/auth']);
  }


    confirLogout(){
    this.dialog.open(DialogConfirmationComponent, {
        data: 'Vous allez être déconnecté ?'
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.logout();
        } else {
        
        }
      });
  }

}
