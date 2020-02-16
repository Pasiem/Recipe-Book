import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;


  onOpenRecipe(recipeSel: Recipe) {
      this.selectedRecipe = recipeSel;

  }
  constructor() { }

  ngOnInit() {
  }

}
