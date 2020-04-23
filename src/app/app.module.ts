import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RecipedetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeitemComponent } from './recipe/recipe-list/recipe-item/recipeitem.component';
import { RecipelistComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppinglistComponent } from './shopping-list/shopping-list.component';
import { ShoppinglisteditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipestartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe.service';
import { SearchFilter } from './shared/filterlist.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
    SearchFilter,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
