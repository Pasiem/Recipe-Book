import { Component, OnInit, Input } from '@angular/core';

import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipedetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeIndex: number;
  
  constructor(private shoppinglistService: ShoppingListService, private recipeService: RecipeService,
    private route: ActivatedRoute) { }
  
  onToShoppingClicked() {
      this.recipeService.addIngredientsToShoppingList(this.selectedRecipe);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeIndex);
  }

  ngOnInit() {
    
    //const recipeIndex = +this.route.snapshot.params['recipename']; this method would set the id once and not allow for the selection of new recipe id
    this.route.params.subscribe(
      (params: Params) => {
         this.recipeIndex = +params['recipeIndex']; 
         this.selectedRecipe = this.recipeService.getRecipeAtIndex(this.recipeIndex);
      }
    )
  }

}
