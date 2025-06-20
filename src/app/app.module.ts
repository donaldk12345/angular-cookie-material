import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminModule } from './pages/admin/admin.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { httpInterceptorProviders } from './interceptor/auth.interceptor';
import { MatCardModule } from '@angular/material/card';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
        AngularToastifyModule,
    MatSelectModule,
    AdminModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    httpInterceptorProviders
  ],
})
export class AppModule {}
