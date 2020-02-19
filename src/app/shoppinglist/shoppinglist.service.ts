import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('potatos', 27),
        new Ingredient('pickles',3)
      ];
    
    shoppingListUpdated = new EventEmitter<{}>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingListUpdated.emit();
    }
    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppingListUpdated.emit();
    }
    constructor(){}
}