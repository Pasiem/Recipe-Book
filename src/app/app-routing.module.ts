import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipestartComponent } from './recipe/recipestart/recipestart.component'
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe/recipe-resolver.service';


const appRoutes: Routes = [
    {path:'shoppinglist', component: ShoppinglistComponent},
    {path:'recipes', component: RecipeComponent,
          children:[ {path:'', component: RecipestartComponent},
                     {path:'new', component: RecipeEditComponent},
                     {path:':recipeIndex', component: RecipedetailComponent, resolve: [RecipeResolverService]},     
                     {path:':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}]
    }
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}