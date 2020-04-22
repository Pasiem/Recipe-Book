import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator, Validators } from '@angular/forms';
import { AuthenticationService } from './auth.service';

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

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationForm = new FormGroup({
        'email': new FormControl(null, [Validators.email, Validators.required]),
        'passwordinfo': new FormGroup({     
                              'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
                              'repeatpassword': new FormControl(null, [Validators.required, Validators.minLength(6), this.validPasswordMatch.bind(this)])
                        }) 
    });
  }

  validPasswordMatch(control: FormControl): {[s: string]: boolean} {
    if (this.authenticationForm) {
      if (control.value != this.authenticationForm.get('passwordinfo').get('password').value) {
        console.log(control.value + "     matches   " +this.authenticationForm.get('passwordinfo').get('password').value);
        this.pwMatch = false;
        return {'passwordsDiffer': true};
      }
    }
    this.pwMatch = true;
    return null;
  }
  onSwitchMode() {
    this.isLoginMode=!this.isLoginMode;
  }

  onSubmit() {
    this.errorMessage = null;
    
    if (!this.authenticationForm.valid) return;
    if (this.isLoginMode)  {
      console.log(this.authenticationForm);
    } else {
        const email = this.authenticationForm.get('email').value;
        const password = this.authenticationForm.get('passwordinfo').get('password').value;
        
        this.isLoading = true;
        this.authService.createNewUser(email, password).subscribe(
          responsedata => {
              console.log(responsedata);
              this.authenticationForm.reset();
              this.isLoading = false;
          }, error => {
              this.errorMessage = error;
              console.log(error);
              this.isLoading = false;
      });
    }
  }
}
