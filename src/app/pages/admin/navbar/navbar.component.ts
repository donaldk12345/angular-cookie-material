import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit{

  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private readonly router: Router,private dialog: MatDialog) {}

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

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/auth']);
  }


    confirLogout(){
    this.dialog
      .open(DialogConfirmationComponent, {
        data: 'Vous allez être déconnecté ?'
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onLoggedout();
        } else {
        
        }
      });
  }

}
