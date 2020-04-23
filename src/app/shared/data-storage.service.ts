import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from "../recipe/recipe.model";
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { User } from "../auth/user.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthenticationService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.authService.user.pipe(
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
    }

    fetchData() {
        return this.authService.user.pipe(
            take(1), 
            exhaustMap(user => {
                return this.http.get<Recipe[]>(                
                    'https://recipe-book-d07fe.firebaseio.com/recipes.json',
                    {
                        params: new HttpParams().set('auth',user.token)
                    } 
                );
            }),
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}