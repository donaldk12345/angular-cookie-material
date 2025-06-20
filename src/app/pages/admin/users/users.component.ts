import { AfterViewInit, Component, inject, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
  MatSnackBar
} from "@angular/material/snack-bar";
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersInputAddComponent } from './users-input-add/users-input-add.component';
import { UserService } from '../../../services/user/user.service';
import { ToastService } from 'angular-toastify';
import { formatDate } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPasswordComponent } from './user-password/user-password.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['username', 'role','email','statut','date','expiredDate','expired','actions'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    dataSource!: MatTableDataSource<any>;
  totalUsers:any;
  pageSize = 10;
  pageIndex = 0;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator | undefined;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  userForm: FormGroup = Object.create(null);
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  loading = false;
  users:any[]=[];
addDialogDisplay: boolean =false;
  constructor(private dialog: MatDialog,private snack: MatSnackBar,private userService:UserService,private _toastService: ToastService) {
   
  }
  ngOnInit(): void {
   this.userForm = new FormGroup({
   'username': new FormControl('',[Validators.required]),
   'email' : new FormControl('', [Validators.required]),
   'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
   'role': new FormControl('',[Validators.required]),
   'expiredate': new FormControl('',[Validators.required]),
   'isEnabled': new FormControl('',[Validators.required]),
   'isexpired': new FormControl('',[Validators.required]),
   'gender': new FormControl('',Validators.required),
   'permissions': new FormControl('',[Validators.required])

})

this.getUserList();
  }
  ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    
  }

    openAddEditEmpForm() {
    const dialogRef = this.dialog.open(UsersInputAddComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this._toastService.success('utilisateur créé avec succès');
          this.getUserList();
        }
      },
    });
  }

    openUSerDetailsDialog(data:any) {
     const dialogRef = this.dialog.open(UserDetailsComponent, {
      data,
       height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
      this.getUserList();
        }
      },
    });
  }


      openUpdatePasswordDialog(data:any) {
     const dialogRef = this.dialog.open(UserPasswordComponent, {
      data,
        height: 'auto',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {

        }
      },
    });
  }

    openEditForm(data: any) {
          console.log("edit",data);
              this.userService.getUserById(data).subscribe({
     next: data =>{
          let dt = formatDate(data?.expiredDate, 'yyyy-MM-dd','en_US');
          this.userForm.get('username')?.setValue(data?.username);
          this.userForm.get('email')?.setValue(data?.email);
          this.userForm.get('role')?.setValue(data?.role);
          this.userForm.get('expiredate')?.setValue(dt);
          this.userForm.get('isEnabled')?.setValue(data?.statut);
          this.userForm.get('isexpired')?.setValue(data?.expired);
          this.userForm.get('gender')?.setValue(data?.gender);
          this.userForm.get('permissions')?.setValue(data?.permissions);
       this.users=data;
      console.log("user One",this.users);
     }
    })
    const dialogRef = this.dialog.open(UsersInputAddComponent, {
      data
    });


    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList();
        }
      },
    });
  }


    applyFilter(event: Event) {
      this.loading=true;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
       this.loading=false;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      this.loading=false;
    }
  }

    getUserList(){
      this.loading=true;
       this.userService.getUsers(this.pageIndex, this.pageSize).subscribe({
     next: data =>{
      this.users=data.content;
      this.totalUsers = data.totalElements;
          this.loading=false;
       this.dataSource = new MatTableDataSource(data.content);
      console.log("users",this.dataSource);
     }
    })

    }

      onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUserList();
  }
    
    getUserById(id:number){
       this.userService.getUserById(id).subscribe({
     next: data =>{
       this.users=data;
      console.log("user One",this.users);
     }
    })

    }

    openAddDialog() {
    const dialogRef = this.dialog.open(UsersInputAddComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
      }
    });
  }

   readonly AddDialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(UsersComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    }

    DelateUserDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        this.snack.dismiss();
        this.snack.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
          
        });
      }
    });
  }

    async refresh(): Promise<void> {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.loading = false;
  }

}

export interface PeriodicElement {
  name: string;
  weight: number;
  sexe:string;
  email:string;
  statut:boolean;
  phone:number;
  symbol: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 1.0079,sexe:'Male',email:'twhodcoat0@infoseek.co.jp',statut:true,phone:5356713266, symbol: 'H'},
  {name: 'Helium', weight: 4.0026,sexe:'Female',email:'tgerant1@infoseek.co.jp',statut:false,phone:9582094923, symbol: 'He'},
  {name: 'Lithium', weight: 6.941,sexe:'Male',email:'rvaun2@intel.com',statut:true,phone:1584700405, symbol: 'Li'},
  {name: 'Beryllium', weight: 9.0122,sexe:'Female',email:'mandreone3@nymag.com',statut:true,phone:5315494003, symbol: 'Be'},
  {name: 'Boron', weight: 10.811,sexe:'Male',email:'hbeatey4@networksolutions.com',statut:false,phone:2329086014, symbol: 'B'},
  {name: 'Carbon', weight: 12.0107,sexe:'Female',email:'cpauncefoot5@harvard.edu',statut:true,phone:1217104320, symbol: 'C'},
  { name: 'Nitrogen', weight: 14.0067,sexe:'Female',email:'cthirlwell6@prweb.com',statut:false,phone:2345713913, symbol: 'N'},
  {name: 'Oxygen', weight: 15.9994,sexe:'Male',email:'medginton7@chicagotribune.com',statut:true,phone:3228551297, symbol: 'O'},
  {name: 'Fluorine', weight: 18.9984,sexe:'Male',email:'ngodspeede8@fc2.com,statut:true',statut:false,phone:1655257255, symbol: 'F'},
  {name: 'Neon', weight: 20.1797,sexe:'Male',email:'hthornley9@canalblog.com',statut:false,phone:4021219208, symbol: 'Ne'},
  {name: 'Sodium', weight: 22.9897,sexe:'Female',email:'lhastea@mtv.com',statut:true,phone:9993336661, symbol: 'Na'},
  {name: 'Magnesium', weight: 24.305,sexe:'Male',email:'ehickfordb@163.com',statut:false,phone:5266301563, symbol: 'Mg'},
  {name: 'Aluminum', weight: 26.9815,sexe:'Female',email:'qgiacominic@edublogs.org',statut:true,phone:1473725997, symbol: 'Al'},
  {name: 'Silicon', weight: 28.0855,sexe:'Female',email:'hsaytond@homestead.com',statut:true,phone:1337591588, symbol: 'Si'},
  {name: 'Phosphorus', weight: 30.9738,sexe:'Female',email:'tneasamf@uol.com.br',statut:false,phone:1142764847, symbol: 'P'},
  {name: 'Sulfur', weight: 32.065,sexe:'Female',email:'amacguireg@myspace.com',statut:false,phone:9211627069, symbol: 'S'},
  {name: 'Chlorine', weight: 35.453,sexe:'Male',email:'mbernoth@phoca.cz',statut:true,phone:7719383672, symbol: 'Cl'},
  {name: 'Argon', weight: 39.948,sexe:'Female',email:'lmacmasteri@imdb.com',statut:false,phone:3619927951, symbol: 'Ar'},
  {name: 'Potassium', weight: 39.0983,sexe:'Female',email:'cveldenj@google.ca',statut:false,phone:5309651367, symbol: 'K'},
  {name: 'Calcium', weight: 40.078,sexe:'Female',email:'lmacmasteri@imdb.com',statut:true,phone:3619927951, symbol: 'Ca'},
];*/
