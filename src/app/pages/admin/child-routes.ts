import { DashboardComponent } from "./dashboard/dashboard.component";

export const childRoutes = [
  {
    path: 'dashboard',
     component:DashboardComponent,
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
    {
    path: 'users',
     component:DashboardComponent,
    data: { icon: 'persons', text: 'Users' }
  }
];
