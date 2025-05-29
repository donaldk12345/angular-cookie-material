import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../child-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  showMenu = false;
  routes = childRoutes;
  constructor() {}

  ngOnInit() {}
}
