import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit{

  form: FormGroup = Object.create(null);
  loading:boolean = false;
    private formSubmitAttempt: boolean | undefined;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _toastService: ToastService
  ) {}


  ngOnInit(): void {
     this.form = this.fb.group({
username: new FormControl('',[Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(4)]),
     })
  }

  register: boolean = false;


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

  
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  signIn() {
    this.loading = true;

    this.authService.signIn(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
         this._toastService.success('Connexion réussie !');
         this.loading=false;
      },error: error =>{
          this._toastService.error(error);
               console.error(error);
                   this.loading=false;
      }
    });
  }
}
