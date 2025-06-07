import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { UserService } from '../../../../services/user/user.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent implements OnInit{


  userForm: FormGroup = Object.create(null);
  expiredvalue: any[]=[];
  enablevalue:  any[]=[];
  permissionsFilter:any[]=[];
  permissionsList:  any[]=[];
    toppingList: string[] = ['USER_CREATE', 'USER_UPDATE', 'USER_READ', 'USER_DELETE'];
  hide = true;
  role: string[] = [
    'USER',
    'ADMIN',
    'MANAGER'
  ];
  Id: any;

    constructor(private userService:UserService,private toastService: ToastService,private route: ActivatedRoute,private router:Router,) {
    
    }

  ngOnInit(): void {
   this.userForm = new FormGroup({
   'username': new FormControl('',[Validators.required]),
   'email' : new FormControl(''),
   'password': new FormControl(''),
   'role': new FormControl('',[Validators.required]),
   'expiredate': new FormControl(''),
   'isEnabled': new FormControl('',[Validators.required]),
   'isexpired': new FormControl('',[Validators.required]),
   'gender': new FormControl('',[Validators.required]),
   'permissions': new FormControl([])

})

this.getEnable();
this.getExpired();
    this.getUser();

  }



      getUser() {

            this.route.params.subscribe(params => {
      this.Id = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.Id);
    });
       
        var id = this.Id;
        console.log("convert id",id);
               this.userService.getUserPermissions(this.Id).subscribe({
     next: data =>{
      this.permissionsList = data;

      this.permissionsList.forEach((elt:any)=>{
        this.permissionsFilter.push(elt['operation']);
        console.log("elemnt",elt['operation']);
      })
        console.log("elemnt filter",this.permissionsFilter);
      //console.log("permissions",this.permissionsList);
     }
    })

                this.userService.getUserById(this.Id).subscribe({
       next: data =>{

        console.log("data",data);
            let dt = formatDate(data?.expiredDate, 'yyyy-MM-dd','en_US');
            this.userForm.get('username')?.setValue(data?.username);
            this.userForm.get('email')?.setValue(data?.email);
            this.userForm.get('role')?.setValue(data?.role);
            this.userForm.get('expiredate')?.setValue(dt);
            this.userForm.get('isEnabled')?.setValue(data?.statut);
            this.userForm.get('isexpired')?.setValue(data?.expired);
            this.userForm.get('gender')?.setValue(data?.gender);
            this.userForm.get('permissions')?.setValue(this.permissionsFilter);
     
       }
      })




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

    onFormSubmitUpdate() {
throw new Error('Method not implemented.');
}

 updateUser(){

    this.userService.updateUser(this.Id, this.userForm.value).subscribe({
      next: data => {
        console.log("data",data);
          this.toastService.success("Utilisateur Modifier avec succès.");
          this.router.navigate(['/admin/users']);
      },
      error: error => {

          console.log('There was an error!', error);
          this.toastService.error(error);
        
      }
  })

  }


    get username(){
    return this.userForm.controls['username'];
 }

 get role1(){
   return this.userForm.controls['role'];

}

    get expiredate(){
    return this.userForm.controls['expiredate'];
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
