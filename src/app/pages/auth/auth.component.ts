import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _toastService: ToastService
  ) {}

  register: boolean = false;

  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  signUp(e: Event) {
    e.preventDefault();

    this.authService.signUp(this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.register = false;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  signIn(e: Event) {
    e.preventDefault();

    this.authService.signIn(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
         this._toastService.success('Connexion réussie !');
      },error: error =>{
          this._toastService.error(error);
               console.error(error);
      }
    });
  }
}
