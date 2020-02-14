import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  showRecipe = false;
  showShoppingList= false;
  ngAfterContentInit() {
    this.showRecipe = false;
    this.showShoppingList = false;
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
