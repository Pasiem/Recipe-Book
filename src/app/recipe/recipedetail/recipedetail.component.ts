import { Component, OnInit, Input } from '@angular/core';

import { ShoppingListService } from 'src/app/shoppinglist/shoppinglist.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private shoppinglistService: ShoppingListService, private recipeService: RecipeService) { }
  
  onToShoppingClicked() {
      this.recipeService.addIngredientsToShoppingList(this.selectedRecipe);
  }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
