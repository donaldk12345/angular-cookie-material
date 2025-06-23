import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../../../services/core/core.service';
import { UserService } from '../../../../services/user/user.service';
import { Observable } from 'rxjs';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-user-import-data',
  templateUrl: './user-import-data.component.html',
  styleUrl: './user-import-data.component.scss'
})
export class UserImportDataComponent implements OnInit{

    fileName = 'Select File';
  fileInfos?: Observable<any>;
    currentFile?: File;
    loading:boolean= false;
    isDisable:boolean = false;

    permissionsFilter: any[]=[];
      constructor(private dialog: MatDialog,
         @Inject(MAT_DIALOG_DATA) public dat: any,
        public dialogRef: MatDialogRef<UserImportDataComponent>,private _coreService: CoreService,private userService:UserService,private toastService: ToastService) {
      }

  ngOnInit(): void {
 
  }



    selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
      var result = this.fileName.split(".").pop();
      if(result=="xlsx"){
        this.isDisable=false;
      }else{
        this.isDisable=true;
      }
      console.log('file',this.fileName);
    } else {
      this.fileName = 'Select File';
    }
  }

     upload(){
      this.loading=true;
      this.isDisable=false
    if (this.currentFile) {
          const formData = new FormData();
          formData.append('file', this.currentFile,this.currentFile.name);
          this.userService.importUserData(formData).subscribe({
            next: data => {
            this.toastService.success("Utilisateurs importés avec succès.");
                  this.loading=false;
            },  
            error: (err: any) => {
              console.error(err);
                    this.loading=false;
                 this.toastService.error(err);
            },
          })
     
    }
  }

}
