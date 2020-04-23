import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthenticationService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  isAuthenticated = false;

  constructor(private router: Router, private dataStorage: DataStorageService, private authService: AuthenticationService) { }

  onHeaderClicked(headerInput: HTMLInputElement) {
    //var selection = headerInput.name;
    //if (selection == "recipe") this.router.navigate(['/recipes']);
    //else this.router.navigate(['/shoppinglist']);
  }
  onFetchData() {
    this.dataStorage.fetchData().subscribe();
  }
  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  onLogout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!!user);
    });
  }

  ngOnDestroy() {
    this.authService.user.unsubscribe();
  }
}
