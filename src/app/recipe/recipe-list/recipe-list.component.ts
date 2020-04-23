import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from  '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  searchValue = "";

  private recipesChangedSub: Subscription;

  constructor(private recipeService: RecipeService, private dataStorage: DataStorageService) { }
  setSearchStr(searchstr: string) {
    this.searchValue = searchstr;
  }
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
