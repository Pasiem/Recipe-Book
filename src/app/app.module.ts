import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe.service';
import { SearchFilter } from './shared/filterlist.pipe';

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
    RecipestartComponent,
    RecipeEditComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
