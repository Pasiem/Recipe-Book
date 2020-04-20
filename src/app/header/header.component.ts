import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router, private dataStorage: DataStorageService) { }

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

  ngOnInit() {
  }

}
