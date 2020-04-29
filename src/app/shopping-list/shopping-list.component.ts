import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  searchValue = "";
  
  private ingChangeSub: Subscription;

  constructor(private shoppinglistService: ShoppingListService) { }

  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }
  
  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.ingChangeSub = this.shoppinglistService.shoppingListUpdated.subscribe(
      ingredients => {
        this.ingredients = ingredients;
      }
    );
  }

  setSearchStr(searchstr: string) {
    this.searchValue = searchstr;
  }

  ngOnDestroy() {
    this.ingChangeSub.unsubscribe();
  }



}
