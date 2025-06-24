import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ProfileComponent } from './profile/profile.component';
import { RolesComponent } from './roles/roles.component';
import { authGuard } from '../../guards/auth.guard';
import { UserAuthGuard } from '../../guards/user-auth.guard';

const routes: Routes = [
  {
     path: 'admin',
         canActivate: [UserAuthGuard],
     component: AdminComponent, children:[
         { path: 'dashboard', component: DashboardComponent,canActivate: [UserAuthGuard]},
         { path: 'users', component: UsersComponent,canActivate: [UserAuthGuard]},
         {path: 'profile',component:ProfileComponent},
        { path: 'blank', component: BlankpageComponent},
          {path: 'user/:id',component:EditUsersComponent},
        { path: 'personnels', component: PersonnelsComponent},
        {path: 'roles',component:RolesComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
