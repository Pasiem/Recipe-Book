import { Component, AfterContentInit, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, OnInit {
  
  constructor(private authService: AuthenticationService) {}
  
  ngAfterContentInit() {
  }
  ngOnInit() {
    this.authService.autoLogin();
  }
}
