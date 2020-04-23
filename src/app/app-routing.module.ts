import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipedetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppinglistComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipestartComponent } from './recipe/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
    {path:'shoppinglist', component: ShoppinglistComponent},
    {path:'auth', component: AuthComponent},
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