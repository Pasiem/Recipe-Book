import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator, Validators } from '@angular/forms';
import { AuthenticationService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  pwMatch = true;
  errorMessage = null;
  authenticationForm: FormGroup;
  authObs: Observable<AuthResponseData>;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationForm = new FormGroup({
        'email': new FormControl(null, [Validators.email, Validators.required]),
        'passwordinfo': new FormGroup({     
                              'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
                              'repeatpassword': new FormControl({value: null, disabled: true}, [Validators.required, Validators.minLength(6), this.validPasswordMatch.bind(this)])
                        }) 
    });
  }

  validPasswordMatch(control: FormControl): {[s: string]: boolean} {
    if (this.authenticationForm) {
      if (control.value != this.authenticationForm.get('passwordinfo').get('password').value) {
        this.pwMatch = false;
        return {'passwordsDiffer': true};
      }
    }
    this.pwMatch = true;
    return null;
  }

  onSwitchMode() {
    this.isLoginMode=!this.isLoginMode;
    if (this.isLoginMode) {
      this.authenticationForm.get('passwordinfo').get('repeatpassword').disable();
    } else {
      this.authenticationForm.get('passwordinfo').get('repeatpassword').enable();
    }
  }

  onSubmit() {
    this.errorMessage = null;
    
    if (!this.authenticationForm.valid) return;
    
    const email = this.authenticationForm.get('email').value;
    const password = this.authenticationForm.get('passwordinfo').get('password').value;
    this.isLoading = true;
    
    if (this.isLoginMode)  {
      this.authObs = this.authService.loginUser(email, password);
    } else {
        this.authObs = this.authService.createNewUser(email, password);
    }
    this.authObs.subscribe(
      responsedata => {
          console.log(responsedata);
          this.router.navigate(['/recipes']);
          this.isLoading = false;
      }, error => {
          this.errorMessage = error;
          console.log(error);
          this.isLoading = false;
    });
  }
}
