import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeComponent } from './recipe/recipe.component';


const appRoutes: Routes = [
    {path:'shoppinglist', component: ShoppinglistComponent},
    {path:'recipes', 
     component: RecipeComponent,
     children:[ {path:'detail/:recipename', component: RecipedetailComponent}]
    }
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}