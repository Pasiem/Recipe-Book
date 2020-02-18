import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;

  onRecipeClicked(recipe: Recipe) {
    this.recipeService.selectedRecipe.emit(recipe);
  }
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
