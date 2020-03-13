import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('potatos', 27),
        new Ingredient('pickles',3)
      ];
    
    shoppingListUpdated = new Subject<{}>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingListUpdated.next();
    }
    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppingListUpdated.next();
    }
    constructor(){}
}