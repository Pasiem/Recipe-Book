import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingChangeSub: Subscription;

  constructor(private shoppinglistService: ShoppingListService) { }

  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }
  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.ingChangeSub = this.shoppinglistService.shoppingListUpdated.subscribe(
      () => {
        this.ingredients = this.shoppinglistService.getIngredients();
      }
    );
  }

  ngOnDestroy() {
    this.ingChangeSub.unsubscribe();
  }



}
