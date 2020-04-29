import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipestartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipedetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipe-resolver.service";
import { RecipeComponent } from "./recipe.component";
import { AuthGaurd } from "../auth/auth.gaurd";

const recipeRoutes: Routes = [
    {
        path:'', 
        component: RecipeComponent,
        canActivate: [AuthGaurd],
        children:[  {path:'', component: RecipestartComponent},
                    {path:'new', component: RecipeEditComponent},
                    {path:':recipeIndex', component: RecipedetailComponent, resolve: [RecipeResolverService]},     
                    {path:':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}]
      }
];
@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule {}