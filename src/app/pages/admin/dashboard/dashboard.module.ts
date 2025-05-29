import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatsComponent } from './stats/stats.component';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
     ReactiveFormsModule,
    DashboardRoutingModule
  ],
  exports:[
    StatsComponent
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DashboardModule { }
