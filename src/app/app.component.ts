import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, OnInit {
  showRecipe = false;
  showShoppingList= false;
  
  constructor(private shoppinglistService: ShoppingListService) {}
  
  ngAfterContentInit() {
    this.showRecipe = false;
    this.showShoppingList = false;
  }
  ngOnInit() {

  }
  onHeaderSelection(selection: boolean) {
      if (selection) {
         this.showRecipe = true;
         this.showShoppingList = false;
      }
      else {
         this.showRecipe = false;
         this.showShoppingList = true;
      }
  }
}
