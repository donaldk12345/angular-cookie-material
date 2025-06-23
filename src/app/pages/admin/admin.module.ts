import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { PersonnelsComponent } from './personnels/personnels.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { UsersInputAddComponent } from './users/users-input-add/users-input-add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserPasswordComponent } from './users/user-password/user-password.component';
import { ProfileComponent } from './profile/profile.component';
import { RolesComponent } from './roles/roles.component';
import { UserImportDataComponent } from './users/user-import-data/user-import-data.component';
@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UsersComponent,
    BlankpageComponent,
    UsersInputAddComponent,
    PersonnelsComponent,
    ConfirmationDialogComponent,
    DialogConfirmationComponent,
    EditUsersComponent,
    UserDetailsComponent,
    UserPasswordComponent,
    ProfileComponent,
    RolesComponent,
    UserImportDataComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
    MatTabsModule,
     AngularToastifyModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
   MatProgressBarModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DashboardModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD HH:mm:ss"
  },
  display: {
    dateInput: "YYYY-MM-DD HH:mm:ss",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD HH:mm:ss",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
