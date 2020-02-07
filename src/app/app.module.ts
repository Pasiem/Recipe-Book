import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipedetailComponent } from './recipelist/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipelist/recipeitem/recipeitem.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    RecipelistComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
