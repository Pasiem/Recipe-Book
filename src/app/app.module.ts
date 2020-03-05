import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipestartComponent } from './recipe/recipestart/recipestart.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    RecipelistComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    HeaderComponent,
    RecipeComponent,
    DropdownDirective,
    RecipestartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
