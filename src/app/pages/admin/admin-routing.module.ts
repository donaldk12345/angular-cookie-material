import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { PersonnelsComponent } from './personnels/personnels.component';

const routes: Routes = [
  {
     path: 'admin',
     component: AdminComponent, children:[
         { path: 'dashboard', component: DashboardComponent},
         { path: 'users', component: UsersComponent},
        { path: 'blank', component: BlankpageComponent},
        { path: 'personnels', component: PersonnelsComponent},
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
