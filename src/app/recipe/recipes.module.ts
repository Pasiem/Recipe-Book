import { NgModule } from "@angular/core";
import { RecipedetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeitemComponent } from "./recipe-list/recipe-item/recipeitem.component";
import { RecipelistComponent } from "./recipe-list/recipe-list.component";
import { RecipeComponent } from "./recipe.component";
import { RecipestartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RecipeRoutingModule } from "./recipe-routing.module";


@NgModule({
    declarations: [    
        RecipedetailComponent,
        RecipeitemComponent,
        RecipelistComponent,
        RecipeComponent,    
        RecipestartComponent,
        RecipeEditComponent
    ],
    imports: [
        RouterModule, 
        SharedModule,
        RecipeRoutingModule
    ],
    exports: [
        RecipedetailComponent,
        RecipeitemComponent,
        RecipelistComponent,
        RecipeComponent,    
        RecipestartComponent,
        RecipeEditComponent
    ],
    providers: []
})
export class RecipesModule {}