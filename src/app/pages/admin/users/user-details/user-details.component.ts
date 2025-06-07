import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../../../services/core/core.service';
import { UserService } from '../../../../services/user/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{


  @Input() data_Id:any;  
  @Output() data_emitter: EventEmitter<any> = new EventEmitter<any>();
  userDate: any;
  permissionsList: any[]=[];
  permissionsFilter: any[]=[];
    constructor(private dialog: MatDialog,
       @Inject(MAT_DIALOG_DATA) public dat: any,
      public dialogRef: MatDialogRef<UserDetailsComponent>,private _coreService: CoreService,private userService:UserService) {
    }
    
  ngOnInit(): void {
    this.getUserDetails();
  }


    getUserDetails(){
     if(this.dat){
       this.userService.getUserById(this.dat.id).subscribe({
     next: data =>{
      console.log("users détails",data);
      this.userDate=data;
        
     }
    })
       this.userService.getUserPermissions(this.dat.id).subscribe({
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
     }
  }

}
