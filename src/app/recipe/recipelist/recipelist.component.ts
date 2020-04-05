import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from  '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private recipesChangedSub: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSub = this.recipeService.recipeListUpdated.subscribe(
      () => {
        this.recipes = this.recipeService.getRecipes();
      }
    );
  }

  ngOnDestroy() {
    this.recipesChangedSub.unsubscribe();
  }

}
