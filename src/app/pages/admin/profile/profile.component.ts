import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { ToastService } from 'angular-toastify';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{


updateUserPasswordForm:FormGroup = Object.create(null);

    hide = true;
        hide2 = true;

  user:any;

  constructor(private userService:UserService,private toastService: ToastService,private auth:AuthService) {
    }
  ngOnInit(): void { 

        this.updateUserPasswordForm = new FormGroup({
      'currentPassword': new FormControl('',[Validators.required,Validators.minLength(4)]),
      'newPassword': new FormControl('',[Validators.required, Validators.minLength(4)])
    });

    this.getMe();

  }

  onUpdateUserPasswordSubmit() {

    
    this.userService.updateMePassword(this.updateUserPasswordForm.value).subscribe({
      next: data => {
        console.log("data",data);
          this.toastService.success("Mot de passe Modifier avec succès.");
          this.updateUserPasswordForm.reset();
      },
      error: error => {

          console.log('There was an error!', error);
          this.toastService.error(error);
        
      }
  })

}


  getMe(){
    this.auth.isAuthenticated().subscribe({
     next: data =>{

      this.user=data;
      console.log("ici",data);
     }
    })
  }


    get currentPassword(){
    return this.updateUserPasswordForm.controls['currentPassword'];
  }
  get newPassword(){
    return this.updateUserPasswordForm.controls['newPassword'];
  }

}
