import { Component, Inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreService } from '../../../../services/core/core.service';
import { UserService } from '../../../../services/user/user.service';
import { MyErrorStateMatcher } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-users-input-add',
  templateUrl: './users-input-add.component.html',
  styleUrl: './users-input-add.component.scss'
})
export class UsersInputAddComponent implements OnInit{


  userForm: FormGroup = Object.create(null);
form: any;
  hide = true;
title:any;
formControl: any;
  toppingList: string[] = ['CREATE', 'UPDATE', 'READ', 'DELETE'];

  role: string[] = [
    'USER',
    'ADMIN',
    'MANAGER'
  ];
  enablevalue:any []= [];
  expiredvalue: any []= [];
  constructor(private dialog: MatDialog,private snack: MatSnackBar,  private fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UsersInputAddComponent>,private _coreService: CoreService,private userService:UserService) {
  }
  ngOnInit(): void {
   this.userForm = new FormGroup({
   'username': new FormControl('',[Validators.required]),
   'email' : new FormControl('', [Validators.required]),
   'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
   'role': new FormControl('',[Validators.required]),
   'expiredate': new FormControl(''),
   'isEnabled': new FormControl('',[Validators.required]),
   'isexpired': new FormControl('',[Validators.required]),
   'gender': new FormControl('',Validators.required),
   'permissions': new FormControl('',[Validators.required])

})
 this.userForm.patchValue(this.data);
this.getEnable();
this.getExpired();
  }
  matcher = new MyErrorStateMatcher();

   public checkError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }



  get passwordInput() { return this.userForm.get('password'); }  

   onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.userService.updateUser(this.data.id, this.userForm.value)
          .subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('User updated!');
                  this.title="Modifier un utilisateur";
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.userService.addUser(this.userForm.value).subscribe({
          next: (val: any) => {
            //this._coreService.openSnackBar('User added successfully');
         
                 this.title="Ajouter un utilisateur";
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }


      getEnable(){
  
      this.enablevalue = [
        { val: 'ACTIVER', 'ids': true },
        { val :  'DESACTIVER', 'ids':false}
       ]
  
    }

        getExpired(){
  
      this.expiredvalue = [
        { val: 'OUI', 'ids': true },
        { val :  'NON', 'ids':false}
       ]
  
    }

    get username(){
    return this.userForm.controls['username'];
 }
 get password(){
   return this.userForm.controls['password'];
}

    get email(){
    return this.userForm.controls['email'];
 }
 get role1(){
   return this.userForm.controls['role'];

}

 get gender(){
   return this.userForm.controls['gender'];
}
 get permissions(){
   return this.userForm.controls['permissions'];

}

 get isEnabled(){
   return this.userForm.controls['isEnabled'];

}

 get isexpired(){
   return this.userForm.controls['isexpired'];

}
}