import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from "../recipe/recipe.model";
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from "../auth/auth.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "./ingredient.model";


@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, 
                private recipeService: RecipeService, 
                private authService: AuthenticationService,
                private shopService: ShoppingListService) {}

    saveData() {
        const recipes = this.recipeService.getRecipes();
        this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.put(
                    'https://recipe-book-d07fe.firebaseio.com/recipes.json',
                    recipes,
                    {
                        params: new HttpParams().set('auth',user.token)
                    } 
                )
            }),
        ).subscribe(response => {
                console.log(response);
        });

        const shoppingList = this.shopService.getIngredients();
        this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.put(
                    'https://recipe-book-d07fe.firebaseio.com/shoppinglist.json',
                    shoppingList,
                    {
                        params: new HttpParams().set('auth',user.token)
                    } 
                )
            }),
        ).subscribe(response => {
                console.log(response);
        });
    }

    fetchData() {
        this.http.get<Recipe[]>(                
            'https://recipe-book-d07fe.firebaseio.com/recipes.json',
        )
        .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        ).subscribe();

        this.http.get<Ingredient[]>(                
            'https://recipe-book-d07fe.firebaseio.com/shoppinglist.json',
        )
        .pipe(
            map(ingredients => {
                return ingredients.map(ingredient => {
                    return {...ingredient};
                });
            }),
            tap(ingredients => {
                this.shopService.setIngredients(ingredients);
            })
        ).subscribe();
    }
}