import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('potatos', 27),
        new Ingredient('pickles',3)
      ];
    
    shoppingListUpdated = new Subject<{}>();
    startedEditing = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingListUpdated.next();
    }
    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppingListUpdated.next();
    }

    deleteItem(index: number) {
        this.ingredients.splice(index, 1);
        this.shoppingListUpdated.next();
    }
    
    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.shoppingListUpdated.next();
    }
    constructor(){}
}