import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreService } from '../../../../services/core/core.service';
import { UserService } from '../../../../services/user/user.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrl: './user-password.component.scss'
})
export class UserPasswordComponent implements OnInit{

    hide = true;

  updatePasswordForm: FormGroup = Object.create(null);
    constructor(private dialog: MatDialog,private snack: MatSnackBar,  private fb: FormBuilder,
       @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<UserPasswordComponent>,private _coreService: CoreService,private userService:UserService,private toastService: ToastService) {
    }

  ngOnInit(): void {

        this.updatePasswordForm = new FormGroup({
      'password': new FormControl('',[Validators.required, Validators.minLength(4)])
  })
    
  }



     onUpdatePasswordSubmit() {
    if (this.updatePasswordForm.valid) {
      if (this.data) {
        this.userService.updateUserPassword(this.data.id, this.updatePasswordForm.value)
          .subscribe({
            next: (val: any) => {
             this.toastService.success("Mot de passe Modifier avec succès.");
              this.dialogRef.close(true);
              this.updatePasswordForm.reset();
            },
            error: (err: any) => {
              console.error(err);
                 this.toastService.error(err);
            },
          });
      } 
    }
  }

   get password(){
   return this.updatePasswordForm.controls['password'];
}

}
