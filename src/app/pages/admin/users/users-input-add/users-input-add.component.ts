import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreService } from '../../../../services/core/core.service';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-users-input-add',
  templateUrl: './users-input-add.component.html',
  styleUrl: './users-input-add.component.scss'
})
export class UsersInputAddComponent implements OnInit{


  userForm: FormGroup = Object.create(null);
form: any;
data: any;
formControl: any;

  role: string[] = [
    'USER',
    'ADMIN'
  ];
  constructor(private dialog: MatDialog,private snack: MatSnackBar,  private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<UsersInputAddComponent>,private _coreService: CoreService,private userService:UserService) {
  }
  ngOnInit(): void {
   this.userForm = new FormGroup({
   'username': new FormControl('',[Validators.required]),
   'email' : new FormControl('', [Validators.required]),
   'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
   'role': new FormControl('',[Validators.required]),
   'expiredate': new FormControl('',[Validators.required]),
   'gender': new FormControl('',Validators.required),
   'lastname': new FormControl('',[Validators.required]),
   'premissions': new FormControl('',[Validators.required])

})
  }


   onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.userService.updateUser(this.data.id, this.userForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('User updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.userService.addUser(this.userForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('User added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}
