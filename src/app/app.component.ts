import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, OnInit {
  
  constructor(private shoppinglistService: ShoppingListService) {}
  
  ngAfterContentInit() {
  }
  ngOnInit() {

  }
}
